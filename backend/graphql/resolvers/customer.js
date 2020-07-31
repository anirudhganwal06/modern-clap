const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const springedge = require('springedge');

const Customer = require('../../models/customer');
const { transformCustomer } = require('./transformers');

module.exports = {
  customers: async (args, ctx) => {
    if (!ctx.req.isAuth || ctx.req.role !== 'admin')
      throw new Error('Unauthorized');

    const customers = await Customer.find()
      .skip((args.page - 1) * args.limit)
      .limit(args.limit);
    return customers.map(customer => transformCustomer(customer));
  },

  customer: async (args, ctx) => {
    if (!ctx.req.isAuth || ctx.req.role !== 'admin')
      throw new Error('Unauthorized');

    let customer = {};
    if (args.id) {
      customer = await Customer.findById(args.id);
    } else if (args.mobile) {
      customer = await Customer.findOne({ mobile: args.mobile });
    }
    return transformCustomer(customer);
  },

  sendOTP: async args => {
    try {
      let otp = '';
      for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
      }
      console.log('OTP: ' + otp);
      // `Your OTP from Modern Clap is ${otp}` // Send this string in production (Only template string works now)
      const params = {
        sender: process.env.SE_SENDER,
        apikey: process.env.SE_APIKEY,
        to: [args.mobile],
        message: 'Hi, this is a test message from spring edge',
        format: 'json'
      };
      await new Promise((resolve, reject) => {
        springedge.messages.send(params, 5000, (err, res) => {
          if (err) {
            reject(new Error("Message can't be sent"));
          }
          resolve(res);
        });
      });
      const hashedOTP = await bcrypt.hash(otp, 12);
      await Customer.findOneAndUpdate(
        { mobile: args.mobile },
        {
          otp: hashedOTP,
          otpSent: true,
          otpTime: Date.now()
        },
        {
          useFindAndModify: false
        }
      );
      return 'Message sent';
    } catch (err) {
      return "Message can't be sent";
    }
  },

  loginCustomer: async (args, ctx) => {
    const customer = await Customer.findOne({ mobile: args.mobile });

    if (!customer) return new Error('Mobile number does not exist');

    if (
      !customer.otpSent ||
      customer.otpTime.getTime() < Date.now() - 10 * 60 * 1000
    )
      throw new Error('OTP Expired');

    const isOTPCorrect = await bcrypt.compare(args.otp, customer.otp);

    if (!isOTPCorrect) throw new Error('OTP is wrong');

    const jwtValidity = 60 * 60 * 24 * 30; // in seconds
    const token = jwt.sign(
      {
        uid: customer.id,
        role: 'customer',
        exp: Math.floor(Date.now() / 1000) + jwtValidity
      },
      process.env.JWT_SECRET
    );
    ctx.res.cookie('jwt', token, {
      httpOnly: true,
      // secure: true,
      maxAge: jwtValidity * 1000
    });

    customer.otp = '';
    customer.otpSent = false;
    await customer.save();
    return transformCustomer(customer);
  }
};

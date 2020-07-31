const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Provider = require('../../models/provider');
const Category = require('../../models/category');
const { transformProvider, provider } = require('./transformers');

module.exports = {
  providers: async () => {
    const providers = await Provider.find();
    return providers.map(provider => transformProvider(provider));
  },

  provider: (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Not authenticated!');
    if (args.id) {
      return provider(args.id);
    } else if (ctx.req.role === 'provider' && ctx.req.uid) {
      return provider(ctx.req.uid);
    } else {
      throw new Error('Either pass a provider ID or login');
    }
  },

  registerProvider: async args => {
    const hashedPassword = await bcrypt.hash(args.provider.password, 12);
    const validCategory = await Category.exists({
      _id: args.provider.businessCategories[0]
    });

    if (!validCategory) throw new Error('Invalid Category');

    const newProvider = new Provider({
      ...args.provider,
      password: hashedPassword
    });
    const provider = await newProvider.save();
    return transformProvider(provider);
  },

  loginProvider: async (args, ctx) => {
    const provider = await Provider.findOne({ ownerEmail: args.email });
    if (!provider) {
      throw new Error('User not found!');
    }
    const passwordMatch = await bcrypt.compare(
      args.password,
      provider.password
    );
    if (!passwordMatch) {
      throw new Error('Password not matched!');
    }
    const jwtValidity = 60 * 60 * 24 * 30; // in seconds
    const token = jwt.sign(
      {
        uid: provider.id,
        role: 'provider',
        exp: Math.floor(Date.now() / 1000) + jwtValidity
      },
      // eslint-disable-next-line no-undef
      process.env.JWT_SECRET
    );
    ctx.res.cookie('jwt', token, {
      httpOnly: true,
      // secure: true,
      maxAge: jwtValidity * 1000
    });
    return transformProvider(provider);
  },

  updateProvider: async (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Not authenticated!');
    let providerId = ctx.req.uid;
    if (args.id) {
      providerId = args.id;
    }
    const provider = await Provider.findById(providerId);
    Object.keys(args.newData).map(key => {
      provider[key] = args.newData[key];
    });
    await provider.save();
    return transformProvider(provider);
  }
};

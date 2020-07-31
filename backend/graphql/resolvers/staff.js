const bcrypt = require('bcryptjs');

const Staff = require('../../models/staff');
const { staff, transformStaff } = require('./transformers');

module.exports = {
  staffs: () => {
    // TODO
  },

  staff: args => {
    return staff(args.id);
  },

  createStaff: async args => {
    const hashedPassword = await bcrypt.hash(args.staff.password, 12);
    const newStaff = new Staff({
      ...args.staff,
      password: hashedPassword
    });
    const staff = await newStaff.save();
    return transformStaff(staff);
  }
};

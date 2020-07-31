const Service = require('../../models/service');
const Category = require('../../models/category');
const { service, transformService } = require('./transformers');

module.exports = {
  service: args => {
    return service(args.id);
  },

  createService: async args => {
    const existingServie = await Service.findOne({
      name: args.service.name,
      category: args.service.category
    });
    if (existingServie)
      throw new Error('Service name already taken in this category.');

    const category = await Category.findById(args.service.category);
    if (!category) throw new Error('Category not found!');

    const newService = new Service({
      ...args.service
    });
    const service = await newService.save();

    category.services.push(service.id);
    await category.save();

    return transformService(service);
  }
};

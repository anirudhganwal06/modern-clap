const Category = require('../../models/category');
const Type = require('../../models/type');

const { transformCategory } = require('./transformers');

module.exports = {
  categories: async () => {
    const categories = await Category.find();
    return categories.map(category => transformCategory(category));
  },

  category: async ({ name }) => {
    const category = await Category.findOne({ name });
    return category._doc;
  },

  createCategory: async ({ category }) => {
    const existingCategory = await Category.findOne({
      name: category.name,
      type: category.typeId
    });
    if (existingCategory)
      throw new Error('Category name already taken for this type!');

    const type = await Type.findById(category.type);
    if (!type) throw new Error('Type not found!');

    const newCategory = new Category({
      ...category,
      services: []
    });
    const result = await newCategory.save();

    type.categories.push(result.id);
    await type.save();

    return transformCategory(result);
  }
};

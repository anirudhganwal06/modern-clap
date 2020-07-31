const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  icon: String,
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Type',
    required: true
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Service'
    }
  ]
});

module.exports = mongoose.model('Category', categorySchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  faqs: [
    {
      question: {
        type: String,
        required: true
      },
      answer: {
        type: String,
        required: true
      }
    }
  ],
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Service', serviceSchema);

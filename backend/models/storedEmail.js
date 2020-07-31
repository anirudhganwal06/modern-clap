const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storedEmailSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  emails: [
    {
      email: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('StoredEmail', storedEmailSchema);

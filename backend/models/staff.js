const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const staffSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
    profession: {
      type: String,
      required: true
    },
    permissions: {
      dashboard: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      notification: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      inbox: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      requests: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      acceptedRequests: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      service: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      staff: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      sale: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      review: {
        type: String,
        enum: ['read', 'write', 'none']
      },
      settings: {
        type: String,
        enum: ['read', 'write', 'none']
      }
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    certificates: [String],
    businessCategories: [String],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Staff', staffSchema);

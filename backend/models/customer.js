const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    mobile: {
      type: String,
      required: true
    },
    addresses: [
      {
        flatNo: String,
        buildingName: String,
        area: String,
        landmark: String,
        POBox: String,
        type: {
          type: String,
          enum: ['home', 'work', 'other']
        }
      }
    ],
    otp: String,
    otpSent: Boolean,
    otpTime: Date,
    pendingRequests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request'
      }
    ],
    completedRequests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request'
      }
    ],
    cancelledRequests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Request'
      }
    ],
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Review'
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Customer', customerSchema);

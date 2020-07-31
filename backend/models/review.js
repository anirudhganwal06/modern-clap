const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    request: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Request'
    },
    toolsRating: {
      type: Number,
      min: 1,
      max: 5
    },
    workRating: {
      type: Number,
      min: 1,
      max: 5
    },
    behaviourRating: {
      type: Number,
      min: 1,
      max: 5
    },
    overallRating: {
      type: Number,
      min: 1,
      max: 5
    },
    message: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);

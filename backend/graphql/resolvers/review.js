const Review = require('../../models/review');
const Customer = require('../../models/customer');
const { transformReview, reviews } = require('./transformers');

module.exports = {
  reviews: async args => {
    if (args.customer) {
      const customer = await Customer.findById(args.customer);
      return reviews(customer.reviews);
    } else {
      const reviews = await Review.find();
      return reviews.map(transformReview);
    }
  },

  review: async args => {
    const requestId = args.requestId;
    const review = await Review.findOne({ request: requestId });
    return transformReview(review);
  },

  createReview: async (args, ctx) => {
    const newReview = new Review({
      ...args.review
    });
    const review = await newReview.save();

    const customerId = ctx.req.uid; // we will inject uid in req while using the isAuth middleware
    await Customer.findByIdAndUpdate(customerId, {
      $push: {
        reviews: review.id
      }
    });

    return transformReview(review);
  }
};

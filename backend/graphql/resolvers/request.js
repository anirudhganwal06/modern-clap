const mongoose = require('mongoose');

const Request = require('../../models/request');
const Customer = require('../../models/customer');
const { transformRequest, request } = require('./transformers');

module.exports = {
  requests: async (args, ctx) => {
    let requestlist = {};
    if (!ctx.req.isAuth) throw new Error('Unauthorized');

    switch (ctx.req.role) {
      case 'provider':
      case 'customer':
        requestlist = (
          await Request.aggregate()
            .match({ [ctx.req.role]: mongoose.Types.ObjectId(ctx.req.uid) })
            .sort({ createdAt: 'desc' })
            .facet({
              requests: [
                { $skip: (args.page - 1) * args.limit },
                { $limit: args.limit }
              ],
              count: [{ $count: 'count' }]
            })
        )[0];
        break;

      case 'admin':
        if (args.customer) {
          requestlist = (
            await Request.aggregate
              .match({ customer: args.customer })
              .sort({ createdAt: 'desc' })
              .facet({
                requests: [
                  { $skip: (args.page - 1) * args.limit },
                  { $limit: args.limit }
                ],
                count: [{ $count: 'count' }]
              })
          )[0];
        } else if (args.provider) {
          requestlist = (
            await Request.find({ provider: args.provider })
              .sort({ createdAt: 'desc' })
              .facet({
                requests: [
                  { $skip: (args.page - 1) * args.limit },
                  { $limit: args.limit }
                ],
                count: [{ $count: 'count' }]
              })
          )[0];
        }
    }

    return {
      requests: requestlist.requests.map(request => transformRequest(request)),
      pagination: {
        page: args.page,
        limit: args.limit,
        total: requestlist.count[0].count
      }
    };
  },

  request: async (args, ctx) => {
    if (!ctx.req.isAuth) throw new Error('Unauthorized');

    const requestData = await request(args.id);

    if (requestData[ctx.req.role].toString() !== ctx.req.uid)
      throw new Error('Unauthorized');

    return requestData;
  },

  bookRequest: async (args, ctx) => {
    if (!ctx.req.isAuth || ctx.req.role !== 'customer')
      throw new Error('Unauthorized');

    const newRequest = new Request({
      serivces: args.request.serivces.map(service => ({
        service: service,
        staffAssigned: []
      })),
      time: args.request.time,
      location: {
        flatNo: args.request.flatNo,
        area: args.request.area,
        landmark: args.request.landmark,
        addressType: args.request.addressType
      },
      payment: {
        mode: args.request.mode,
        subTotal: args.request.subTotal,
        vat: args.request.vat,
        discount: args.request.discount,
        total: args.request.total
      },
      status: 'pending',
      customer: ctx.req.uid
    });
    const request = await newRequest.save();

    await Customer.findByIdAndUpdate(ctx.req.uid, {
      $push: {
        pendingRequests: request.id
      }
    });

    return transformRequest(request);
  },

  cancelRequest: async (args, ctx) => {
    await Request.findByIdAndUpdate(args.id, {
      status: 'cancelled'
    });

    await Customer.findByIdAndUpdate(ctx.req.uid, {
      $pull: {
        pendingRequests: args.id
      },
      $push: {
        cancelledRequests: args.id
      }
    });

    return 'Request deleted successfully!';
  },

  updateRequest: () => {
    // TODO
  }
};

const authResolver = require('./auth');
const categoryResolver = require('./category');
const customerResolver = require('./customer');
const providerResolver = require('./provider');
const requestResolver = require('./request');
const reviewResolver = require('./review');
const serviceResolver = require('./service');
const staffResolver = require('./staff');
const typeResolver = require('./type');
const notificationResolver = require('./notification');
const storeEmailResolver = require('./storeEmail');

module.exports = {
  ...authResolver,
  ...categoryResolver,
  ...customerResolver,
  ...providerResolver,
  ...requestResolver,
  ...reviewResolver,
  ...serviceResolver,
  ...staffResolver,
  ...typeResolver,
  ...notificationResolver,
  ...storeEmailResolver
};

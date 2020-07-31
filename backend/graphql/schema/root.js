const { buildSchema } = require('graphql');

const categorySchema = require('./category');
const customerSchema = require('./customer');
const providerSchema = require('./provider');
const requestSchema = require('./request');
const reviewSchema = require('./review');
const serviceSchema = require('./service');
const staffSchema = require('./staff');
const typeSchema = require('./type');
const notificationSchema = require('./notification');

module.exports = buildSchema(`
type Pagination {
  page: Int!
  limit: Int!
  total: Int!
}

${categorySchema}
${customerSchema}
${providerSchema}
${requestSchema}
${reviewSchema}
${serviceSchema}
${staffSchema}
${typeSchema}
${notificationSchema}

union User = Provider | Customer

type RootQuery {
  isAuthenticated: User!
  categories: [Category!]!
  customers: [Customer!]!
  providers: [Provider!]!
  requests(page: Int = 1, limit: Int = 10, customer: ID, provider: ID): RequestList!
  reviews(customer: ID): [Review!]!
  staffs(provider: ID!): [Staff!]!
  types: [Type!]!
  category(name: String!): Category!
  customer(id: ID, mobile: String): Customer!
  provider(id: ID): Provider!
  request(id: ID!): Request!
  review(requestId: ID!): Review!
  service(id: ID!): Service!
  staff(id: ID!): Staff!
  type(id: ID!): Type!
  notifications: Notifications!
}

type RootMutation {
  createType(type: TypeInput!): Type!
  createCategory(category: CategoryInput!): Category!
  createService(service: ServiceInput!): Service!
  bookRequest(request: RequestInput): Request!
  cancelRequest(id: ID!): String!
  updateRequest(id: ID!, newTime: String!): Request!
  createReview(review: ReviewInput!): Review!
  createStaff(staff: StaffInput): Staff!
  sendOTP(mobile: String!): String!
  loginCustomer(mobile: String!, otp: String!): Customer!
  registerProvider(provider: RegisterProviderInput!): Provider!
  loginProvider(email: String!, password: String!): Provider!
  logout: Boolean!
  updateProvider(id: ID, newData: UpdateProviderInput): Provider!
  markAsRead(id: String): Boolean
  storeEmailForNotifications(email: String!, role: String!): String
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);

module.exports = `
type Customer {
  _id: ID!
  name: String!
  mobile: String!
  pendingRequestIds: [ID!]!
  completedRequestIds: [ID!]!
  cancelledRequestIds: [ID!]!
  reviewIds: [ID!]!
  pendingRequests: [Request!]!
  completedRequests: [Request!]!
  cancelledRequests: [Request!]!
  reviews: [Review!]!
  createdAt: String
  updatedAt: String
}
`;

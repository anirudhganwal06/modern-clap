module.exports = `
type Staff {
  _id: ID!
  firstName: String!
  lastName: String!
  mobile: String!
  profession: String!
  permissions: Permissions!
  email: String!
  password: String!
  certificaties: [String!]!
  businessCategories: [String!]!
  reviewIds: [ID!]!
  reviews: [Review!]!
  createdAt: String
  updatedAt: String
}

type Permissions {
  dashboard: String!
  notification: String!
  inbox: String!
  requests: String!
  acceptedRequests: String!
  service:  String!
  staff: String!
  sale: String!
  review: String!
  settings: String!
}

input StaffInput {
  firstName: String!
  lastName: String!
  mobile: String!
  profession: String!
  permissions: PermissionsInput!
  email: String!
  password: String!
  certificaties: [String!]!
  businessCategories: [String!]!
}

input PermissionsInput {
  dashboard: String!
  notification: String!
  inbox: String!
  requests: String!
  acceptedRequests: String!
  service:  String!
  staff: String!
  sale: String!
  review: String!
  settings: String!
}
`;

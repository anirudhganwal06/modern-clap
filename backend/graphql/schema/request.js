module.exports = `
type RequestList {
  requests: [Request!]!
  pagination: Pagination
}

type Request {
  _id: ID!
  serviceIds: [ServiceRequestId!]!
  services: [ServiceRequest!]!
  time: String!
  location: Location!
  payment: Payment!
  status: String!
  reviewId: ID
  customerId: ID!
  providerId: ID!
  review: Review
  customer: Customer!
  provider: Provider!
}

type ServiceRequestId {
  service: ID!
  staffsAssigned: [ID!]!
}

type ServiceRequest {
  service: Service!
  staffsAssigned: [Staff!]
}

type Location {
  flatNo: String!
  building: String!
  area: String!
  landmark: String
  addressType: String!
}

type Payment {
  mode: String!
  subtotal: Float!
  vat: Float!
  discount: Float!
  total: Float!
  status: String!
}

input RequestInput {
  services: [ID!]!
  time: String!
  flatNo: String!
  building: String!
  area: String!
  landmark: String
  addressType: String!
  mode: String!
  subtotal: Float!
  vat: Float!
  discount: Float!
  total: Float!
  provider: ID!
}
`;

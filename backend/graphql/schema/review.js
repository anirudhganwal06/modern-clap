module.exports = `
type Review {
  _id: ID!
  requestId: ID!
  request: Request!
  toolsRating: Int!
  workRating: Int!
  behaviourRating: Int!
  overallRating: Int!
  message: String
  createdAt: String
  updatedAt: String
}

input ReviewInput {
  request: ID!
  toolsRating: Int!
  workRating: Int!
  behaviourRating: Int!
  overallRating: Int!
  message: String
}
`;

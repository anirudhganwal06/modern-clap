module.exports = `
type Category {
  _id: ID!
  name: String!
  icon: String
  typeId: ID!
  type: Type!
  serviceIds: [ID!]!,
  services: [Service!]!
}

input CategoryInput {
  name: String!
  icon: String
  type: ID!
}
`;

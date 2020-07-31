module.exports = `
scalar Upload

type Service {
  _id: ID!
  name: String!
  categoryId: ID!
  category: Category!
  faqs: [FAQ!]!
  image: String!
}

type FAQ {
  question: String!
  answer: String!
}

input ServiceInput {
  name: String!
  category: ID!
  faqs: [FAQInput!]
  image: Upload!
}

input FAQInput {
  question: String!
  answer: String!
}
`;

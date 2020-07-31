module.exports = `
type Notification {
  id: ID!
  type: String
  requestId: String
  message: String
  seen: Boolean
}

type Notifications {
  data: [Notification!]!
  count: Int!
}
`;
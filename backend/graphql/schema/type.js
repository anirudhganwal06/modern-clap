module.exports = `
	type Type {
		name: String!
		icon: String
		categoryIds: [ID!]!
		categories: [Category!]!
	}

	input TypeInput {
		name: String!
		icon: String
	}
`;

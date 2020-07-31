module.exports = `
type Provider {
  _id: ID!
  ownerName: String
  ownerEmail: String
  ownerMobile: String
  ownerPhone: String
  country: String!
  tradeLicenseNo: String
  tradeLicenseDate: String
  tradeLicenseDoc: String
  businessCategoryIds: [ID!]!
  businessCategories: [Category!]!
  services: [ServiceProvider!]!
  shopName: String!
  contactPersonName: String
  contactPersonMobile: String
  city: String!
  pincode: String!
  address: String!
  area:  String!
  createdAt: String
  updatedAt: String
}

input RegisterProviderInput {
  ownerName: String!
  ownerEmail: String!
  ownerMobile: String!
  ownerPhone: String
  country: String!
  password: String!
  tradeLicenseNo: String!
  tradeLicenseDate: String!
  tradeLicenseDoc: String!
  shopName: String!
  businessCategories: [ID!]!
  contactPersonName: String
  contactPersonMobile: String
  city: String!
  pincode: String!
  address: String!
  area:  String!
}

input UpdateProviderInput {
  ownerName: String
  ownerEmail: String
  ownerMobile: String
  ownerPhone: String
  country: String
  password: String
  tradeLicenseNo: String
  tradeLicenseDate: String
  tradeLicenseDoc: String
  businessCategories: [ID!]
  services: [ServiceProviderInput!]
  shopName: String
  contactPersonName: String
  contactPersonMobile: String
  city: String
  pincode: String
  address: String
  area:  String
}

type ServiceProvider {
  service: Service!
  serviceId: ID!
  cutPrice: Float!
  salePrice: Float!
  active: Boolean!
}

input ServiceProviderInput {
  service: ID!
  cutPrice: Float!
  salePrice: Float!
  active: Boolean!
}
`;

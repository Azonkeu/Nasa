const { gql } = require("apollo-server");

const typeDefs = gql`
  type Images {
    collection: Collection!
  }
  type Collection {
    items: [Items!]!
  }

  type Items {
    href: String!
    data: [Info]!
  } 

  type Info {
    title: String!
    description: String
  }
  
  type Query {
  getImages(input: String!): Images!
}
`;

module.exports = typeDefs;

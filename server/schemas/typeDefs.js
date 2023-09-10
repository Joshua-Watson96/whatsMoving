const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Bedroom {
    _id: ID
    selectedBedroom: String
}

type Query {
    getBedroom: Bedroom
}

type Mutation {
    saveSelectedBedroom(selectedBedroom: String!): Bedroom
}`;

module.exports = typeDefs;
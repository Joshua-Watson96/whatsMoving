const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Bedroom {
    _id: ID
    selectedBedroom: String
}

type PickUp {
    _id: ID
    selectedPicKUp: String

}

type Query {
    getBedroom: Bedroom
}

type Mutation {
    saveSelectedBedroom(selectedBedroom: String!): Bedroom
    saveSelectedPickUp(selectedPickUp: String!): PickUp
}

`;

module.exports = typeDefs;
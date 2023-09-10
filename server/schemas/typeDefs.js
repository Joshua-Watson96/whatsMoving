const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Bedroom {
    _id: ID
    name: String
}

type Query {
    getBedroom: Bedroom
}`;

module.exports = typeDefs;
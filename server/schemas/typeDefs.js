const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String
    password: String!
    friends: [User]
    favorites: [bingoList]
}

type BingoList {
    _id: ID
    listOwner: ID
    name: String!
    list: [String]!
}

type BingoCard {
    _id: ID
    cardOwner: ID
    parentList: ID
    squares: [CardSquare]
    status: Boolean
    blackoutStatus: Boolean
}

type CardSquare {
    text: String
    location: String
    status: Boolean
}





`;
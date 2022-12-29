const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    friends: [User]
    favorites: [bingoList]
}

type BingoList {
    _id: ID
    owner: ID
    name: String!
    list: [String]!
}

type BingoCard {
    _id: ID
    owner: ID
    parentList: ID
    squares: [CardSquare]!
    status: Boolean
}

type CardSquare {
    text: String!
    location: String!
    status: Boolean
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    user(username: String!): User
    users: [User]
    card(cardId: ID!): BingoCard
    cards: [BingoCard]
    list(listId: ID!): BingoList
    lists: [BingoList]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveList(owner: ID, name: String!, list: [String]!): BingoList
    saveCard(owner: ID, parentList: ID, squares: [CardSquare]!, status: Boolean): BingoCard
    removeList(listId: ID!): [BingoList]
    removeCard(cardId: ID!): [BingoCard]
}

`;
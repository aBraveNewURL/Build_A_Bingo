const { AuthenticationError } = require('apollo-server-express');
const { Users } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
Query: {
    me: async (parent, args, context) => {
        if (context.user) {
        return User.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    },

Mutation: {
    
}
}

module.exports = resolvers;
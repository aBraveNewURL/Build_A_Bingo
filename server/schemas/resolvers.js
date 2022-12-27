const { AuthenticationError } = require('apollo-server-express');
const { Users } = require('../models');
const { signToken } = require('../utils/auth');
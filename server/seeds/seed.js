const db = require('../config/connection');
const { Users } = require('../models');

const usernameData = require('./usernameData.json');
const emailData = require('./emailData.json');

console.log('usernameData:', usernameData);
console.log('emailData:', emailData);
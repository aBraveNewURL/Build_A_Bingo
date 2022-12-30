const db = require('../config/connection');
const { User } = require('../models');
const { emailList, usernameList, getRandomIndex, getRandomIndexValue, getRandomDummyUsers, getRandomBingoNumber } = require('./data');

console.log('usernameList:', usernameList);
console.log('emailList:', emailList);

db.once('open', async () => {

    await User.deleteMany({});

    const dummyUsers = getRandomDummyUsers(usernameList, emailList, 10);

    await User.collection.insertMany(dummyUsers);
    process.exit(0);

});
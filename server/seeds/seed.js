const db = require('../config/connection');
const { User, BingoList } = require('../models');
const { emailList, usernameList, bingoList, getRandomIndex, getRandomIndexValue, getRandomDummyUsers, getRandomBingoNumber, getRandomBingoNumberList } = require('./data');

db.once('open', async () => {

    const numList = getRandomBingoNumberList();

    console.log(numList);
    console.log(numList.list.length);

    // await User.deleteMany({});
    // await BingoList.deleteMany({});
    
    // // create users list, then add them to the db
    // const dummyUserList = getRandomDummyUsers(usernameList, emailList, 10);
    // const users = await User.collection.insertMany(dummyUserList);
    

    // const userForNewLists = await User.findOne({}).select('_id').exec();

    // const bingoListData = await bingoList.map((list) => {
    //     list.owner = userForNewLists;
    //     return list;
    // });

    // await BingoList.collection.insertMany(bingoListData);

    // const manyUsers = await User.find({}).select('_id').limit(10);
    
    // manyUsers.map((user) => {
    //     console.log(user);

    // })
    process.exit(0);

});
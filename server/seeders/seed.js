const db = require('../config/connection');
const { User, BingoList } = require('../models');
const listSeeds = require('./listSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  await BingoList.deleteMany({});
  await BingoList.create(listSeeds);

  console.log('Bingo list seeds created!');
  process.exit(0);
});
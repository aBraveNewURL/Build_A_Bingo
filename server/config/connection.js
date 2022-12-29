// connection.js

// const mongoose = require('mongoose');

// module.exports = function () {
//   mongoose.connect(
//     'mongodb://localhost:27017/bingo',
//     { useNewUrlParser: true }
//   );

//   mongoose.connection.on('connected', () => {
//     console.log('MongoDB connected');
//   });

//   mongoose.connection.on('error', (err) => {
//     console.error(err);
//   });
// };

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

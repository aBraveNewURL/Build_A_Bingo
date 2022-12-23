const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const connectToMongoDB = require('./config/connection');


// Connect to the MongoDB database
connectToMongoDB();
  // Create a new user account
  app.post('/api/users', (req, res) => {
    // Get the user data from the request body
    const user = req.body;

    // Hash the password
    user.password = hashPassword(user.password);

    // Insert the user into the Users collection
    db.collection('Users').insertOne(user, (err, result) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);

// create operation using User.create method
app.post('/users', function(req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  user.save(function(error) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(user);
    }
  });
});


app.use('/graphql', graphqlHTTP({
  schema: // your GraphQL schema
  rootValue: // your root resolver object
  graphiql: true // enable the GraphiQL interface
}));

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});


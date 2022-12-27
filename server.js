require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const connectToMongoDB = require('./config/connection');
const jwt = require('jsonwebtoken');


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

// START: added portion with JWT components
app.use(express.json())

// TODO posts can be commented out or removed completely once tested 
const posts = [
    {
        username: 'TEST1',
        title: 'First post'
    },
    {
        username: 'TEST2',
        title: 'Second post'
    },
    {
        username: 'TEST3',
        title: 'Third post'
    }
]

app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post = post.username === req.user.name))
})

app.post('/login', (req, res) => {
    // user will need authentication - bcrypt? 
    const username = req.body.username
    const user = { name: username }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null)
        return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
// END: added portion with JWT components

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});


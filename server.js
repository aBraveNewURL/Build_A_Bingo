const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: // your GraphQL schema
  rootValue: // your root resolver object
  graphiql: true // enable the GraphiQL interface
}));

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});

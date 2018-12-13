var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    message: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  message: () => {
    return 'Hello world!';
  },
};

var app = express();
// graphiql: true, use the GraphiQL tool to manually issue GraphQL queries
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

require("dotenv").config();
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer();

const port = process.env.port || 9000

server.listen(port).then(() => {
  console.log(`server running 🚀 http://localhost:${port}/graphql`)
});

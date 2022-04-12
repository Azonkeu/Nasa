require("dotenv").config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const NasaImagesAPI = require('./datasources/NasaAPI');

const server = new ApolloServer({
  dataSources: () => ({
    nasaApi: new NasaImagesAPI()
  }),
  typeDefs, resolvers
});

const port = process.env.port || 9000

server.listen(port).then(() => {
  console.log(`server running 🚀 http://localhost:${port}/graphql`)
});

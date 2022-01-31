import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';
import { Api } from './core/api';

// Prepeare our data source
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    api: new Api(),
  }),
});

// Run the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

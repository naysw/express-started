import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import http from "node:http";
import { usersResolver } from "./resolvers/users.resolver";

// Construct a schema, using GraphQL schema language
var schema = gql(`
  interface Node {
    id: ID!
  }

  type User implements Node {
    id: ID!
    name: String
  }


  type Query {
    users: [User!]!
  }
`);

const resolvers = {
  Query: {
    users: () => usersResolver(),
  },
};

/**
 * bootstrap application
 *
 * @return
 */
(async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: [resolvers],
    csrfPrevention: true,
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 3001 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
})();

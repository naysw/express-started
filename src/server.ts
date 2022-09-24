import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "node:http";
import "reflect-metadata";
import { usersResolver } from "./resolvers/users.resolver";
import { typeDefs } from "./typeDefs";

/**
 * bootstrap application
 *
 * @return
 */
(async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query: {
        users: usersResolver,
      },
    },
    csrfPrevention: true,
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({
        embed: true,
      }),
    ],
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 3001 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
})();

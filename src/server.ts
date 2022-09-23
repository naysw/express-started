import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "node:http";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/users.resolver";

/**
 * bootstrap application
 *
 * @return
 */
(async () => {
  const app = express();

  const httpServer = http.createServer(app);

  const schema = await buildSchema({
    resolvers: [UserResolver],
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 3001 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
})();

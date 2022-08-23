import compression from "compression";
import cors from "cors";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import expressRateLimit from "express-rate-limit";
import { buildSchema } from "graphql";
import morgan from "morgan";
import path from "path";
import { corsOptions } from "./config/cors";
import passport from "./lib/passport";
import handleError from "./middleware/handleError";
import router from "./routes/api";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

/**
 * bootstrap application
 *
 * @return
 */
(async function bootstrap() {
  const app = express();

  app.set("PORT", process.env.PORT || 3001);

  app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
  );

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(expressRateLimit({ windowMs: 60 * 1000, max: 30 }));
  app.use(morgan("common"));
  app.use(compression());
  app.use(passport.initialize());
  // app.use(helmet());
  app.use(cors(corsOptions));
  app.use("/api", router);
  app.use(handleError);

  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    })
  );

  app.listen(app.get("PORT"), () => {
    console.log(`Server is running on PORT:${app.get("PORT")}`);
  });
})();

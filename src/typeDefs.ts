import { gql } from "apollo-server-core";

export const typeDefs = gql`
  interface Node {
    id: ID!
  }

  type User implements Node {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
  }

  type Query {
    users(take: Int, skip: Int): [User!]!
  }
`;

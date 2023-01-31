import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer, gql } from "apollo-server";
import pool from "./config/db.js";

const typeDefs = gql`
  type Campground {
    camp_id: ID!
    title: String!
    description: String!
    image: String!
    location: String!
    price: Float!
    created_at: String!
    user_id: ID!
  }
  type Query {
    getCapmgrounds: [Campground]!
  }
`;

const resolvers = {
  Query: {
    getCapmgrounds: async () => {
      const [rows, fields] = await pool.query("SELECT * FROM campground");
      return rows;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`SERVER RUNNIG AT: ${url}`));

import * as dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`SERVER RUNNIG AT: ${url}`));

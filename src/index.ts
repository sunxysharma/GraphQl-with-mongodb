import dotenv from 'dotenv';
import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
dotenv.config({ path: ".env" });

const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app });
 
  await mongoose.connect(process.env.MONGODB_URI || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.listen({ port: process.env.PORT }, () =>
    console.log(`🚀 :happy Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  );
};

startServer();


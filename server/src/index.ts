import express from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./graphql";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const port = process.env.PORT || 8080;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app, path: "/api" });
app.listen(port, () => console.log(`[app]: running on port ${port}`));

import { ApolloClient } from "@apollo/client";
import env from "~config/env";
import cache from "./cache";

const client = new ApolloClient({
  uri: env.graphqlEndpoint,
  cache,
});

export default client;

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import App from "./App";
import { config } from "./config";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: config.serverUri,
  cache,
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

/ or send to an analytics endpoint. Learn more: https:/ / bit.ly / CRA - vitals;

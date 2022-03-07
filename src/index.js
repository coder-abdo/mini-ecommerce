import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import App from "./App";
import { config } from "./config";
import "./index.css";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: config.serverUri,
  cache,
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

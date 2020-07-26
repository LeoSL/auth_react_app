import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import App from "./App";
import { AUTH_TOKEN } from "./constants";

const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const token = localStorage.getItem(AUTH_TOKEN);
const client = new ApolloClient({
  uri: "http://localhost:4000",
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
  cache: new InMemoryCache(),
  mode: "no-cors",
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

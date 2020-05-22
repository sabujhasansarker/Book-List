import React from "react";

// Components
import Booklist from "./components/BookList";
import AddBook from "./components/AddBook";

// Appllo GraphQL
import AppolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// Apollo client setup
const client = new AppolloClient({
  uri: `http://localhost:4000/graphql`,
});
const App = () => {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <Booklist />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;

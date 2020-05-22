import React, { Component } from "react";

// Components
import Booklist from "./components/BookList";

// Appllo GraphQL
import AppolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// Apollo client setup
const client = new AppolloClient({
  uri: `http://localhost:4000/graphql`,
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ninja's Reading List</h1>
          <Booklist />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

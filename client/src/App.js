import React, { Component } from "react";

// Components
import Booklist from "./components/BookList";

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <Booklist />
      </div>
    );
  }
}

export default App;

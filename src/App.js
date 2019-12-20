import React, { Component } from 'react';
import BookList from './components/bookList';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// Apollo client connection
const client = new ApolloClient({
  uri: "http://localhost:3002/graphql"
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client = { client }>
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BookList/>
      </div>
      </ApolloProvider>
    );
  }
}

export default App;

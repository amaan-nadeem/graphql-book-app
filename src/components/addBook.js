import React, { Component } from 'react';


import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if (this.props.data.loading) {
            return (
              <div>
                <h1>Loading....</h1>
              </div>
            );
          } else
            return (
              <div>
                {this.props.data.books.map(book => {
                  return (
                    <div>
                      <p>{book.name}</p>
                    </div>
                  );
                })}
                <form>
        <h1>Hello</h1>
        <p>Enter Book name:</p>
        <input
          type="text"
        />
        <p>Enter Book title</p>
        <input
          type="text"
        />
      </form>
              </div>
            );
        } 
}
 
export default AddBook;
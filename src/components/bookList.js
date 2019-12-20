import React from "react";
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

class BookList extends React.Component {
  state = {};
  render() {
    console.log(this.props);

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
        </div>
      );
  }
}

export default graphql(getBooksQuery)(BookList);

import React from "react";
import { graphql, compose } from "react-apollo";
import { getBooksQuery, getAuthorsQuery } from "../queries/queries";
import AddBook from './addBook';
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
          <AddBook/>
        </div>
      );
  }
}

export default graphql(getBooksQuery)(BookList);

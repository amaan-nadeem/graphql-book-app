import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery, addBookMutation } from "../queries/queries";
import { compose } from "redux";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refectQueries: {[]}
    })
  }
  render() {
    if (this.props.getBooksQuery.loading) {
      return (
        <div>
          <h1>Loading....</h1>
        </div>
      );
    } else
      return (
        <div>
          <form onSubmit = {this.onSubmit}>
            <p>Enter Book name:</p>
            <input type="text" onChange = {(e) => {
              this.setState({name: e.target.value})
            }}/>
            <p>Enter Book Genre</p>
            <input type="text" onChange = {(e) => {
              this.setState({genre: e.target.value})
            }} />
            <p>Enter Book authorId</p>
            <input type="text" onChange = {(e) => {
              this.setState({authorId: e.target.value})
            }} />
            <input type="submit"/>
          </form>
        </div>
      );
  }
}

export default compose(
  graphql(getBooksQuery, {name: "getBooksQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);

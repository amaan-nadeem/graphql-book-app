import {gql} from 'apollo-boost';
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getAuthorsQuery = gql`
{
    authors{
        name
        id
    }
}
`;

const addBookMutation = gql`
mutation($name: String!, $genre: String!, $authorId: String!){
    addBook(name: $name, authorId: $authorId, genre: $genre){
      name
      genre
    }
  }
`
export {
    getAuthorsQuery,
    getBooksQuery,
    addBookMutation
}
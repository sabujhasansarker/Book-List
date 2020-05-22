import { gql } from "apollo-boost";

export const getAutorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
export const getBooksQuery = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
    }
  }
`;

// * {String!} means value not null

export const getBookQuery = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        books {
          name
          id
        }
      }
    }
  }
`;

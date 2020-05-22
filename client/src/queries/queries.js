import { gql } from "apollo-boost";

export const getAutorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
export const getBookQuery = gql`
  {
    books {
      name
      genre
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

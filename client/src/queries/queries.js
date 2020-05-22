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

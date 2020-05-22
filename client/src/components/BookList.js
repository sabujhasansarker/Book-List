import React, { Component } from "react";

// Appollo
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
const getBookQuery = gql`
  {
    books {
      name
      genre
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBookQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
  return (
    <div>
      <ul id="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  );
};

export default BookList;

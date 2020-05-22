import React from "react";

// Appollo
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

const BookList = () => {
  const { loading, error, data } = useQuery(getBookQuery);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error :(</p>;

  const books = data.books.map((book, index) => (
    <li key={index}>{book.name}</li>
  ));

  return (
    <div>
      <ul id="book-list">{books}</ul>
    </div>
  );
};

export default BookList;

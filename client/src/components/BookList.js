import React, { useState } from "react";

// Appollo
import { useQuery } from "@apollo/react-hooks";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
  const [bookId, setBookId] = useState(null);
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error :(</p>;

  const books = data.books.map((book, index) => (
    <li key={index} onClick={(e) => setBookId(book.id)}>
      {book.name}
    </li>
  ));

  return (
    <div>
      <ul id="book-list">{books}</ul>
      <BookDetails bookId={bookId} />
    </div>
  );
};

export default BookList;

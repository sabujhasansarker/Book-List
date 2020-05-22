import React from "react";

// Appollo GraphQL
import { useQuery } from "@apollo/react-hooks";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({ bookId }) => {
  // Data query
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  if (loading)
    return (
      <div id="book-details">
        <h3>Loading Details ...</h3>
      </div>
    );
  if (error) return `Error! ${error}`;

  const { book } = data;

  let bookDetails = book ? (
    <div>
      <h2>{book.name}</h2>
      <p>{book.genre}</p>
      <p>{book.author.name}</p>
      <p>All books by this author:</p>
      <ul className="other-books">
        {book.author.books.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  ) : (
    <div>
      <h3>No book selected...</h3>
    </div>
  );

  return <div id="book-details">{bookDetails}</div>;
};

export default BookDetails;

import React from "react";

// Appollo
import { useQuery } from "@apollo/react-hooks";
import { getAutorsQuery } from "../queries/queries";

const AddBook = () => {
  const { loading, error, data } = useQuery(getAutorsQuery);

  if (error) return <p>Error :(</p>;

  const authors = loading ? (
    <option disabled>Loading Authors</option>
  ) : (
    data.authors.map((author, index) => (
      <option key={index} value={author.id}>
        {author.name}
      </option>
    ))
  );

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>
      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {authors}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;

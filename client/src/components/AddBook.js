import React, { useState } from "react";

// Appollo
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  getAutorsQuery,
  addBookMutation,
  getBookQuery,
} from "../queries/queries";

const AddBook = () => {
  const [fromData, setFromData] = useState({
    name: "",
    genre: "",
    authorId: "",
  });
  const [addBook] = useMutation(addBookMutation);
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

  const onChange = (e) =>
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    let { name, genre, authorId } = fromData;
    if (name && genre && authorId) {
      addBook({
        variables: { name, genre, authorId },
        refetchQueries: [{ query: getBookQuery }],
      });
      setFromData({ name: "", genre: "", authorId: "" });
    }
  };

  return (
    <form id="add-book" onSubmit={onSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" name="name" onChange={(e) => onChange(e)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" name="genre" onChange={(e) => onChange(e)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select name="authorId" onChange={(e) => onChange(e)}>
          <option>Select author</option>
          {authors}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;

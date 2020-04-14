import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_BOOK', book: {
      title,
      author
    }});
    setTitle('');
    setAuthor('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="book-name">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="book-name"
          id="book-name"
          placeholder="book title"
          required
        />
      </label>
      <label htmlFor="book-author">
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          name="book-author"
          id="book-author"
          placeholder="book author"
          required
        />
      </label>
      <input type="submit" value="Add book" />
    </form>
  );
}
 
export default BookForm;
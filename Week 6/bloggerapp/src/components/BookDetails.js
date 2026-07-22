import React from 'react';
import { books } from '../data';

/**
 * BookDetails Component
 * Renders the list of books using ES6 map().
 * Demonstrates:
 * 1. Rendering Lists.
 * 2. Key mapping (`key={book.id}`).
 */
const BookDetails = () => {
  return (
    <div className="detail-column">
      <h2 className="column-title">Book Details</h2>
      <div className="items-list">
        {/**
         * ES6 map() to dynamically render book items
         * Each item uses its unique id (`book.id`) as a React key.
         */}
        {books.map(book => (
          <div className="item-card book-card" key={book.id}>
            <h3>{book.bookName}</h3>
            <p className="price-text">Price: ₹{book.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;

import React from 'react';
import { blogs } from '../data';

/**
 * BlogDetails Component
 * Renders the list of blogs using ES6 map().
 * Demonstrates:
 * 1. Rendering Lists.
 * 2. Key mapping (`key={blog.id}`).
 */
const BlogDetails = () => {
  return (
    <div className="detail-column">
      <h2 className="column-title">Blog Details</h2>
      <div className="items-list">
        {/**
         * ES6 map() to dynamically render blog items
         * Each item uses its unique id (`blog.id`) as a React key.
         */}
        {blogs.map(blog => (
          <div className="item-card blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p className="author-text">Written by: <strong>{blog.author}</strong></p>
            <p className="desc-text">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;

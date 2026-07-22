/**
 * Blogger Dashboard Sample Data
 * Stores and exports lists of courses, books, and blogs.
 * Each item has a unique 'id' used as the 'key' during list rendering.
 */

// Course Details Data
export const courses = [
  { id: "c1", name: "Angular", date: "4/5/2021" },
  { id: "c2", name: "React", date: "6/3/2021" }
];

// Book Details Data
export const books = [
  { id: "b1", bookName: "Master React", price: 670 },
  { id: "b2", bookName: "Deep Dive into Angular 11", price: 800 },
  { id: "b3", bookName: "Mongo Essentials", price: 450 }
];

// Blog Details Data
export const blogs = [
  { id: "bl1", title: "React Learning", author: "Stephen Biz", description: "Welcome to learning React!" },
  { id: "bl2", title: "Installation", author: "Schwzenier", description: "You can install React from npm." }
];

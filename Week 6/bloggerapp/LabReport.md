# Academic Lab Report

**Subject:** Front-End Web Development Lab  
**Lab Assignment:** React Lists, Keys, map(), and Conditional Rendering  
**Project Name:** bloggerapp  

---

## 1. Aim
To design and implement a React application (`bloggerapp`) demonstrating lists, mapping collections with unique keys, and demonstrating four distinct styles of conditional rendering.

---

## 2. Objectives
By completing this laboratory assignment, the following conceptual areas and objectives were fulfilled:
1. Explain the mechanism of lists in React and the use of ES6 `map()`.
2. Master the usage of unique React `key` attributes in collections.
3. Understand the pitfalls of using array indexes as keys.
4. Implement Method 1: Conditional Rendering using `if-else`.
5. Implement Method 2: Conditional Rendering using Element Variables.
6. Implement Method 3: Conditional Rendering using Ternary Operators.
7. Implement Method 4: Conditional Rendering using Logical `&&`.
8. Structure data inside a modular `data.js` file separate from UI layouts.
9. Develop a responsive three-column dashboard layout separated by green vertical divider lines.

---

## 3. Prerequisites
* **Node.js** (v14.0.0 or higher)
* **NPM** (Node Package Manager)
* **Visual Studio Code** (Integrated Development Environment)
* Web browser.

---

## 4. Procedure
1. **Initialize Project:** Created the `bloggerapp` React project.
2. **Build Data Model:** Created `data.js` exporting arrays of `courses`, `books`, and `blogs`.
3. **Build Detail Components:** Created `CourseDetails.js`, `BookDetails.js`, and `BlogDetails.js` using `map()` and unique keys.
4. **Implement Navigation Toggles:** Configured `App.js` with buttons to set `currentView` state.
5. **Implement Conditional Rendering Methods:**
   * Used an `if-else` block to switch between grid layout and filtered layout.
   * Used an element variable `elementContent` to hold the BlogDetails component.
   * Used a ternary operator inline to render the CourseDetails component.
   * Used logical `&&` short-circuit inline to render the BookDetails component.
6. **Set up Styling:** Created `App.css` defining the grid layout separated by green divider lines.
7. **Mount Application:** Configured `index.js`.
8. **Run Application:** Installed dependencies and launched the development server.

---

## 6. Source Code

### A. App.js
```javascript
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState("all");

  let elementContent = null;
  if (currentView === "blogs") {
    elementContent = <BlogDetails />;
  }

  let mainContent;

  if (currentView === "all") {
    mainContent = (
      <div className="dashboard-grid">
        <CourseDetails />
        <div className="divider"></div>
        <BookDetails />
        <div className="divider"></div>
        <BlogDetails />
      </div>
    );
  } else {
    mainContent = (
      <div className="focused-view">
        {currentView === "courses" ? <CourseDetails /> : null}
        {currentView === "books" && <BookDetails />}
        {elementContent}
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      <main className="dashboard-main">
        <div className="button-nav">
          <button 
            className={`nav-btn ${currentView === "all" ? "active" : ""}`}
            onClick={() => setCurrentView("all")}
          >
            Show All (if-else)
          </button>
          <button 
            className={`nav-btn ${currentView === "courses" ? "active" : ""}`}
            onClick={() => setCurrentView("courses")}
          >
            Show Courses (Ternary)
          </button>
          <button 
            className={`nav-btn ${currentView === "books" ? "active" : ""}`}
            onClick={() => setCurrentView("books")}
          >
            Show Books (Logical &&)
          </button>
          <button 
            className={`nav-btn ${currentView === "blogs" ? "active" : ""}`}
            onClick={() => setCurrentView("blogs")}
          >
            Show Blogs (Element Var)
          </button>
        </div>
        {mainContent}
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## 7. Result
The Blogger Dashboard successfully demonstrated lists, keys, array mapping, and four distinct conditional rendering methodologies in React.

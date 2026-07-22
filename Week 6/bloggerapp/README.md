# React Blogger Dashboard - Lists, Keys, & Conditional Rendering

## Introduction
A React application demonstrating **Lists, Keys, map(), and Conditional Rendering** in React. It renders a blogger dashboard with three side-by-side columns: Course Details, Book Details, and Blog Details. The columns are styled using cards separated by green divider lines. It also includes button triggers implementing 4 conditional rendering methodologies.

---

## Concepts Demonstrated
* **React Lists & map()**: Mapping array collections to JSX layouts dynamically.
* **React Keys**: Assigning unique keys (e.g. `key={book.id}`) to list children to preserve state and identify changed elements.
* **Conditional Rendering (4 Styles)**:
  1. **Method 1 (if-else):** Evaluated inside component render code to toggling full grid layout.
  2. **Method 2 (Element Variable):** Setting elements into a variable conditionally (`let content; if(...) content = <BlogDetails/>`).
  3. **Method 3 (Ternary Operator):** Inline evaluation `condition ? <CourseDetails/> : null`.
  4. **Method 4 (Logical &&):** Inline evaluation `condition && <BookDetails/>`.
* **State Management (`useState`)**: Toggling active dashboard views.

---

## Installation
```bash
npx create-react-app bloggerapp
cd bloggerapp
npm install
npm start
```
The application will boot on `http://localhost:3000` (or `http://localhost:3007` in case of conflicts).

---

## Expected Flow
* **Show All View (Initial State):** Renders all three columns side-by-side separated by green vertical lines.
* **Show Courses (Ternary):** Renders only the Course Details card.
* **Show Books (Logical &&):** Renders only the Book Details card.
* **Show Blogs (Element Var):** Renders only the Blog Details card.

---

## Project Structure
```text
bloggerapp
│
├── public
│   └── index.html
│
├── src
│   ├── components
│   │   ├── CourseDetails.js
│   │   ├── BookDetails.js
│   │   ├── BlogDetails.js
│   │   ├── Header.js
│   │   └── Footer.js
│   │
│   ├── data.js
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── README.md
```

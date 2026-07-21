# Blog Application using React Lifecycle Methods

## Introduction

A modern, highly responsive blog post reader application built using **React Class-based Components** and structured around **Component Lifecycle Methods**. The application integrates external REST API fetching, implements state management within the mounting lifecycle phase, and leverages Error Boundary catch lifecycle hooks to construct a resilient, crash-free interface.

---

## Features

* **Fetch API Integration:** Programmatically handles asynchronous HTTP communication with remote servers.
* **`componentDidMount()` Lifecycle Integration:** Automatically triggers network requests immediately after the component mounts to the UI tree.
* **`componentDidCatch()` Error Boundary:** Intercepts runtime errors during the render phase to prevent total application failure.
* **Dynamic Rendering:** Processes external JSON arrays using native JS map functions to dynamically render post card instances.
* **Robust Error Handling:** Features complete Try/Catch integration during fetching and local UI retry capabilities.

---

## Installation

Follow these steps to initialize and launch the blog application on your system:

1. **Bootstrap the Project:**
   ```bash
   npx create-react-app blogapp
   ```

2. **Navigate into the Folder:**
   ```bash
   cd blogapp
   ```

3. **Install Node Packages:**
   ```bash
   npm install
   ```

4. **Launch the Local Development Server:**
   ```bash
   npm start
   ```
   *The server defaults to port `http://localhost:3000` (or `http://localhost:3001` if port 3000 is occupied).*

---

## API Used

The application retrieves raw mock blog posts from:
```text
https://jsonplaceholder.typicode.com/posts
```
The raw elements are mapped to instances of the local `Post` model prior to updating state.

---

## Expected Output

Below is a textual mockup of the dynamic post grids:

```text
=========================================================
                    MODERN BLOG SPACE
=========================================================
  [Post #1]                                 [Post #2]
  Title: SUNT AUT FACERE OCCAECAT           Title: QUI EST ESSE
  Body: quia et suscipit                    Body: est rerum tempore
  suscipit recusandae                       vitae sequi sint
  
  [Post #3]                                 [Post #4]
  Title: EA MOLESTIAS QUASI                 Title: EUM ET EST OCCAECA
  Body: et iusto sed quo                    Body: ullam et saepe reic
  ...                                       ...
=========================================================
```

*(Place screenshot files in `src/assets/screenshot.png` once generated)*

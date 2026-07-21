# Student Management Portal - StudentApp

A React web application demonstrating **React Class Components**, state initialization via constructor, and component composition by rendering `Home`, `About`, and `Contact` components sequentially.

---

## 📌 Introduction

The **Student Management Portal (`StudentApp`)** is built to fulfill academic lab requirements for React Component architecture. It demonstrates:
- Creation of custom Class Components extending `React.Component`.
- Execution of the component `constructor(props)` and `render()` lifecycle methods.
- Modular component rendering within `App.js`.

---

## 🛠️ Software Requirements

- **Node.js**: v14.0.0 or higher
- **NPM**: v6.0.0 or higher
- **Code Editor**: Visual Studio Code (VS Code)

---

## 🚀 Installation Steps

1. **Initialize / Navigate to Project**:
   ```bash
   npx create-react-app StudentApp
   cd StudentApp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
StudentApp/
├── public/
│   └── index.html               # Main HTML root template
├── src/
│   ├── Components/
│   │   ├── Home.js              # Class Component: Home
│   │   ├── About.js             # Class Component: About
│   │   └── Contact.js           # Class Component: Contact
│   ├── App.css                  # Professional academic card layout styles
│   ├── App.js                   # Root Component importing & rendering Home, About, Contact
│   └── index.js                 # Entry point mounting App into DOM root
├── LabReport.md                 # Submission-ready academic lab report
├── Theory.md                    # Comprehensive theory on React Components
├── package.json                 # Project dependencies & scripts
└── README.md                    # Project documentation guide
```

---

## ▶️ How to Run

1. Open terminal inside the project directory:
   ```bash
   cd StudentApp
   ```
2. Execute the start script:
   ```bash
   npm start
   ```
3. Access the portal in browser at: `http://localhost:3000`

---

## 💻 Expected Output

The portal displays three card-style sections stacked vertically:

```
+-----------------------------------------------------------------------------------+
| 🎓 Student Management Portal                                            2025-2026 |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | 🏠 Component 1 | React Class Component                                      |  |
|  | Welcome to the Home Page of Student Management Portal                       |  |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | ℹ️ Component 2 | React Class Component                                      |  |
|  | Welcome to the About Page of Student Management Portal                      |  |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | 📞 Component 3 | React Class Component                                      |  |
|  | Welcome to the Contact Page of Student Management Portal                    |  |
|  +-----------------------------------------------------------------------------+  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

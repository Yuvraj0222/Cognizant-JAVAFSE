# Cognizant Academy Cohort Dashboard

## Introduction

A React application demonstrating **CSS Modules** and **Inline Styling** techniques by rendering a professional cohort training dashboard. The dashboard displays multiple cohort cards with conditionally styled headings based on their current status.

---

## Concepts Demonstrated

* **CSS Modules:** Locally-scoped CSS classes imported as JavaScript objects, applied via `className={styles.box}`.
* **Inline Styling:** React `style` property accepting JS objects with camelCased CSS properties.
* **Conditional Styling:** Ternary operators inside the `style` prop to dynamically change colors based on cohort status.
* **className Property:** React's equivalent of the HTML `class` attribute, used to apply CSS Module classes.
* **React Functional Components:** Stateless components rendering data-driven UI.

---

## Installation

```bash
npm install
npm start
```

The application will open at `http://localhost:3000` (or the next available port).

---

## Expected Output

A dashboard showing multiple cohort cards with:

* **Blue** cohort titles for non-ongoing cohorts (e.g., "Scheduled")
* **Green** cohort titles for ongoing cohorts
* Each card displays: Cohort Code, Start Date, Status, Coach, and Trainer
* Cards are inline-block with rounded borders and consistent spacing

---

## Project Structure

```text
cohortdashboard
│
├── public
│   └── index.html
│
├── src
│   ├── components
│   │   └── CohortDetails.js
│   │
│   ├── CohortDetails.module.css
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```

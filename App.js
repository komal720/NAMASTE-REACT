import React from "react";
import ReactDOM from "react-dom/client";

// JSX Heading Element
const jsxHeading = (
  <h1 className="head" tabIndex={5}>
    Namaste React using jsxHeading
  </h1>
);

// Creates the root and renders the heading
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

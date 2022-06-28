import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  // react strictmode is causing double render only on async code
); 

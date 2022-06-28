import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;

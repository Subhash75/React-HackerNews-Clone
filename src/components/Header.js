import React from "react";
import { Routes, Route } from "react-router-dom";
import Fetch from "./Fetch";
import NavBar from "./NavBar";
import New from "./New";
import Best from "./Best";
import Login from "./Login";
import Footer from "./Footer";

function Header() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Fetch />} />
        <Route path="/new" element={<New />} />
        <Route path="/best" element={<Best />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Header;

import React from "react";


function Footer() {
  return (
    <div className="footer">
      <div className="line"></div>
      <ul>
        <li>
          <a href="#">Guidelines</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Lists</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">Security</a>
        </li>
        <li>
          <a href="#">Legal</a>
        </li>
        <li>
          <a href="#">Apply to YC</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="search-bar">

      <label htmlFor="search">Search:</label>
      <input type="text" id="search" autoComplete="off"/>
      </div>
    </div>
  );
}

export default Footer;

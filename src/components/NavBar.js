import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  let logoStyle = {
    color: 'white',
    border: "solid 2px",
    padding:  '.1em .3em',
  }

  let linkStyle = {
    padding: '0 .5em',
    borderRight: '1px solid',
    fontWeight: '600'
  }

  return (
    <div className="links-container">
      <div className="logo">
        <ul>
          <li
            
          >
            <Link to="/" style={logoStyle}>
              Y
            </Link>
            <Link to="/"  style={{
              marginLeft: '.5em',
              fontWeight: '900'
            }}>Hackernews</Link>
          </li>
        </ul>
      </div>
      <div className="links-body">
        <ul>
          <li>
            <Link to="/new" style={linkStyle}>new</Link>
            <Link to="/best" style={linkStyle}>best</Link>
            {/* <Link to="/body"  style={linkStyle}>comments</Link> */}
            <a href='#' className="anchor">comments</a>
            <a href='#' className="anchor">ask</a>
            <a href='#' className="anchor">show</a><a href='#' className="anchor">jobs</a><a href='#' className="anchor">submit</a>
          </li>
        </ul>
      </div>
      <div className="login">
        <ul>
          <li>
            <Link to="/login" style={{fontWeight: '600', marginRight: '.5em'}}>login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

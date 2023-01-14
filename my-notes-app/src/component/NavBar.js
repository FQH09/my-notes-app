import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function NavBar({ onTyping }) {
  return (
    <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Notes</Link>
            </li>
            <li>
              <Link to="/input">Input</Link>
            </li>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="search..." onChange={onTyping} />
        </div>
    </div>
  );
}

NavBar.propType = {
  onTyping: PropTypes.func.isRequired,
}

export default NavBar;
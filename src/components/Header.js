import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">MIC</Link>
        </li>
        <li>
          <Link to="/department">Department</Link>
        </li>
        <li>
          <Link to="/employee">Employee</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;

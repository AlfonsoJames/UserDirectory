import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1>
          <Link className="navbar-brand" to="/">Employee Directory</Link>
        </h1>
      </nav>
    </Router>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🇮🇳 India
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/touristGraph/">Graphs</Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

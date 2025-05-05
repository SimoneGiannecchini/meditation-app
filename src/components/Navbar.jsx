import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";


const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Meditation</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className={location.pathname === "/meditation" ? "active" : ""}>
            <Link to="/meditation" onClick={closeMenu}>Meditation</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about" onClick={closeMenu}>About</Link>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;


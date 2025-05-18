import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../assets/firebaseConfig";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login", { state: { reset: true } });
    } catch (error) {
      console.error("Errore nel logout:", error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Meditation</div>

      {/* 🔽 Bottone hamburger per mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className={location.pathname === "/meditation" ? "active" : ""}>
          <Link to="/meditation" onClick={closeMenu}>Meditation</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>

        {!user ? (
          <li className={location.pathname === "/login" ? "active" : ""}>
            <Link to="/login" onClick={closeMenu}>Login</Link>
          </li>
        ) : (
          <li>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

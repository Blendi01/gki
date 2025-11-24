import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();

  return (
    <header className="navbar-container">
      <div className="top-bar">
        <div className="top-links">
          <p>Partner Login</p>
          <p>Register</p>
        </div>
      </div>

      <div className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <span className="logo-gki">GKI</span>
            <div className="logo-text">
              <p>
                <span className="ghost">GHOST</span>{" "}
                <span className="kitchens">KITCHENS</span>
              </p>
              <p className="international">INTERNATIONAL</p>
            </div>
          </Link>
        </div>

        <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          &#9776;
        </div>

        <nav className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
          <Link to="/our-story" className={location.pathname === "/our-story" ? "active" : ""} > Our Story </Link>

          <Link  to="/locations"  className={location.pathname === "/locations" ? "active" : ""}>  Locations</Link>
        <p>International</p>
        <p>Media</p>
          <Link  to="/join-our-team"  className={location.pathname === "/join-our-team" ? "active" : ""}>  Join Our Team</Link>
          <Link  to="/contact"  className={location.pathname === "/contact" ? "active" : ""}>  Contact</Link>
          <Link  to="/franchise"  className={location.pathname === "/franchise" ? "active" : ""}>  Franchising Opportunities</Link>
        </nav>
      </div>
    </header>
  );
}

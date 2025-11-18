import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import Logo1 from "../images/Vector.svg";
import Logo2 from "../images/Vector-1.svg";
import Logo3 from "../images/Vector (1).svg";


export default function Footer() {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <Link to="/">
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

        <div className="footer-links">
          <div className="link-column">
            <Link to="/our-story" className={location.pathname === "/our-story" ? "active" : ""}>Our Story</Link>
            <Link to="/franchise" className={location.pathname === "/franchise" ? "active" : ""}>Franchise</Link>
            <a>International</a>
          </div>
          <div className="link-column">
            <a>Media</a>
            <Link to="/join-our-team" className={location.pathname === "/join-our-team" ? "active" : ""}>Join our Team</Link>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>Contact Us</Link>
          </div>
        </div>

        <div className="footer-socials">
          <img src={Logo1} className="social-icon" />
          <img src={Logo2} className="social-icon" />
          <img src={Logo3} className="social-icon" />
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>Copyright 2024. All Right Reserved.</p>
        <div className="bottom-links">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

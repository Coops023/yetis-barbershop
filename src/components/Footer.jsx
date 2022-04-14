import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <p>&copy; copyright 2022 </p>
      </div>
      <div className="social-links">
        <ul className="social-icon">
          <li>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

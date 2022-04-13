import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p>copyright 2022 &copy;</p>
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

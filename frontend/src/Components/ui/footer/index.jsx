import React from "react";
import { Link } from "react-router-dom";

import footer_logo from "../../../Assets/logo_big.png";
import instagram_icon from "../../../Assets/instagram_icon.png";
import whatsapp from "../../../Assets/whatsapp_icon.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Footer Logo */}
      <div className="footer-logo">
        <img src={footer_logo} alt="footer logo" />
        <p>eCraft</p>
      </div>

      {/* Footer Links */}
      <ul className="footer-links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact</Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram_icon} alt="Instagram" />
          </a>
        </div>

        <div className="footer-icons-container">
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="footer-copyright">
        <hr />
        <span>Copyright @ 2024 - All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;

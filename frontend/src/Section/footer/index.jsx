import React from "react";

import footer_logo from "../../Assets/logo_big.png";
import instagram_icon from "../../Assets/instagram_icon.png";
import pintester from "../../Assets/pintester_icon.png";
import whatsapp from "../../Assets/whatsapp_icon.png";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>eCraft</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        Copyright @ 2024 - All Right Reserved.
      </div>
    </div>
  );
};

export default Footer;

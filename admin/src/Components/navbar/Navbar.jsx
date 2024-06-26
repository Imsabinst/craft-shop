import React from "react";
import nav_logo from "../../assets/nav-logo.svg";
import nav_profile from "../../assets/nav-profile.svg";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={nav_logo} alt="" className="nav-logo" />
      <img src={nav_profile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;

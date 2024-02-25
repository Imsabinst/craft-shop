import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import hamburger_mernu from "../../Assets/icons/hamburger.svg";

import "./navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef(null);

  const dropdowwToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>eCRAFT</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdowwToggle}
        src={hamburger_mernu}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men" style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women" style={{ textDecoration: "none" }}>
            Women
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button>Login</button>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="cart icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

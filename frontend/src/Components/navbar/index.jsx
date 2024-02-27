import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import hamburger_mernu from "../../Assets/icons/hamburger.svg";

import "./navbar.css";
import { useAuth } from "../../Context/auth";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [auth, setAuth] = useAuth();

  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef(null);

  const dropdowwToggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth-token");
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
        <li onClick={() => setMenu("mask")}>
          <Link to="/mask" style={{ textDecoration: "none" }}>
            Mask
          </Link>
          {menu === "mask" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("candles")}>
          <Link to="/candles" style={{ textDecoration: "none" }}>
            Candles
          </Link>
          {menu === "candles" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("incense")}>
          <Link to="/incense" style={{ textDecoration: "none" }}>
            Incense
          </Link>
          {menu === "incense" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mala")}>
          <Link to="/mala" style={{ textDecoration: "none" }}>
            Mala
          </Link>
          {menu === "mala" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("wall")}>
          <Link to="/wall" style={{ textDecoration: "none" }}>
            Wall Hanging
          </Link>
          {menu === "wall" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("statue")}>
          <Link to="/statue" style={{ textDecoration: "none" }}>
            Statue
          </Link>
          {menu === "statue" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <img src={cart_icon} alt="cart icon" />
        </Link>
        {/*      <div className="nav-cart-count">{getTotalCartItems()}</div>
         */}
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

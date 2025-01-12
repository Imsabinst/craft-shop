import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { useAuth } from "../../Context/auth";
import logo from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import hamburger_menu from "../../Assets/icons/hamburger.svg";
import "./navbar.css";
import ProfileDropdown from "../profile-dropdown/ProfileDropdown";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu
  const navigate = useNavigate();

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Logout handler
  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth-token");
    navigate("/"); // Redirect to homepage
  };

  // Close menu after clicking a link or button
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      {/* Logo Section */}
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>CraftShop</p>
      </div>

      {/* Hamburger Menu Icon (Mobile Only) */}
      <img
        className="nav-dropdown"
        src={hamburger_menu}
        alt="menu"
        onClick={toggleMenu}
      />

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={closeMenu}>
            Products
          </Link>
        </li>

        <li>
          <Link to="/about-us" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        {/* User Profile or Login */}
        <li className="nav-login-cart">
          {auth.user ? (
            <ProfileDropdown user={auth.user} onLogout={handleLogout} />
          ) : (
            <Link to="/login" onClick={closeMenu}>
              <button className="nav-login-button">Login</button>
            </Link>
          )}
        </li>
        {/* Cart */}
        <li className="cart">
          <Link to="/cart" onClick={closeMenu}>
            <img src={cart_icon} alt="cart" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cart_icon from "../../Assets/cart_icon.png";
import hamburger_menu from "../../Assets/icons/hamburger.svg";
import logo from "../../Assets/logo.png";
import { ShopContext } from "../../Context/ShopContext";
import { useAuth } from "../../Context/auth";
import ProfileDropdown from "../profile-dropdown/ProfileDropdown";
import "./navbar.css";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false); // State for categories dropdown
  const navigate = useNavigate();

  const menuItems = [
    { name: "Mask", path: "/mask" },
    { name: "Candles", path: "/candles" },
    { name: "Incense", path: "/incense" },
    { name: "Mala", path: "/mala" },
    { name: "Wall Hanging", path: "/wall" },
    { name: "Statue", path: "/statue" },
  ];

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle categories dropdown
  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
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
    setIsCategoriesOpen(false);
  };

  // Close categories dropdown and navigate
  const handleCategoryClick = (categoryPath) => {
    setIsCategoriesOpen(false);
    setIsMenuOpen(false); // Also close mobile menu
    navigate(categoryPath);
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

        {/* Categories Dropdown */}
        <li className="nav-categories">
          <button
            className="categories-button"
            onClick={toggleCategories}
            onMouseEnter={() => setIsCategoriesOpen(true)}
          >
            Categories
            <span
              className={`dropdown-arrow ${isCategoriesOpen ? "open" : ""}`}
            >
              ▼
            </span>
          </button>

          {isCategoriesOpen && (
            <div
              className="categories-dropdown"
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="category-item"
                  onClick={() => handleCategoryClick(item.path)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
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

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./profileDropdown.css"; // Importing the CSS file
import avatar from "../../Assets/images/star.png";

const ProfileDropdown = ({ user, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Create a ref to track the dropdown container

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <img
        src={avatar}
        alt="User Avatar"
        className="avatar"
        style={{ height: "40px" }}
      />
      <span className="username">{user?.name || user.email}</span>
      <span onClick={toggleDropdown} className="dropdown-arrow">
        &#9662; {/* Down arrow icon */}
      </span>
      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <span className="close-icon" onClick={closeDropdown}>
            &#10005; {/* Close icon */}
          </span>
          <Link to="/profile" className="link" onClick={closeDropdown}>
            View Profile
          </Link>
          <Link to="/edit-profile" className="link" onClick={closeDropdown}>
            Edit Profile
          </Link>
          <button className="logout-button" onClick={onLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

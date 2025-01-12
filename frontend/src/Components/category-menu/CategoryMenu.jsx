import React from "react";
import { Link } from "react-router-dom";
import "./categoryMenu.css"; // Import the styles (you'll need to create this)
import menuItems from "./menuData";

const CategoryMenu = () => {
  return (
    <div className="category-menu">
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li key={item.name} className="menu-item">
            <Link to={item.path} className="menu-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;

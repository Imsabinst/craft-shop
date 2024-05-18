import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import addProductIcon from "../../assets/Product_Cart.svg";
import listProductIcon from "../../assets/Product_list_icon.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addProduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={addProductIcon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/list"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={listProductIcon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to={"/image"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src={listProductIcon} alt="" />
          <p>Image List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;

import React from "react";
import "./admin.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../Components/addProduct/AddProduct";
import ListProduct from "../../Components/listProduct/ListProduct";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path={"/addProduct"} element={<AddProduct />} />
        <Route path={"/list"} element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;

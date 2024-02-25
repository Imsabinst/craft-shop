import React from "react";
import axios from "axios";

import upload_area from "../../assets/upload_area.svg";

import "./addproduct.css";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("image", image);
      productData.append("new_price", newPrice);
      productData.append("old_price", oldPrice);
      productData.append("category", category);
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/addProduct`,
        productData
      );

      if (data?.success) {
        alert("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          placeholder="enter product name"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            name="old_price"
            placeholder="Enter old price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            name="new_price"
            placeholder="Enter new price"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="addproduct-selector"
        >
          <option defaultValue="">Please Select a category</option>
          <option value="candles">Candles</option>
          <option value="incense">Incense</option>
          <option value="mala">Maalaa</option>
          <option value="statue">Statue</option>
          <option value="mask">Mask</option>
          <option value="wall">Wall hanging</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            alt=""
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          name="image"
          accept="image/*"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={createProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;

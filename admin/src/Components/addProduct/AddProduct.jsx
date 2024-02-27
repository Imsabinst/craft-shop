import React from "react";
import axios from "axios";

import upload_area from "../../assets/upload_area.svg";

import "./addproduct.css";
import { useState } from "react";

const AddProduct = () => {
  const [image, setImage] = useState(false);

  const [productDetail, setProductDetail] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  };

  const addProduct = async () => {
    const product = productDetail;
    const formData = new FormData();
    formData.append("product", image);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/uploadImage`,
        formData
      );
      if (data.success) {
        product.image = data?.image_url;
        await axios
          .post(
            `${process.env.REACT_APP_API}/api/v1/product/addProduct`,
            product
          )
          .then((product_data) =>
            product_data.success ? alert("Error") : alert("Success")
          );
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
          value={productDetail.name}
          onChange={changeHandler}
          name="name"
          placeholder="enter product name"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            value={productDetail.old_price}
            onChange={changeHandler}
            name="old_price"
            placeholder="Enter old price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            value={productDetail.new_price}
            onChange={changeHandler}
            name="new_price"
            placeholder="Enter new price"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          value={productDetail.category}
          onChange={changeHandler}
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
          onChange={handleImage}
          type="file"
          name="image"
          accept="image/*"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          addProduct();
        }}
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;

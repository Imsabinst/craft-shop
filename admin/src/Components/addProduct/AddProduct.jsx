import axios from "axios";
import { useEffect, useState } from "react";
import upload_area from "../../assets/upload_area.svg";
import "./addproduct.css";

const AddProduct = () => {
  const [image, setImage] = useState(false);

  // Immediate product detail state updated on every keystroke
  const [productDetail, setProductDetail] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
    description: "",
  });

  // Debounced state updated after user stops typing for 500ms
  const [debouncedProductDetail, setDebouncedProductDetail] =
    useState(productDetail);

  // Debounce effect: update debouncedProductDetail after 500ms of no changes
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedProductDetail(productDetail);
      // You can run any validation or side effects here if needed
      // console.log("Debounced productDetail:", productDetail);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [productDetail]);

  // Handle file input change
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  // Update immediate productDetail state on each input change
  const changeHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  };

  // Submit product on button click
  const addProduct = async () => {
    if (!image) {
      alert("Please upload a product image.");
      return;
    }

    // Use the debounced product details for submission (latest stable)
    const product = { ...debouncedProductDetail };

    const formData = new FormData();
    formData.append("product", image);

    try {
      // Upload image first
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}api/v1/product/uploadImage`,
        formData
      );

      if (data.success) {
        // Use the uploaded image URL
        product.image = data.image_url;

        // Add product with image url and other details
        const productRes = await axios.post(
          `${process.env.REACT_APP_API}api/v1/product/addProduct`,
          product
        );

        // Check response and alert
        if (productRes.data.success) {
          alert("Product is added successfully!");
          // Optional: clear form here
          setProductDetail({
            name: "",
            image: "",
            category: "",
            size: "",
            new_price: "",
            old_price: "",
            description: "",
          });
          setImage(false);
        } else {
          alert("Error adding product!");
        }
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Something went wrong!");
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
          placeholder="Enter product name"
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Product Description</p>
        <input
          type="text"
          value={productDetail.description}
          onChange={changeHandler}
          name="description"
          placeholder="Enter product description"
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
        <p>Product Sizes</p>
        <select
          name="size"
          value={productDetail.size}
          onChange={changeHandler}
          className="addproduct-selector"
        >
          <option value="">Please select your size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>

      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          value={productDetail.category}
          onChange={changeHandler}
          className="addproduct-selector"
        >
          <option value="">Please Select a category</option>
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
            src={
              image && image instanceof Blob
                ? URL.createObjectURL(image)
                : upload_area
            }
            alt="Product Preview"
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

      <button onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AddProduct;

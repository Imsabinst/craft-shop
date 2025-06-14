// src/Pages/ProductPage.jsx
import { useContext, useEffect } from "react";
import Item from "../../Components/item";
import { ShopContext } from "../../Context/ShopContext";
import "./productPage.css";

const ProductPage = () => {
  const { allProduct } = useContext(ShopContext);

  useEffect(() => {
    // You can perform any actions like fetching products on mount here if required
  }, []);

  return (
    <div className="product-page">
      <h1 className="page-title">Our Products</h1>
      <hr />
      <div className="product-grid">
        {allProduct.length > 0 ? (
          allProduct.map((product) => <Item key={product.id} item={product} />)
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;

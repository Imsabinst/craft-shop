import { useContext } from "react";

import star_dull_icon from "../../Assets/star_dull_icon.png";
import star_icon from "../../Assets/star_icon.png";

import { ShopContext } from "../../Context/ShopContext";
import "./product_display.css";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  if (!product) return null;

  const category =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        {/* Thumbnail list - Uncomment if you have multiple images */}
        {/* {product.images && product.images.length > 1 && (
          <div className="productDisplay-img-list">
            {product.images.map((img, i) => (
              <img key={i} src={img} alt={`${product.name} thumbnail ${i + 1}`} />
            ))}
          </div>
        )} */}
        <div className="productDisplay-img">
          <img
            src={product.image}
            alt={product.name}
            className="productDisplay-main-img"
          />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1 className="productDisplay-right-title">{product.name}</h1>
        <div className="productDisplay-right-stars" aria-label="Product rating">
          {[...Array(4)].map((_, i) => (
            <img key={i} src={star_icon} alt="Star" />
          ))}
          <img src={star_dull_icon} alt="Empty star" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
          <div className="productDisplay-right-price-old">
            €{product.old_price}
          </div>
          <div className="productDisplay-right-price-new">
            €{product.new_price}
          </div>
        </div>
        <div className="productDisplay-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          dolorem eos libero delectus repellendus expedita temporibus
          perspiciatis. Numquam, quia. Asperiores placeat ducimus maxime, rem
          aut nihil libero non quasi nisi.
        </div>
        <div className="productDisplay-right-size">
          <h1>Select Size</h1>
          <div
            className="productDisplay-right-sizes"
            role="list"
            aria-label="Available sizes"
          >
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} role="listitem" tabIndex={0}>
                {size}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => addToCart(product.id)}
          aria-label={`Add ${product.name} to cart`}
        >
          ADD TO CART
        </button>
        <p className="productDisplay-right-category">
          <span>Category: </span>
          {category}
        </p>
        <p className="productDisplay-right-category">
          <span>Tags: </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

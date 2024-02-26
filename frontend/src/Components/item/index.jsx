import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <Link to={`/product/${item?._id}`}>
        <img
          src={`${process.env.REACT_APP_API}/api/v1/product/productImage/${item?._id}`}
          alt={item?.name}
        />
      </Link>

      <p>{item?.name}</p>
      <div className="item-prices">
        <div className="item-price-new">€{item?.new_price}</div>
        <div className="item-price-old">€{item?.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

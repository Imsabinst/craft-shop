import React, { useContext } from "react";
import "./shopcategory.css";
import dropdown_icon from "../../Assets/dropdown_icon.png";

import { ShopContext } from "../../Context/ShopContext";
import Item from "../../Components/item";

import "./shopcategory.css";

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className="shopcategory-banner" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - 12</span> Out of 30 products
        </p>
      </div>
      <div className="shopcategory-products">
        {allProduct &&
          allProduct?.map((item) => {
            if (props.category === item.category) {
              return <Item key={item.id} item={item} />;
            } else {
              return null;
            }
          })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;

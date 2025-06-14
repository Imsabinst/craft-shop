import { useContext } from "react";
import "./shopcategory.css";

import Item from "../../Components/item";
import { ShopContext } from "../../Context/ShopContext";

import { Link } from "react-router-dom";
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
      <Link to="/products" className="shopcategory-loadmore">
        Explore More
      </Link>
    </div>
  );
};

export default ShopCategory;

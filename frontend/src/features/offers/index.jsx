import { Link } from "react-router-dom";
import bowl from "../../Assets/images/bowl.png";

import "./offers.css";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <Link to="/products" className="offers-shop-btn">
          <span>Shop Now</span>
        </Link>
      </div>
      <div className="offers-right">
        <img src={bowl} alt="" />
      </div>
    </div>
  );
};

export default Offers;

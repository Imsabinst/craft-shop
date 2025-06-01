import { Link } from "react-router-dom";
import arrow_icon from "../../Assets/arrow.png";
import "./hero.css";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>BEST COLLECTION</h2>
        <div>
          <span>of</span>
          <div className="hero-hand-icon">
            <p>Arts and Crafts</p>
          </div>
        </div>
        <Link to="/products" className="hero-latest-btn">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="Go to Latest Collection" />
        </Link>
      </div>
      <div className="hero-right">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Hero;

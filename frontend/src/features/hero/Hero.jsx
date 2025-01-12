import React from "react";
import arrow_icon from "../../Assets/arrow.png";
//import hero_icon from "../../Assets/images/khaijadi.png";

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
          <p></p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        {/* <img src={hero_icon} alt="" /> */}
        <ImageSlider />
      </div>
    </div>
  );
};

export default Hero;

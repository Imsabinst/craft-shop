import React from "react";
import Hero from "../../features/hero/Hero";
import Popular from "../../features/popular/Popular";
import Offers from "../../features/offers";
import NewCollection from "../../features/newCollection";
import NewsLetter from "../../features/newsLetter";
import "./homePage.css";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <div className="home-hero">
        <Popular />
        <Offers />
        <NewCollection />
        <NewsLetter />
      </div>
    </div>
  );
};

export default HomePage;

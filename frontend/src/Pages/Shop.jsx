import React from "react";
import Hero from "../Section/hero/Hero";
import Popular from "../Section/popular/Popular";
import Offers from "../Section/offers";
import NewCollection from "../Section/newCollection";
import NewsLetter from "../Section/newsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;

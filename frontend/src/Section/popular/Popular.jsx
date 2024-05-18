import React, { useEffect, useState } from "react";

import axios from "axios";

import Item from "../../Components/item";

import "./popular.css";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const getPopularProducts = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}api/v1/product/getPopularProducts`
      );
      if (data?.success) {
        setPopularProducts(data.popularProducts);
      }
    };
    getPopularProducts();
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR PRODUCTS</h1>
      <hr />
      <div className="popular-item">
        {popularProducts &&
          popularProducts.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Popular;

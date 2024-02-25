import React from "react";

import "./relatedProducts.css";
import data_product from "../../Assets/data";
import Item from "../../Components/item";

const RelatedProducts = () => {
  console.log(data_product, "ddd");
  return (
    <div className="relatedProducts">
      <h1>Related Procts</h1> <hr />
      <div className="relatedProducts-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;

import React, { useContext } from "react";

import "./relatedProducts.css";
import Item from "../../Components/item";
import { ShopContext } from "../../Context/ShopContext";

const RelatedProducts = () => {
  const { relatedProducts } = useContext(ShopContext);

  return (
    <div className="relatedProducts">
      <h1>Related Procts</h1> <hr />
      <div className="relatedProducts-item">
        {relatedProducts &&
          relatedProducts.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default RelatedProducts;

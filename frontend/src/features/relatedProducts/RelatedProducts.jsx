import { useContext } from "react";

import Item from "../../Components/item";
import { ShopContext } from "../../Context/ShopContext";
import "./relatedProducts.css";

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

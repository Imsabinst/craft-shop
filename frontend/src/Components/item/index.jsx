import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ item }) => {
  if (!item) return null;

  return (
    <div className="item">
      <Link to={`/product/${item.id}`} onClick={() => window.scrollTo(0, 0)}>
        <img src={item.image} alt={item.name} className="item-image" />
      </Link>
      <p className="item-name">{item.name}</p>
      <div className="item-prices">
        <div className="item-price-new">€{item.new_price}</div>
        <div className="item-price-old">€{item.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

import { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/breadcrums/Breadcrum";
import DescriptionBox from "../Components/descriptionBox/DescriptionBox";
import { ShopContext } from "../Context/ShopContext";
import ProductDisplay from "../features/productdisplay/ProductDisplay";
import RelatedProducts from "../features/relatedProducts/RelatedProducts";

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();

  const product = allProduct.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;

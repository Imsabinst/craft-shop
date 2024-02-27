import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/breadcrums/Breadcrum";
import ProductDisplay from "../Section/productdisplay/ProductDisplay";
import DescriptionBox from "../Components/descriptionBox/DescriptionBox";
import RelatedProducts from "../Section/relatedProducts/RelatedProducts";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productId } = useParams();

  const product = allProduct.find((e) => e._id === productId);

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

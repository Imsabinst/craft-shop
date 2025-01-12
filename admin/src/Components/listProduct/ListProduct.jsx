import React, { useEffect, useState } from "react";
import axios from "axios";
import cross_icon from "../../assets/cross_icon.png";
import "./listProduct.css";
import ListTable from "./productlist/ListTable";

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5001/api/v1/product/getProducts`
      );
      console.log(data);

      if (data?.success) {
        setProducts(data?.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (catId) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/product/deleteProduct/${catId}`
      );

      if (data?.success) {
        alert(`Deleted`);
      }
    } catch (error) {
      alert(error);
    }
    getProducts();
  };
  return (
    <div className="list-product">
      <ListTable
        product={products}
        cross_icon={cross_icon}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ListProduct;

import React, { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allProduct, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5001/api/v1/product/getProducts"
      );
      if (data?.success) {
        setAllProduct(data?.products);
        console.log(data?.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const addToCart = (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] + 1,
    }));
  };
  const removeCartItems = (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] - 1,
    }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProduct.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
        console.log(totalAmount);
      }
    }
    return totalAmount;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const conextValue = {
    allProduct,
    cartItems,
    addToCart,
    removeCartItems,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={conextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

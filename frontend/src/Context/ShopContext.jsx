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
        `${process.env.REACT_APP_API}/api/v1/product/getProducts`
      );
      if (data?.success) {
        setAllProduct(data?.products);
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
    if (localStorage.getItem("auth-token")) {
      fetch(`${process.env.REACT_APP_API}/api/v1/product/addToCart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data, "d......."));
    }
  };

  useEffect(() => {
    addToCart();
  }, []);
  /* const addToCart = (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] + 1,
    }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          `${process.env.REACT_APP_API}/api/v1/product/addToCart`,
          {
            headers: {
              "Content-Type": "application/json",
              token: `${localStorage.getItem("auth-token")}`,
            },
          },
          { itemId: itemId }
        )
        .then((response) => response.data)
        .then((res) => console.log(res, "d......."));
    }
  }; */

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
        totalAmount += itemInfo?.new_price * cartItems[item];
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
      console.log(totalItem);
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

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
  const [relatedProducts, setRelatedProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}api/v1/product/getProducts`
      );
      if (data?.success) {
        setAllProduct(data?.products);
      }
    } catch (error) {
      throw error;
    }

    const authToken = localStorage.getItem("auth-token");

    if (authToken) {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/getCart`,
        {},
        {
          headers: {
            Accept: "application/form-data",
            "auth-token": authToken,
            "Content-Type": "application/json",
          },
        }
      );
      if (data?.success) {
        setCartItems(data?.cart);
      }
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const getRelatedProducts = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}api/v1/product/getRelatedProducts`
      );
      if (data?.success) {
        setRelatedProducts(data.relatedProducts);
      }
    };
    getRelatedProducts();
  }, []);

  const addToCart = async (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] + 1,
    }));
    try {
      const authToken = localStorage.getItem("auth-token");
      if (authToken) {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/product/addToCart`,
          { itemId: itemId },
          {
            headers: {
              Accept: "application/form-data",
              "auth-token": authToken,
              "Content-Type": "application/json",
            },
          }
        );
        const data = response.data;
        localStorage.setItem("cartItems", JSON.stringify(data));
      }
    } catch (error) {
      throw error;
    }
  };

  const removeCartItems = async (itemId) => {
    setCartItems((prevValue) => ({
      ...prevValue,
      [itemId]: prevValue[itemId] - 1,
    }));
    if (localStorage.getItem("auth-token")) {
      const authToken = localStorage.getItem("auth-token");

      await axios
        .post(
          `${process.env.REACT_APP_API}/api/v1/product/removeCartData`,
          { itemId: itemId },
          {
            headers: {
              Accept: "application/form-data",
              "auth-token": authToken,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          localStorage.removeItem("cartItems");
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    }
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
    }
    return totalItem;
  };

  const contextValue = {
    allProduct,
    cartItems,
    addToCart,
    removeCartItems,
    getTotalCartAmount,
    getTotalCartItems,
    relatedProducts,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

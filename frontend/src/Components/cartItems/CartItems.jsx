import React, { useContext } from "react";

import remove_icon from "../../Assets/cart_cross_icon.png";

import { ShopContext } from "../../Context/ShopContext";
import "./cartItems.css";

const CartItems = () => {
  const { getTotalCartAmount, allProduct, cartItems, removeCartItems } =
    useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Titles</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {allProduct &&
        allProduct.map((e) => {
          if (cartItems[e?.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartItems-format cartItems-format-main">
                  <img src={e.image} alt="" className="cartIcon-product-icon" />
                  <p>{e.name}</p>
                  <p>€{e.new_price}</p>
                  <button className="cartItems-quantity">
                    {cartItems[e.id]}
                  </button>
                  <p>€{e.new_price * cartItems[e.id]}</p>
                  <img
                    className="cartItems-remove-icon"
                    src={remove_icon}
                    alt=""
                    onClick={() => {
                      removeCartItems(e.id);
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          } else {
            return null;
          }
        })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>€{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              <h3>€{getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartItems-promocode">
          <p>If you have a promo code, please enter it here!</p>
          <div className="cartItems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

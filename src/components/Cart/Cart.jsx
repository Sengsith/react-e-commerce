import React from "react";
import { useCart, useCartUpdate } from "../CartContext.jsx";

import "./cart.css";

const Cart = () => {
  const cart = useCart();
  const cartUpdate = useCartUpdate();

  const testUpdate = () => {
    cartUpdate({ product: "shoes" });
  };

  return (
    <div id="cart-container" aria-hidden="true" aria-labelledby="cart-btn">
      <div id="cart-wrapper">
        <div id="cart-title">Cart</div>
        <hr></hr>
        <div id="cart-empty">Your cart is empty.</div>
        <button id="test-btn" onClick={testUpdate} style={{ color: "black" }}>
          {cart && cart.product}
          Test
        </button>
      </div>
    </div>
  );
};

export default Cart;

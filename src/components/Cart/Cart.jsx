import React from "react";

import "./cart.css";

const Cart = () => {
  return (
    <div id="cart-container" aria-hidden="true" aria-labelledby="cart-btn">
      <div id="cart-wrapper">
        <div id="cart-title">Cart</div>
        <hr></hr>
        <div id="cart-empty">Your cart is empty.</div>
      </div>
    </div>
  );
};

export default Cart;

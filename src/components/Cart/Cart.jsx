import React from "react";

import "./cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="cart-title">Cart</div>
        <hr></hr>
        <div className="cart-empty">Your cart is empty.</div>
      </div>
    </div>
  );
};

export default Cart;

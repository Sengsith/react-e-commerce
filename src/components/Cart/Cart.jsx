import React, { useContext } from "react";
import { CartContext } from "/src/components/App/App.jsx";

import "./cart.css";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div id="cart-container" aria-hidden="true" aria-labelledby="cart-btn">
      <div id="cart-wrapper">
        <div id="cart-title">Cart</div>
        <hr></hr>
        <div className="cart-items">
          {Object.keys(cart).length === 0
            ? "Your cart is empty."
            : JSON.stringify(cart)}
        </div>
      </div>
    </div>
  );
};

export default Cart;

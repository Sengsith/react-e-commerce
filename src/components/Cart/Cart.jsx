import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "/src/redux/cart.js";

import Thumbnail1 from "/src/assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "/src/assets/images/icon-delete.svg";

import "./cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Sets cart to empty, does not account for if cart is able to hold 2 or more unique products
  const handleDeleteItem = () => {
    // Set cart to an empty object
    dispatch(setCart({}));
  };

  return (
    <div id="cart-container" aria-hidden="true" aria-labelledby="cart-btn">
      <div id="cart-wrapper">
        <div id="cart-title">Cart</div>
        <hr></hr>
        <div className="cart-items-container">
          {Object.keys(cart).length === 0 ? (
            <div>Your cart is empty.</div>
          ) : (
            <div className="cart-items-wrapper">
              <div className="cart-item">
                <img
                  id="cart-thumbnail"
                  src={Thumbnail1}
                  alt="Right beige shoe in foreground facing camera. Underside of leftshoe standing up from toe-side being shown in background."
                ></img>
                <div className="cart-item-details">
                  <div id="cart-filled_title">{cart.name}</div>
                  <div className="cart-filled-price">
                    ${cart.price.toFixed(2)} x {cart.quantity}{" "}
                    <span className="cart-subtotal">
                      ${(cart.price * cart.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button onClick={handleDeleteItem}>
                  <img src={DeleteIcon}></img>
                </button>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

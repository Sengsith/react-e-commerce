import React from "react";

import CustomCart from "../CustomIcons/CustomCart.jsx";

import "./add_to_cart.css";

const AddToCart = ({ addToCart }) => {
  return (
    <>
      <button className="add-to-cart-button" onClick={addToCart}>
        <CustomCart fill="white" />
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;

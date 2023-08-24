import React from "react";

import CustomCart from "../CustomIcons/CustomCart.jsx";

import "./Add_to_cart.css";

const AddToCart = () => {
  return (
    <>
      <button className="add-to-cart-button">
        <CustomCart fill="white" />
        Add to cart
      </button>
    </>
  );
};

export default AddToCart;

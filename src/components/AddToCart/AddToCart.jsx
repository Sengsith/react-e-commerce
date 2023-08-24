import React from "react";

import CustomCart from "/src/components/CustomIcons/CustomCart.jsx";

import "/src/components/AddToCart/add_to_cart.css";

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

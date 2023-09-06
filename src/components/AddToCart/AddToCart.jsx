import React, { useContext } from "react";
import { CartContext } from "/src/components/App/App.jsx";

import CustomCart from "../CustomIcons/CustomCart.jsx";

import "./add_to_cart.css";

const AddToCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = () => {
    console.log("Added to cart.");
    const productToAdd = {
      name: "Fall Limited Edition Sneakers",
      price: "$125 x 3",
      subtotal: "$375.00",
    };
    setCart(productToAdd);
  };

  return (
    <>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        <CustomCart fill="white" />
        Add to cart
      </button>
      {Object.keys(cart).length !== 0 ? JSON.stringify(cart) : ""}
    </>
  );
};

export default AddToCart;

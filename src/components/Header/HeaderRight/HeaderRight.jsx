import React, { useState, useContext } from "react";
import { CartContext } from "/src/components/App/App.jsx";

import Avatar from "/src/assets/images/image-avatar.png";
import CustomCart from "/src/components/CustomIcons/CustomCart.jsx";

const HeaderRight = () => {
  const [isCartExpanded, setIsCartExpanded] = useState(false);

  const toggleCart = () => {
    const cartContainer = document.querySelector("#cart-container");
    const cartBtn = document.querySelector("#cart-btn");
    // After user clicks to toggle cart, toggle the current cartContainer aria attirubte
    cartBtn.setAttribute("aria-expanded", !isCartExpanded);
    cartContainer.setAttribute("aria-hidden", isCartExpanded);

    // Toggle cart-active classes
    cartContainer.classList.toggle("cart-container-active");

    // Toggle isCartExpanded last due to asynchrony
    setIsCartExpanded((prevIsCartExpanded) => !prevIsCartExpanded);
  };

  return (
    <div className="header-right">
      <button
        id="cart-btn"
        onClick={toggleCart}
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="Cart"
        aria-controls="cart-container"
      >
        <CustomCart fill={isCartExpanded ? "#000000" : "#69707D"} />
      </button>
      <img
        id="avatar"
        src={Avatar}
        alt="Head shot of a man with frizzy shoulder-length hair. He is wearing sunglasses and a blue crew neck shirt."
      ></img>
    </div>
  );
};

export default HeaderRight;

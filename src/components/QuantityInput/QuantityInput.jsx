import React, { useState, useRef, useContext } from "react";
import { CartContext } from "/src/shared/CartContext.jsx";

import AddToCart from "../AddToCart/AddToCart.jsx";
import "./quantity_input.css";

import MinusIcon from "/src/assets/images/icon-minus.svg";
import PlusIcon from "/src/assets/images/icon-plus.svg";

const MAX_QUANTITY = 3;

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  const quantityInputRef = useRef(null);

  const changeQuantity = (e) => {
    if (e.target.getAttribute("aria-label") === "subtract") {
      decrementQuantity();
    }
    if (e.target.getAttribute("aria-label") === "add") {
      incrementQuantity();
    }
  };

  // Decrement quantity on click on minus button
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      // Do nothing if trying to click to subtract under 0
      if (prevQuantity === 0) {
        return 0;
      }
      quantityInputRef.current.value = prevQuantity - 1;
      return prevQuantity - 1;
    });
  };

  // Increment quantity on click on plus button
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      // Do nothing if trying to click to add over 3
      if (prevQuantity === MAX_QUANTITY) {
        return MAX_QUANTITY;
      }
      quantityInputRef.current.value = prevQuantity + 1;
      return prevQuantity + 1;
    });
  };

  const handleOnInputChange = (e) => {
    const orderQuantity = parseInt(e.target.value);
    // Do nothing if trying type in order over 3
    if (orderQuantity > 3) {
      return;
    }
    setQuantity(orderQuantity);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      addToCart();
    }
  };

  const addToCart = () => {
    const productToAdd = {
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      quantity: quantityInputRef.current.value,
    };
    if (quantityInputRef.current.value > 0) {
      setCart(productToAdd);
    }
  };

  // User clicks off of quantity input field
  const handleOnInputBlur = (e) => {
    // User deletes value and clicks off, reset to 0
    if (e.target.value === "") {
      setQuantity(0);
    }
  };

  return (
    <div>
      <div className="quantity-container" onClick={changeQuantity}>
        <button
          className="quantity-button"
          id="subtract-button"
          aria-label="subtract"
        >
          <img src={MinusIcon} alt="minus" />
        </button>
        <input
          type="number"
          inputMode="numeric"
          name="quantity"
          id="quantity-input"
          aria-label="quantity"
          ref={quantityInputRef}
          value={`${quantity}`}
          onChange={handleOnInputChange}
          onKeyDown={handleOnKeyDown}
          onBlur={handleOnInputBlur}
        />
        <button className="quantity-button" id="add-button" aria-label="add">
          <img src={PlusIcon} alt="plus" />
        </button>
      </div>
      <AddToCart cart={cart} addToCart={addToCart} />
    </div>
  );
};

export default QuantityInput;

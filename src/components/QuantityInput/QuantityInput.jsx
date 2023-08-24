import React, { useState, useRef } from "react";

import "./Quantity_input.css";

const MAX_QUANTITY = 3;

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(0);

  const quantityInputRef = useRef(null);

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

  // User clicks off of quantity input field
  const handleOnInputBlur = (e) => {
    // User deletes value and clicks off, reset to 0
    if (e.target.value === "") {
      setQuantity(0);
    }
  };

  return (
    <div className="quantity-container">
      <button
        className="quantity-button"
        id="subtract-button"
        aria-label="subtract"
        onClick={decrementQuantity}
      >
        <img src="../../src/assets/images/icon-minus.svg" alt="minus" />
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity-input"
        aria-label="quantity"
        ref={quantityInputRef}
        value={`${quantity}`}
        onChange={handleOnInputChange}
        onBlur={handleOnInputBlur}
      />
      <button
        className="quantity-button"
        id="add-button"
        aria-label="add"
        onClick={incrementQuantity}
      >
        <img src="../../src/assets/images/icon-plus.svg" alt="plus" />
      </button>
    </div>
  );
};

export default QuantityInput;

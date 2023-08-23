import React from "react";

import "./quantity_input.css";

const QuantityInput = () => {
  return (
    <div className="quantity-container">
      <button
        className="quantity-button"
        id="subtract-button"
        aria-label="subtract"
      >
        <img src="../../src/assets/images/icon-minus.svg" alt="minus" />
      </button>
      <input type="number" name="quantity" id="quantity-input" value="0" />
      <button className="quantity-button" id="add-button" aria-label="add">
        <img src="../../src/assets/images/icon-plus.svg" alt="plus" />
      </button>
    </div>
  );
};

export default QuantityInput;

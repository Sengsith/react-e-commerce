import React from "react";

import "./product.css";
import QuantityInput from "../QuantityInput/QuantityInput.jsx";

const Product = () => {
  return (
    <div className="product-container">
      <a href="#" className="product-brand-link">
        Sneaker Company
      </a>
      <div className="product-title">Fall Limited Edition Sneakers</div>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="product-pricing">
        <div className="product-pricing__wrapper">
          <div className="product-pricing__price">$125.00</div>
          <div className="product-pricing__discount">50%</div>
        </div>
        <div className="product-pricing__original">$250.00</div>
      </div>
      <QuantityInput />
    </div>
  );
};

export default Product;

import React from "react";

import "/src/components/Product/product.css";
import QuantityInput from "/src/components/QuantityInput/QuantityInput.jsx";
import AddToCart from "/src/components/AddToCart/AddToCart.jsx";

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
        <div className="product-pricing__price">$125.00</div>
        <div className="product-pricing__discount">50%</div>
        <div className="product-pricing__original">$250.00</div>
      </div>
      <QuantityInput />
      <AddToCart />
    </div>
  );
};

export default Product;

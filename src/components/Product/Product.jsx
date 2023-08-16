import React from "react";

const Product = () => {
  return (
    <main>
      <div className="product-gallery"></div>
      <div className="product-container">
        <a href="#" className="product-brand">
          Sneaker Company
        </a>
        <div className="product-title">Fall Limited Edition Sneakers</div>
        <p className="product-description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="product-pricing">
          <div className="product-pricing__price">$125.00</div>
          <div className="product-pricing__discount">50%</div>
          <div className="product-pricing__original">$250.00</div>
        </div>
        <div className="quantity-container">
          <button>-</button>
          <input type="number" name="quantity" id="quantity-input" />
          <button>+</button>
        </div>
        <button className="add-to-cart-button">Add to cart</button>
      </div>
    </main>
  );
};

export default Product;

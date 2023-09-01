import React from "react";

import "./app.css";

import Header from "../Header/Header.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Product from "../Product/Product.jsx";

import { CartProvider } from "../CartContext.jsx";

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <main>
          <Carousel />
          <Product />
        </main>
      </CartProvider>
    </div>
  );
};

export default App;

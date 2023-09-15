import React from "react";
import { CartProvider } from "/src/shared/CartContext.jsx";

import "./app.css";

import Header from "../Header/Header.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Product from "../Product/Product.jsx";

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

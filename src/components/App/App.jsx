import React, { createContext, useState } from "react";

import "./app.css";

import Header from "../Header/Header.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Product from "../Product/Product.jsx";

export const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState({});

  return (
    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <main>
          <Carousel />
          <Product />
        </main>
      </CartContext.Provider>
    </div>
  );
};

export default App;

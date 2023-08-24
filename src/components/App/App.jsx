import React from "react";

import "./App.css";

import Header from "./components/Header/Header.jsx";
import Carousel from "./components/Carousel/Carousel.jsx";
import Product from "./components/Product/Product.jsx";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Carousel />
        <Product />
      </main>
    </div>
  );
};

export default App;

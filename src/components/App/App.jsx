import React from "react";

import "src/components/App/app.css";

import Header from "../Header/Header.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Product from "../Product/Product.jsx";

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

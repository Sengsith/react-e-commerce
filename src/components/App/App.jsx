import React from "react";

import "/src/components/App/app.css";

import Header from "/src/components/Header/Header.jsx";
import Carousel from "/src/components/Carousel/Carousel.jsx";
import Product from "/src/components/Product/Product.jsx";

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

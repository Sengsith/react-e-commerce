import React from "react";

import useImageId from "/src/hooks/useImageId.jsx";
import useWindowWidth from "/src/hooks/useWindowWidth.jsx";

import "./app.css";

import Header from "../Header/Header.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Product from "../Product/Product.jsx";

const App = () => {
  // Id used for carousel images
  const { currentImageId, setCurrentImageId } = useImageId();

  // Window width for gallery/carousel render
  const { DESKTOP_BREAKPOINT, currentWindowWidth } = useWindowWidth();

  return (
    <div className="App">
      <Header />
      <main>
        {currentWindowWidth < DESKTOP_BREAKPOINT ? (
          <Carousel
            currentImageId={currentImageId}
            setCurrentImageId={setCurrentImageId}
          />
        ) : (
          <Gallery
            currentImageId={currentImageId}
            setCurrentImageId={setCurrentImageId}
          />
        )}
        <Product />
      </main>
    </div>
  );
};

export default App;

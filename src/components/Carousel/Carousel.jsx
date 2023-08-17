import React from "react";

import "./carousel.css";

const Carousel = () => {
  const gallery = [
    {
      id: 1,
      thumbnail: "../../src/assets/images/image-product-1.jpg",
      image: "../../src/assets/images/image-product-1.jpg",
    },
    {
      id: 2,
      thumbnail: "../../src/assets/images/image-product-2.jpg",
      image: "../../src/assets/images/image-product-2.jpg",
    },
    {
      id: 3,
      thumbnail: "../../src/assets/images/image-product-3.jpg",
      image: "../../src/assets/images/image-product-3.jpg",
    },
    {
      id: 4,
      thumbnail: "../../src/assets/images/image-product-4.jpg",
      image: "../../src/assets/images/image-product-4.jpg",
    },
  ];

  return (
    <div className="carousel">
      <div className="arrow-buttons">
        <button className="arrow" id="left-arrow">
          <img src="../../src/assets/images/icon-previous.svg" />
        </button>
        <button className="arrow" id="right-arrow">
          <img src="../../src/assets/images/icon-next.svg" />
        </button>
      </div>
      <div className="carousel-images">
        {gallery.map((image) => {
          return <img key={image.id} src={image.thumbnail}></img>;
        })}
      </div>
    </div>
  );
};

export default Carousel;

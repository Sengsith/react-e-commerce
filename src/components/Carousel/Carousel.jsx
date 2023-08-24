import React, { useState } from "react";

import "./Carousel.css";

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

  const [leftId, setLeftId] = useState(1);
  const [rightId, setRightId] = useState(1);

  const decrementArrowImageId = () => {
    // First element
    if (leftId === gallery[0].id) {
      setLeftId(gallery.length);
    } else {
      setLeftId((prevLeftId) => prevLeftId - 1);
    }
  };

  const incrementArrowImageId = () => {
    // Last element
    if (rightId === gallery.length) {
      setRightId(gallery[0].id);
    } else {
      setRightId((prevLeftId) => prevLeftId + 1);
    }
  };

  const handleClickPrevious = () => {
    decrementArrowImageId();
  };

  const handleClickNext = () => {
    incrementArrowImageId();
  };

  return (
    <div className="carousel-container">
      <a
        href={`#image-${leftId}`}
        className="carousel-arrow"
        id="previous-arrow"
        aria-label="previous-image"
        onClick={handleClickPrevious}
      >
        <img src="../../src/assets/images/icon-previous.svg" alt="left-arrow" />
      </a>
      <a
        href={`#image-${rightId}`}
        className="carousel-arrow"
        id="next-arrow"
        aria-label="next-image"
        onClick={handleClickNext}
      >
        <img src="../../src/assets/images/icon-next.svg" alt="right-arrow" />
      </a>
      <div className="carousel-wrapper">
        {gallery.map((image) => {
          return (
            <div key={image.id} className="carousel-element">
              <img id={`image-${image.id}`} src={image.thumbnail}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

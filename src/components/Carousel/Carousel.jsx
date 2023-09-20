import React from "react";

import "./carousel.css";

import { PRODUCT_IMAGES } from "/src/shared/product-images.jsx";

import IconPrevious from "/src/assets/images/icon-previous.svg";
import IconNext from "/src/assets/images/icon-next.svg";

const Carousel = ({ currentImageId, setCurrentImageId }) => {
  // Function that increments or decrements the arrow id
  const updateArrowImageId = (e) => {
    // First image and prev arrow clicked
    if (
      currentImageId === PRODUCT_IMAGES[0].id &&
      e.target.id === "previous-arrow"
    ) {
      setCurrentImageId(PRODUCT_IMAGES.length);
    }
    // Last image and next arrow clicked
    else if (
      currentImageId === PRODUCT_IMAGES.length &&
      e.target.id === "next-arrow"
    ) {
      setCurrentImageId(PRODUCT_IMAGES[0].id);
    }
    // Prev arrow clicked
    else if (e.target.id === "previous-arrow") {
      setCurrentImageId((currentId) => currentId - 1);
    }
    // Next arrow clicked
    else if (e.target.id === "next-arrow") {
      setCurrentImageId((currentId) => currentId + 1);
    }
  };

  return (
    <div className="carousel-container">
      <a
        href={`#image-${currentImageId}`}
        className="carousel-arrow"
        id="previous-arrow"
        aria-label="previous-image"
        onClick={updateArrowImageId}
      >
        <img src={IconPrevious} alt="left-arrow" />
      </a>
      <a
        href={`#image-${currentImageId}`}
        className="carousel-arrow"
        id="next-arrow"
        aria-label="next-image"
        onClick={updateArrowImageId}
      >
        <img src={IconNext} alt="right-arrow" />
      </a>
      <div className="carousel-wrapper">
        {PRODUCT_IMAGES.map((image) => {
          return (
            <div key={image.id} className="carousel-element">
              <img
                id={`image-${image.id}`}
                src={image.imageUrl}
                alt={image.alt}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

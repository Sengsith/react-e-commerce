import React, { useState } from "react";

import "./carousel.css";

import ProductImage1 from "/src/assets/images/image-product-1.jpg";
import ThumbnailImage1 from "/src/assets/images/image-product-1-thumbnail.jpg";
import ProductImage2 from "/src/assets/images/image-product-2.jpg";
import ThumbnailImage2 from "/src/assets/images/image-product-2-thumbnail.jpg";
import ProductImage3 from "/src/assets/images/image-product-3.jpg";
import ThumbnailImage3 from "/src/assets/images/image-product-3-thumbnail.jpg";
import ProductImage4 from "/src/assets/images/image-product-4.jpg";
import ThumbnailImage4 from "/src/assets/images/image-product-4-thumbnail.jpg";

import IconPrevious from "/src/assets/images/icon-previous.svg";
import IconNext from "/src/assets/images/icon-next.svg";

const Carousel = () => {
  const gallery = [
    {
      id: 1,
      thumbnail: ProductImage1,
      image: ThumbnailImage1,
    },
    {
      id: 2,
      thumbnail: ProductImage2,
      image: ThumbnailImage2,
    },
    {
      id: 3,
      thumbnail: ProductImage3,
      image: ThumbnailImage3,
    },
    {
      id: 4,
      thumbnail: ProductImage4,
      image: ThumbnailImage4,
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
        <img src={IconPrevious} alt="left-arrow" />
      </a>
      <a
        href={`#image-${rightId}`}
        className="carousel-arrow"
        id="next-arrow"
        aria-label="next-image"
        onClick={handleClickNext}
      >
        <img src={IconNext} alt="right-arrow" />
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

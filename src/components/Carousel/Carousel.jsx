import React, { useState, useEffect } from "react";

import "./carousel.css";

import { PRODUCT_IMAGES } from "/src/shared/product-images.jsx";

import IconPrevious from "/src/assets/images/icon-previous.svg";
import IconNext from "/src/assets/images/icon-next.svg";

const Carousel = () => {
  // Don't forget to change media queries if needed
  const DESKTOP_BREAKPOINT = 700;
  const LOCAL_STORAGE_IMAGE_ID = "imageId";

  // Id used for carousel images
  const [currentId, setCurrentId] = useState(
    parseInt(sessionStorage.getItem(LOCAL_STORAGE_IMAGE_ID)) || 1
  );

  // useEffect helper for getting current window width
  const getWindowWidth = () => {
    return window.innerWidth;
  };

  // Determine which carousel to render
  const [currentWindowWidth, setCurrentWindowWidth] = useState(
    getWindowWidth()
  );

  // Always check image id changes
  useEffect(() => {
    sessionStorage.removeItem(LOCAL_STORAGE_IMAGE_ID);
    sessionStorage.setItem(LOCAL_STORAGE_IMAGE_ID, currentId);
  }, [currentId]);

  // Always check window width changes
  useEffect(() => {
    const updateWidth = () => {
      setCurrentWindowWidth(getWindowWidth());
    };
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [currentWindowWidth]);

  const updateArrowImageId = (e) => {
    // First image and prev arrow clicked
    if (
      currentId === PRODUCT_IMAGES[0].id &&
      e.target.id === "previous-arrow"
    ) {
      setCurrentId(PRODUCT_IMAGES.length);
    }
    // Last image and next arrow clicked
    else if (
      currentId === PRODUCT_IMAGES.length &&
      e.target.id === "next-arrow"
    ) {
      setCurrentId(PRODUCT_IMAGES[0].id);
    }
    // Prev arrow clicked
    else if (e.target.id === "previous-arrow") {
      setCurrentId((currentId) => currentId - 1);
    }
    // Next arrow clicked
    else if (e.target.id === "next-arrow") {
      setCurrentId((currentId) => currentId + 1);
    }
  };

  return (
    <div className="carousel-container">
      <a
        href={`#image-${currentId}`}
        className="carousel-arrow"
        id="previous-arrow"
        aria-label="previous-image"
        onClick={updateArrowImageId}
      >
        <img src={IconPrevious} alt="left-arrow" />
      </a>
      <a
        href={`#image-${currentId}`}
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
              <img id={`image-${image.id}`} src={image.imageUrl}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;

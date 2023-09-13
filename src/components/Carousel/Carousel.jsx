import React, { useState, useEffect } from "react";

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

  const gallery = [
    {
      id: 1,
      image: ProductImage1,
      thumbnail: ThumbnailImage1,
    },
    {
      id: 2,
      image: ProductImage2,
      thumbnail: ThumbnailImage2,
    },
    {
      id: 3,
      image: ProductImage3,
      thumbnail: ThumbnailImage3,
    },
    {
      id: 4,
      image: ProductImage4,
      thumbnail: ThumbnailImage4,
    },
  ];

  const updateArrowImageId = (e) => {
    // First image and prev arrow clicked
    if (currentId === gallery[0].id && e.target.id === "previous-arrow") {
      setCurrentId(gallery.length);
    }
    // Last image and next arrow clicked
    else if (currentId === gallery.length && e.target.id === "next-arrow") {
      setCurrentId(gallery[0].id);
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

  const renderMobileCarousel = () => {
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
          {gallery.map((image) => {
            return (
              <div key={image.id} className="carousel-element">
                <img id={`image-${image.id}`} src={image.image}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderDesktopCarousel = () => {
    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {gallery.map((image) => {
            return (
              <div key={image.id} className="carousel-element">
                <img id={`image-${image.id}`} src={image.image}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return currentWindowWidth < DESKTOP_BREAKPOINT
    ? renderMobileCarousel()
    : renderDesktopCarousel();
};

export default Carousel;

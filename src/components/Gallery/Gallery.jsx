import React, { useState, useEffect } from "react";

import { PRODUCT_IMAGES } from "/src/shared/product-images.jsx";

import "./gallery.css";

const Gallery = ({ currentImageId, setCurrentImageId }) => {
  const [previousSelectedThumbnail, setPreviousSelectedThumbnail] =
    useState(null);

  useEffect(() => {
    // Set initial selected thumbnail image
    setPreviousSelectedThumbnail(() => {
      const initialImage = document.querySelector(
        `#gallery-element-${currentImageId}`
      );
      initialImage.classList.add("selected");
      return initialImage;
    });
  }, []);

  const selectThumbnail = (selectedElement) => {
    // if current selected element != most recent element clicked
    if (selectedElement !== previousSelectedThumbnail) {
      previousSelectedThumbnail?.classList.remove("selected");
      selectedElement.classList.add("selected");
      setPreviousSelectedThumbnail(selectedElement);
    }
  };

  const handleOnThumbnailClick = (imageId) => {
    return (e) => {
      // Select a thumbnail
      const selectedElement = e.target;
      selectThumbnail(selectedElement);

      // Change the main gallery image
      setCurrentImageId(imageId);
    };
  };

  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        <img
          id="gallery-main-img"
          src={PRODUCT_IMAGES[currentImageId - 1].imageUrl}
          alt={PRODUCT_IMAGES[currentImageId - 1].alt}
        ></img>
        <div className="gallery-thumbnails">
          {PRODUCT_IMAGES.map((image) => {
            return (
              <div
                key={image.id}
                className="gallery-element"
                id={`gallery-element-${image.id}`}
                onClick={handleOnThumbnailClick(image.id)}
              >
                <img
                  id={`image-${image.id}`}
                  src={image.thumbnailUrl}
                  alt={image.alt}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

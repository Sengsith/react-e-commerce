import React from "react";

import { PRODUCT_IMAGES } from "/src/shared/product-images.jsx";

import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        {PRODUCT_IMAGES.map((image) => {
          return (
            <div key={image.id} className="gallery-element">
              <img id={`image-${image.id}`} src={image.thumbnailUrl}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

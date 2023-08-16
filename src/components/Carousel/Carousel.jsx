import React from "react";

const Carousel = () => {
  const gallery = [
    {
      thumbnail: "../../src/assets/images/image-product-1-thumbnail.jpg",
      image: "../../src/assets/images/image-product-1.jpg",
    },
    {
      thumbnail: "../../src/assets/images/image-product-2-thumbnail.jpg",
      image: "../../src/assets/images/image-product-2.jpg",
    },
    {
      thumbnail: "../../src/assets/images/image-product-3-thumbnail.jpg",
      image: "../../src/assets/images/image-product-3.jpg",
    },
    {
      thumbnail: "../../src/assets/images/image-product-4-thumbnail.jpg",
      image: "../../src/assets/images/image-product-4.jpg",
    },
  ];

  return (
    <div className="carousel">
      {gallery.map((image, index) => {
        return <img key={index} src={image.thumbnail}></img>;
      })}
    </div>
  );
};

export default Carousel;

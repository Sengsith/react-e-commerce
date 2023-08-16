import React from "react";

const Carousel = () => {
  const gallery = [
    {
      id: 1,
      thumbnail: "../../src/assets/images/image-product-1-thumbnail.jpg",
      image: "../../src/assets/images/image-product-1.jpg",
    },
    {
      id: 2,
      thumbnail: "../../src/assets/images/image-product-2-thumbnail.jpg",
      image: "../../src/assets/images/image-product-2.jpg",
    },
    {
      id: 3,
      thumbnail: "../../src/assets/images/image-product-3-thumbnail.jpg",
      image: "../../src/assets/images/image-product-3.jpg",
    },
    {
      id: 4,
      thumbnail: "../../src/assets/images/image-product-4-thumbnail.jpg",
      image: "../../src/assets/images/image-product-4.jpg",
    },
  ];

  return (
    <div className="carousel">
      {gallery.map((image) => {
        return <img key={image.id} src={image.thumbnail}></img>;
      })}
    </div>
  );
};

export default Carousel;

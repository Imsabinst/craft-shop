import React, { useState } from "react";
import images from "../../Assets/images/imageData"; // Assuming you have an array of image objects with 'url' property
import "./imageSlider.css";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Next slide function
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Previous slide function
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container">
      <button className="prev-button" onClick={prevSlide}>
        {"<"}
      </button>
      <img
        src={images[currentImageIndex].url}
        alt={`Slide ${currentImageIndex}`}
        className="slider-image"
      />
      <button className="next-button" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default ImageSlider;

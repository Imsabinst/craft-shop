import React, { useEffect, useState } from "react";

import images from "../../Assets/images/imageData";

import "./imageSlider.css";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  /* const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }; */

  return (
    <div className="slider-container">
      {/*       <button className="prev-button" onClick={prevSlide}></button>
       */}{" "}
      <img
        src={images[currentImageIndex].url}
        alt={`Slide ${currentImageIndex}`}
        className="slider-image"
      />
      {/* <button className="next-button" onClick={nextSlide}>
        Next
      </button> */}
    </div>
  );
};

export default ImageSlider;

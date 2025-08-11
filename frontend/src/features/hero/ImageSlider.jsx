import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import images from "../../Assets/images/imageData";
import "./imageSlider.css";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const totalImages = images.length;

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  }, [totalImages]);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  }, [totalImages]);

  // Optional: Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Safety check
  if (!Array.isArray(images) || totalImages === 0) {
    return <div className="slider-container">No images to display.</div>;
  }

  return (
    <div className="slider" role="region" aria-label="Image Slider">
      <figure className="slider__figure">
        <img
          src={images[currentImageIndex].url}
          alt={
            images[currentImageIndex].alt ||
            `Slide ${currentImageIndex + 1} of ${images.length}`
          }
          className="slider__image"
        />
        {images[currentImageIndex].caption && (
          <figcaption className="slider__caption">
            {images[currentImageIndex].caption}
          </figcaption>
        )}
      </figure>

      <div className="slider__controls">
        <button
          className="slider__button"
          onClick={prevSlide}
          aria-label="Previous slide"
          type="button"
        >
          <FiChevronLeft aria-hidden="true" size={24} />
        </button>
        <button
          className="slider__button"
          onClick={nextSlide}
          aria-label="Next slide"
          type="button"
        >
          <FiChevronRight aria-hidden="true" size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

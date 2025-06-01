import { useCallback, useEffect, useState } from "react";
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
    <div className="slider-container" role="region" aria-label="Image Slider">
      <button
        className="prev-button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        type="button"
      >
        &#8249;
      </button>

      <img
        src={images[currentImageIndex].url}
        alt={images[currentImageIndex].alt || `Slide ${currentImageIndex + 1}`}
        className="slider-image"
      />

      <button
        className="next-button"
        onClick={nextSlide}
        aria-label="Next Slide"
        type="button"
      >
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;

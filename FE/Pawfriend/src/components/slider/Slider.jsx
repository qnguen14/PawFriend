import React, { useState, useEffect } from "react";
import "./Slider.css";

const slides = [
  { id: 1, content: "Giả sử cái này là tin tức số 1" },
  { id: 2, content: "Giả sử cái này là tin tức số 2" },
  { id: 3, content: "Giả sử cái này là tin tức số 3" },
  { id: 4, content: "Giả sử cái này là tin tức số 4" },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically transition slides every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Function to handle dot or arrow navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-content">
        <p>{slides[currentIndex].content}</p>
      </div>
      <div className="slider-controls">
        <button
          onClick={() =>
            goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
          }
        >
          &#10094;
        </button>
        <button
          onClick={() =>
            goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
          }
        >
          &#10095;
        </button>
      </div>
      <div className="slider-dots">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

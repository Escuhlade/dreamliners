import React, { useRef } from "react";

const ImageSlider = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 200; // Adjust the scroll amount as needed

  const images = [
    { id: 1, url: "https://i.gyazo.com/409e073ccc5894f2f51b71cabea96bc2.jpg" },
    { id: 2, url: "https://i.gyazo.com/99ccb87a96af9613f73d2651ae1b22d2.png" },
    // Add more images as needed
  ];

  const handleScroll = (direction) => {
    const container = sliderRef.current;
    const scrollDirection = direction === "left" ? -1 : 1;
    container.scrollLeft += scrollAmount * scrollDirection;
  };

  return (
    <div className="App font-sans flex items-center justify-center mt-150 relative">
      {/* Left navigation button */}
      <button
        className="nav-btn left-btn absolute top-1/2 transform -translate-y-1/2 text-white"
        onClick={() => handleScroll("left")}
      >
        Left
      </button>

      {/* Image container */}
      <div
        className="images-container flex max-w-500 overflow-hidden"
        ref={sliderRef}
      >
        {images.map((image) => (
          <img
            className="image w-100 h-100 m-2 rounded-8"
            alt="sliderImage"
            key={image?.id}
            src={image?.url}
          />
        ))}
      </div>

      {/* Right navigation button */}
      <button
        className="nav-btn right-btn absolute top-1/2 right-0 transform -translate-y-1/2 text-white"
        onClick={() => handleScroll("right")}
      >
        Right
      </button>
    </div>
  );
};

export default ImageSlider;

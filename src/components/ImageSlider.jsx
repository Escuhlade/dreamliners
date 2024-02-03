import React, { useRef, useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import image1 from "../images/AcuraTlBrown_16x9.png"
import tl1 from "../images/Editttt-9_16x9.png"
import img1 from "../images/16x9Gallery/DSC_0366_16x9.png"
import img2 from "../images/16x9Gallery/DSC_0369_16x9.png"
import img3 from "../images/16x9Gallery/DSC_0393_16x9.png"
import img4 from "../images/16x9Gallery/DSC_0419_16x9.png"
import img5 from "../images/16x9Gallery/Edited 2_16x9.png"
import img6 from "../images/16x9Gallery/IMG_7380-Edit_16x9.png"
import img7 from "../images/16x9Gallery/g801_16x9.png"
import img8 from "../images/16x9Gallery/g802_16x9.png"
import img9 from "../images/16x9Gallery/g803_16x9.png"
import img10 from "../images/16x9Gallery/i81_16x9 (1).png"
import img11 from "../images/16x9Gallery/i81_16x9.png"
import img12 from "../images/16x9Gallery/IMG_7380-Edit_16x9.png"
import img13 from "../images/16x9Gallery/luxury_16x9.png"
import img14 from "../images/16x9Gallery/m801_16x9.png"
import img15 from "../images/16x9Gallery/m802_16x9.png"
import img16 from "../images/16x9Gallery/premium_16x9.png"
import img17 from "../images/16x9Gallery/starter_16x9.png"

import tester from "../images/Gallery_Slider/g801.png"
const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: tl1,
    thumbnail: tl1,
  },

  // new additional files to list
  {
    original: img6,
    thumbnail: img6,
  },
  {
    original: img7,
    thumbnail: img7,
  },
  {
    original: img8,
    thumbnail: img8,
  },
  {
    original: img9,
    thumbnail: img9,
  },
  {
    original: img10,
    thumbnail: img10,
  },
  {
    original: img12,
    thumbnail: img12,
  },
  {
    original: img13,
    thumbnail: img13,
  },
  {
    original: img14,
    thumbnail: img14,
  },
  {
    original: img15,
    thumbnail: img15,
  },
  
  {
    original: tester,
    thumbnail: tester,
  },
];

const ImageSlider = () => {
  const galleryRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleManualSlide = (index) => {
    galleryRef.current.slideToIndex(index);
    setCurrentIndex(index);
  };

  const handleBeforeSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);

    if (!isFullscreen) {
      galleryRef.current.fullScreen();
    } else {
      galleryRef.current.exitFullScreen();
    }
  };

  const CustomLeftNav = ({ onClick, disabled }) => (
    <button
      type="button"
      className={`image-gallery-icon image-gallery-left-nav${
        disabled ? " disabled" : ""
      }`}
      aria-label="Previous Slide"
      onClick={onClick}
      disabled={disabled}
      style={{ color: "white" }}
    />
  );

  const CustomRightNav = ({ onClick, disabled }) => (
    <button
      type="button"
      className={`image-gallery-icon image-gallery-right-nav${
        disabled ? " disabled" : ""
      }`}
      aria-label="Next Slide"
      onClick={onClick}
      disabled={disabled}
      style={{ color: "white" }}
    />
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Gallery
        items={images}
        // showBullets
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        renderLeftNav={CustomLeftNav}
        renderRightNav={CustomRightNav}
        ref={galleryRef}
        fullscreen={isFullscreen}
        disableSwipe={isFullscreen}
        onBeforeSlide={handleBeforeSlide}
        className="w-full h-full"
      />
      <div
        className="flex w-full h-full justify-center mt-10"
        // style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index}`}
            style={{
              width: "50px",
              height: "40px",
              border: index === currentIndex ? "2px solid blue" : "none",
              cursor: "pointer",
              margin: "0 5px",
            }}
            onClick={() => handleManualSlide(index)}
          />
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={toggleFullscreen}>
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

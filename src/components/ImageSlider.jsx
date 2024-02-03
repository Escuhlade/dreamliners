import React, { useRef, useState } from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import image1 from "../images/AcuraTlBrown_16x9.png"
import tl1 from "../images/Editttt-9_16x9.png"
const images = [
  {
    original: image1,
    thumbnail: "https://i.gyazo.com/409e073ccc5894f2f51b71cabea96bc2.jpg",
  },
  {
    original: tl1,
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },

  {
    original: "https://images2.imgbox.com/96/07/D8lxVB4W_o.jpg",
    thumbnail: "https://images2.imgbox.com/96/07/D8lxVB4W_o.jpg",
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
        additionalClass="w-full h-full" // Additional class to make the gallery full-width and full-height
        className="w-full h-full"
      />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index}`}
            style={{
              width: "50px",
              height: "30px",
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

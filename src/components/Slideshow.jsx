import React from "react";
import "../css/Slideshow.css";

const images = [
  "https://i.gyazo.com/409e073ccc5894f2f51b71cabea96bc2.jpg",
  "https://i.gyazo.com/99ccb87a96af9613f73d2651ae1b22d2.png",
  "https://i.gyazo.com/ad0659dddd64e5d43d3951103b02ff19.png",
  "https://i.gyazo.com/38242f577f4f64b2c25c859036a2bf25.jpg",
  "https://i.gyazo.com/8744b31953b76015ea174b0fa90ae978.png",
  "https://i.gyazo.com/5f08f77340690deed61456405a2b2bb5.png",
  "https://i.gyazo.com/86fccc38a53095104f24361f4785678a.png",
  "https://i.gyazo.com/d8ce9e2fc5321a89e08007b284c760e2.png",
];

const delay = 3000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((imageUrl, idx) => (
          <div
            className="slide"
            key={idx}
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

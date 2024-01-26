import React from "react";
import Slideshow from "../components/Slideshow";
import VideoHeroImg from "../components/VideoHeroImg";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";

const Showcase = () => {
  return (
    <div>
      {/* general wrap for navbar */}
      <Navbar />
      <div>
      {/* this is for the image sliding and the packages in the on exihbit on figma */}
      {/* image slider component */}
      <ImageSlider />
      {/* ultra luxury package */}
      <div className="flex justify-start snap-always snap-center mb-0 h-screen">

      <img src="https://images2.imgbox.com/cd/4c/jakyua95_o.png" alt="M8 Starlight Kit"className="w-full h-full object-cover"></img>
      </div>
      {/* Custom luxury 900 Kit */}
      <div className="flex justify-start snap-always snap-center mb-0 h-screen">

        <img src="https://images2.imgbox.com/7d/cc/MMyEwMtT_o.png" alt="i8 Starlight Kit"className="w-full h-full object-cover"></img>
      </div>

      {/* 600 kit premimum */}
      <div className="flex justify-start snap-always snap-center mb-0 h-screen">

        <img src="https://images2.imgbox.com/9e/ab/fEGcq3bM_o.png" alt="g80 Starlight Kit"className="w-full h-full object-cover"></img>
      </div>

      
      </div>
      {/* <Slideshow /> */}
    </div>
  );
};

export default Showcase;

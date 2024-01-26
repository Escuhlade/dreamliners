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
      <img src="../images/Exhibit_Images/m801.png" alt="M8 Starlight Kit"className="w-full h-full"></img>
      </div>
      {/* <Slideshow /> */}
    </div>
  );
};

export default Showcase;

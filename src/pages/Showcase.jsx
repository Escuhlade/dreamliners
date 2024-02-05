import React from "react";
import Navbar from "../components/Navbar";

import ImageSlider from "../components/ImageSlider";
import FooterComp from "../components/FooterComp";
import m8 from "../images/Exhibit_Images/Group40.png";
import i8 from "../images/Exhibit_Images/Group41.png";
import g80 from "../images/Exhibit_Images/Group42.png";
import nebula from "../images/nebula.jpeg"

const Showcase = () => {
  return (
    <div>
      {/* general wrap for navbar */}
      <Navbar />
      <div className="">
        {/* image slider component */}
        <ImageSlider className="w-full h-full" />
        {/* ultra luxury package */}
        <div className="flex justify-start snap-always snap-center mb-0 h-screen">
          <img src={m8} alt="M8 Starlight Kit" className="w-full h-full object-cover"></img>
        </div>
        {/* Custom luxury 900 Kit */}
        <div className="flex justify-start snap-always snap-center mb-0 h-screen">
          <img src={i8} alt="i8 Starlight Kit" className="w-full h-full object-cover"></img>
        </div>
        {/* 600 kit premium */}
        <div className="flex justify-start snap-always snap-center mb-0 h-screen">
          <img src={g80} alt="g80 Starlight Kit" className="w-full h-full object-cover"></img>
        </div>
      </div>
      {/* footer component */}
      <FooterComp />
    </div>
  );
};

export default Showcase;

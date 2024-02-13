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
      </div>
      {/* footer component */}
      <FooterComp />
    </div>
  );
};

export default Showcase;

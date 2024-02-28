import React from "react";
import Navbar from "../components/Navbar";
import FooterComp from "../components/FooterComp";
import m8 from "../images/Exhibit_Images/Group40.png";
import i8 from "../images/Exhibit_Images/Group41.png";
import g80 from "../images/Exhibit_Images/Group42.png";

const Packages = () => {
  return (
    <>
      <Navbar />
      <div className="scroll-container" style={{ overflowY: "scroll", height: "100vh", scrollSnapType: "y mandatory" }}>
        {/* ultra luxury package */}
        <div className="flex justify-start snap-align mb-0 h-screen" style={{ scrollSnapAlign: "start" }}>
          <img src={m8} alt="M8 Starlight Kit" className="w-full h-full object-cover"></img>
        </div>
        {/* Custom luxury 900 Kit */}
        <div className="flex justify-start snap-align mb-0 h-screen" style={{ scrollSnapAlign: "start" }}>
          <img src={i8} alt="i8 Starlight Kit" className="w-full h-full object-cover"></img>
        </div>
        {/* 600 kit premium */}
        <div className="flex justify-start snap-align mb-0 h-screen" style={{ scrollSnapAlign: "start" }}>
          <img src={g80} alt="g80 Starlight Kit" className="w-full h-full object-cover"></img>
        </div>
      </div>
      {/* footer component */}
      <FooterComp />
    </>
  );
};

export default Packages;

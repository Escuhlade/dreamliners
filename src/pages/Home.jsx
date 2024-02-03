import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterComp from "../components/FooterComp";

import herovideo from '../videos/compressed/HeroVideo-trimmed.mp4'
import dualcolor from '../videos/compressed/DualColor-trimmed.mp4'
import leftside from '../videos/compressed/LeftSide-trimmed.mp4'
import homepage3 from '../videos/compressed/HomePage3-Trimmed.mov'

const Home = () => {
  const videoRefs = [useRef(), useRef(), useRef()];

  useEffect(() => {
  }, []);

  return (
    <>
      <Navbar />
      <div className="overflow-y-auto h-screen" style={{ scrollSnapType: "y mandatory" }}>
        {/* First video div */}
        <div ref={videoRefs[0]} className="mb-0 w-full h-full" style={{ scrollSnapAlign: "start" }}>
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src={herovideo} />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second video div */}
        <div ref={videoRefs[1]} className="flex justify-start mb-0 h-screen" style={{ scrollSnapAlign: "start" }}>
          <video
            className="w-auto h-full object-cover"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src={leftside} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src={dualcolor} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Third video div */}
        <div ref={videoRefs[2]} className="mb-0 h-screen" style={{ scrollSnapAlign: "start" }}>
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source src={homepage3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Footer component */}
      <FooterComp />
    </>
  );
};

export default Home;

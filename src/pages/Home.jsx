import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import FooterComp from "../components/FooterComp";

import herovideo from '../videos/compressed/HeroVideo-trimmed.mp4'
import dualcolor from '../videos/compressed/DualColor-trimmed.mp4'
import leftside from '../videos/compressed/LeftSide-trimmed.mp4'
import homepage3 from '../videos/compressed/HomePage3-Trimmed.mov'

const Home = () => {

  const videoRefs = [useRef(), useRef(), useRef()];


  return (
    <>
      <Navbar />
      <div className="overflow-y-auto h-screen" style={{ scrollSnapType: "y mandatory" }}>
        {/* First video div */}
        <div ref={videoRefs[0]} className="h-screen" style={{ scrollSnapAlign: "start" }}>
          <video
            className="h-screen w-screen"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
            loading="lazy"
          >
            <source src={herovideo} />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second video div */}
        <div ref={videoRefs[1]} className="" style={{ scrollSnapAlign: "start" }}>
          <div className="flex justify-center h-screen">
            <div className="">
              <video
                className="h-screen"
                controls={false}
                autoPlay={true}
                loop={true}
                muted={true}
                loading="lazy"
              >
                <source src={leftside} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="">
              <video
                className="h-screen w-auto"
                controls={false}
                autoPlay={true}
                loop={true}
                muted={true}
                loading="lazy"
              >
                <source src={dualcolor} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Third video div */}
        <div ref={videoRefs[2]} className="h-screen" style={{ scrollSnapAlign: "start" }}>

          <video
            className="w-screen h-full"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
            loading="lazy"
          >
            <source src={homepage3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <FooterComp />
      </div>

      {/* Footer component */}
    </>
  );
};

export default Home;

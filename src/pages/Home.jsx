import React, { useState, useEffect } from "react";
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Navbar from "../components/Navbar";
import HeroVideo from "../videos/HeroVideo.mp4";
import VideoHeroPlay from "../components/VideoHeroPlay";
import FooterComp from "../components/FooterComp";

import herovideo from '../videos/compressed/HeroVideo-trimmed.mp4'
import dualcolor from '../videos/compressed/DualColor-trimmed.mp4'
import leftside from '../videos/compressed/LeftSide-trimmed.mp4'
import homepage3 from '../videos/compressed/HomePage3-Trimmed.mov'


const Home = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });
  
  return (
    <>
      {/* <h1> Butcher Works</h1> */}
      <Navbar />
      <div className="overflow-y-auto h-screen" ref={scrollRef}>
        <div className="mb-0 w-full h-full">
          {/* <ReactVideoPlayer /> */}
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            {/* Below is the main hero video that is going to be on the landing page of the website in source */}
            <source src={herovideo} />
            Your browser does not support the video tag.
          </video>
          {/* <VideoHeroPlay /> */}
          {/* <waqVideo /> */}
          {/* <video
            className="w-full h-full"
            controls
            onError={(e) => console.error(e)}
          >
            <source src={HeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
        <div className="flex justify-start mb-0 h-screen">
          {/* left video for half half split*/}
          <video
            className="w-auto h-full object-cover"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source
              src={leftside}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* right video for half half split*/}
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            <source
              src={dualcolor}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mb-0 h-screen">
          <video
            className="w-full h-full object-cover"
            controls={false}
            autoPlay={true}
            loop={true}
            muted={true}
          >
            {/* footer video end of website */}
            <source
              src={homepage3}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* footer comp */}
      <FooterComp/>
    </>
  );
};

export default Home;

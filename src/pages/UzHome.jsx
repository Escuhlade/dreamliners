import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ReactPlayer from 'react-player'
import FooterComp from "../components/FooterComp";

import herovideo from '../videos/compressed/HeroVideo-trimmed.mp4'
import dualcolor from '../videos/compressed/DualColor-trimmed.mp4'
import leftside from '../videos/compressed/LeftSide-trimmed.mp4'

const Home = () => {

  return (
    <>
      <Navbar />
      <div className=''>
        <ReactPlayer
          loop={true}
          playing={true}
          volume={0}
          muted={true}
          className=''
          url={herovideo}
          width='100%'
          height='100%'
        />
      </div>
      <div className=''>
        <ReactPlayer
          loop={true}
          playing={true}
          volume={0}
          muted={true}
          className=''
          url={leftside}
          width='50%'
          height='100%'
        />
      </div>
      <div className=''>
        <ReactPlayer
          loop={true}
          playing={true}
          volume={0}
          muted={true}
          className=''
          url={dualcolor}
          width='50%'
          height='100%'
        />
      </div>

      <FooterComp />
    </>
  );
};

export default Home;

// src/components/VideoHero.js

import React from "react";

const VideoHeroImg = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://i.gyazo.com/5f08f77340690deed61456405a2b2bb5.png"
        >
          <source
            src="https://www.youtube.com/watch?v=OHaNczj3gEY&ab_channel=WHYG35"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">WHYG WASSA</h1>
        <p className="text-lg">WHYG THE GOAT</p>
      </div>
    </div>
  );
};

export default VideoHeroImg;

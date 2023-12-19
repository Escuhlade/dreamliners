// src/components/VideoHero.js

import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoHeroPlay = () => {
  const [player, setPlayer] = useState(null);

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      loop: 1,
      modestbranding: 1,
      controls: 0,
      showinfo: 0,
      frameborder: 0,
      allowfullscreen: 1,
    },
  };

  const videoUrl = "https://www.youtube.com/watch?v=OHaNczj3gEY";

  const onReady = (event) => {
    setPlayer(event.target);
  };

  const onStateChange = (event) => {
    // If video has ended, restart it
    if (event.data === YouTube.PlayerState.ENDED) {
      player.seekTo(0);
    }
  };

  const playPauseVideo = () => {
    if (player.getPlayerState() === YouTube.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <YouTube
          videoId={videoUrl.split("v=")[1]}
          opts={videoOptions}
          className="w-full h-full object-cover"
          onReady={onReady}
          onStateChange={onStateChange}
        />
      </div>
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={playPauseVideo}
      ></div>
      <div className="z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">WHYG WASSA</h1>
        <p className="text-lg">WHYG THE GOAT</p>
      </div>
    </div>
  );
};

export default VideoHeroPlay;

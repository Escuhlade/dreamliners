import React from "react";

const VideoLocal = () => {
  return (
    <div>
      <video width="100%" height="100%" controls>
        <source
          src="https://redirect.viglink.com/?format=go&jsonp=vglnk_170337700781316&key=eac202ea7a96cf485281d6c4ffa2069e&libId=lqipzkml0103es17000ULb5at6f20&loc=https%3A%2F%2Fwww.makeuseof.com%2Freact-video-player-create%2F&ccpaConsent=1---&v=1&type=U&opt=true&optExText=false&out=http%3A%2F%2Fcommondatastorage.googleapis.com%2Fgtv-videos-bucket%2Fsample%2FBigBuckBunny.mp4&ref=https%3A%2F%2Fwww.google.com%2F&title=How%20to%20Create%20a%20Video%20Player%20in%20React&txt=http%3A%2F%2Fcommondatastorage.googleapis.com%2Fgtv-videos-bucket%2Fsample%2FBigBuckBunny.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoLocal;

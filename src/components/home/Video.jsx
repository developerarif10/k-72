import React from "react";

function Video() {
  return (
    <div className="w-full h-full object-cover">
      <video
        loop
        autoPlay
        muted
        className="w-full h-full object-cover"
        src="/videos/hero_video.mp4"
      ></video>
    </div>
  );
}

export default Video;

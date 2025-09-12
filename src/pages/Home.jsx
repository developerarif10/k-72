import React from "react";
import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";

function Home() {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-2 overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  );
}

export default Home;

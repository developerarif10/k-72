import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

function Stair() {
  const stairParentRef = useRef(null);

  const currentPath = useLocation().pathname;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });

    tl.to(stairParentRef.current, {
      display: "none",
    });

    tl.to(".stair", {
      y: "0%",
    });
  }, [currentPath]);

  return (
    <div ref={stairParentRef} className="h-screen w-full  fixed z-20 top-0">
      <div className="h-full flex w-full">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
  );
}

export default Stair;

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import ProjectCard from "../components/projects/ProjectCard";

const projects = [
  {
    image1: "/projectImg/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
    image2: "/projectImg/WS---K72.ca---Thumbnail-1280x960.jpg",
  },

  {
    image1: "/projectImg/thumbnailimage_atable2-1280x960.jpg",
    image2: "/projectImg/CF_thumbnail-1280x960.jpg",
  },
  {
    image1: "/projectImg/thumbnailimage_atable2-1280x960.jpg",
    image2: "/projectImg/CF_thumbnail-1280x960.jpg",
  },
];

function Projects() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".hero", {
      height: "60px",
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "bottom -100%",
        scrub: true,
      },
    });
  });

  return (
    <div className="lg:p-4 p-2 mb-[100vh]">
      <div className="pt-[40vh]">
        <h2 className="font-[font2] text-[15vw] uppercase leading-none">
          Projets
        </h2>
      </div>

      <div className="-lg:mt-20 lol">
        {projects.map((project) => (
          <div className="hero w-full mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2">
            <ProjectCard key={project.name} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

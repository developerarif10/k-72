import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "/agenceImages/carl_480x640-480x640.jpg",
    "/agenceImages/CAMILLE_480X640_2-480x640.jpg",
    "/agenceImages/ChantalG_480x640-480x640.jpg",
    "/agenceImages/claire_480x640-480x640.jpg",
    "/agenceImages/HugoJoseph_480x640-480x640.jpg",
    "/agenceImages/maxime_480x640_2-480x640.jpg",
    "/agenceImages/mel_480x640-480x640.jpg",
    "/agenceImages/michele_480x640-480x640.jpg",
    "/agenceImages/mylenes_480x640-480x640.jpg",
    "/agenceImages/olivier_480x640-480x640.jpg",
    "/agenceImages/sophiea_480x640-480x640.jpg",
    "/agenceImages/carl1_480x640-480x640.jpg",
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 27%",
        end: "top -1200",
        scrub: true,
        pin: true,

        onUpdate: (e) => {
          let imageIndex;

          if (e.progress < 1) {
            imageIndex = Math.round(e.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }

          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });
  return (
    <div>
      <div className="agence-section1">
        <div
          ref={imageDivRef}
          className="absolute top-40 left-[31vw] w-[15vw] h-[20vw]"
        >
          <img
            ref={imageRef}
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt="image"
            className="h-full w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <h1 className="text-[19vw] uppercase text-center leading-[17vw]">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] pr-2">
            <p className="text-6xl leading-none">
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; &nbsp; Notre curiosité nourrit notre créativité. On
              reste humbles et on dit non aux gros egos, même le vôtre. Une
              marque est vivante. Elle a des valeurs, une personnalité, une
              histoire. Si on oublie ça, on peut faire de bons chiffres à court
              terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à
              donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="agence-section2 h-screen"></div>
    </div>
  );
};
export default Agence;

import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-4">
      <Link
        className="text-[6vw] lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] px-4 py-0 flex items-center border-white rounded-full uppercase leading-none"
        to="/projects"
      >
        Projects
      </Link>

      <div className="flex items-center">
        <Link
          className="text-[6vw] lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] px-4 py-0 flex items-center border-white rounded-full uppercase leading-none"
          to="/agence"
        >
          agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;

import React from "react";
import "../style/Map1.css";

const Map1 = ({ text1, text2 }) => {
  return (
    <>
      <button
        id="map-a"
        className="relative inline-block px-6 py-3 text-white font-medium bg-gradient-to-r from-black to-red-950 rounded-lg shadow-[0_0_10px_rgba(0,0,255,1),0_0_10px_rgba(0,0,255,0.2)]"
        style={{ clipPath: "clip-path: polygon(100% 17%, 91% 8%, 82% 0, 0% 0%, 0 82%, 9% 90%, 18% 100%, 100% 99%);" }}
      >
        <span
          id="map-b"
          className="absolute inset-2 rounded-lg bg-gradient-to-r from-blue-500-20% to-black-80% border-[1px] border-transparent"
        ></span>

        <div className="relative flex md:space-x-20 text-2xl" id="map-c">
          <span>{text1}</span>
          <span className="span2">{text2}</span>
        </div>
      </button>
    </>
  );
};

export default Map1;
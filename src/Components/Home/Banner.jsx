import React from "react";
import banner from "/banner2.jpg";

const Banner = () => {
  return (
    <div className="relative ">
      <section
        className="flex w-full h-[85vh] bg-center bg-no-repeat bg-cover text-white items-center justify-center "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundColor: "rgba(0, 0, 0, 0.3)", // dark overlay color
          backgroundBlendMode: "overlay", // blend overlay on bg image
          filter: "blur(0px)", // blur the whole section (try small value)
          WebkitFilter: "blur(0px)", // for Safari
        }}
      ></section>

      <div className="absolute top-1/2 left-1/2 z-10  text-center -translate-x-1/2 -translate-y-1/2 text-white">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Marathon <span className="text-[#74e1f5]">Management</span>
        </h1>
        <p className="mt-4 text-xl">
          Beyond the Miles, Behind the Moments — Mastering the Marathon
          Experience.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 border-none bg-gradient-to-r from-[#284dc7] to-[#06B6D4]  shadow-lg rounded text-white font-semibold hover:brightness-110 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-white rounded text-yellow-400 font-semibold hover:bg-[#1994aa] hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

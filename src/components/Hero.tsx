import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 dark:text-white text-[#3B3B3B]">
      <div className="flex flex-col justify-center md:w-1/2 space-y-4 md:space-y-6">
        <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light">
          Hi, I am
        </h3>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
          Sajjad Aziz
        </h1>
        <h4 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-medium bg-gradient-to-r from-[#5044E5] to-[#42D6FF] bg-clip-text text-transparent">
          Frontend Developer
        </h4>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={assets.hero}
          alt="Man using laptop"
          className="w-3/4 sm:w-2/3 md:w-full lg:w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;

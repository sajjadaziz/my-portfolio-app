import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col pt-15 md:pt-0 md:flex-row items-center justify-between w-full px-6 md:px-16 dark:text-white text-[#3B3B3B]"
    >
      <div className="flex flex-col justify-center md:w-1/2 space-y-4 md:space-y-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left font-bold">
          Hi, I am
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold">
          Sajjad Aziz
        </h1>
        <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center md:text-left font-extrabold text-[#5044e5]">
          Frontend Developer
        </h4>
        <div className="flex gap-2.5">
          <a
            href="#contact-me"
            className="w-28 md:w-36 flex items-center justify-center gap-2 bg-primary text-white text-xs md:text-sm py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
          >
            Contact me{" "}
            <img
              alt="Submit contact form"
              className="w-3 md:w-4"
              src={assets.arrow_icon}
            />
          </a>
          <a
            href={assets.resume}
            download="Sajjad_Aziz_Resume.pdf"
            className="w-28 md:w-36 flex items-center justify-center gap-2 bg-[#3B3B3B] text-white text-xs md:text-sm py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
          >
            My resume{" "}
            <img
              alt="Submit contact form"
              className="w-3 md:w-4"
              src={assets.download}
            />
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center pt-10 md:pt-0">
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

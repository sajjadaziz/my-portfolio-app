import React from "react";
import assets from "../assets/assets";

const About = () => {
  const startDate = new Date("2023-01-01").getTime();
  const now = new Date().getTime();
  const diffMs = now - startDate;
  const years = diffMs / (1000 * 60 * 60 * 24 * 365);
  const decimalPart = years - Math.floor(years);
  let yearsRounded: number;

  if (decimalPart >= 0.6) yearsRounded = Math.ceil(years);
  else yearsRounded = Math.floor(years);

  return (
    <div
      id="about-me"
      className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-16 dark:text-white text-[#3B3B3B]"
    >
      <div className="flex flex-col justify-center md:w-1/2 space-y-4 md:space-y-6 md:pr-10">
        <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold">
          About <span className="text-[#5044e5]">me</span>
        </h3>
        <p className="text-lg sm:text-sm md:text-base lg:text-lg font-medium">
          I’m a Frontend Developer specializing in React JS and Angular, with{" "}
          {yearsRounded} years of experience building responsive and
          user-friendly web applications. I enjoy working with modern
          JavaScript, TypeScript, and state management libraries to create
          high-performance, maintainable code. Collaborating with
          cross-functional teams in fast-paced environments has helped me
          deliver high-quality solutions and grow as a professional. I’m
          passionate about crafting intuitive interfaces and continuously
          learning new technologies to drive innovation.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src={assets.about}
          alt="Man using laptop"
          className="w-3/4 sm:w-2/3 md:w-full lg:w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default About;

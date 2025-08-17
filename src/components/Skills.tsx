import React from "react";
import { skills } from "../assets/assets";

const Skills = () => {
  const skillsList = [
    {
      name: "REACT",
      image: skills.react,
    },
    {
      name: "ANGULAR",
      image: skills.angular,
    },
    {
      name: "TYPESCRIPT",
      image: skills.typescript,
    },
    {
      name: "JAVASCRIPT",
      image: skills.javascript,
    },
    {
      name: "HTML",
      image: skills.html,
    },
    {
      name: "CSS",
      image: skills.css,
    },
    {
      name: "SASS",
      image: skills.sass,
    },
    {
      name: "TAILWIND",
      image: skills.tailwind,
    },
    {
      name: "JAVA",
      image: skills.java,
    },
    {
      name: "SQL",
      image: skills.sql,
    },
    {
      name: "GIT",
      image: skills.git,
    },
    {
      name: "FIGMA",
      image: skills.figma,
    },
  ];
  return (
    <div id="skills" className="px-6 md:px-16 py-12 pt-[72px]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white text-gray-800">
        What I’m good <span className="text-[#5044e5]">at</span>
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 sm:gap-y-10 md:gap-y-15 justify-items-center items-center">
        {skillsList.map((skill, index) => (
          <div className="flex flex-col items-center justify-center md:gap-2.5">
            <img
              key={skill.name}
              src={skill.image}
              alt={`Skill ${index + 1}`}
              className="w-10 md:w-15 h-20 object-contain"
            />
            <p className="text-xs md:text-base text-center text-[#3B3B3B] dark:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

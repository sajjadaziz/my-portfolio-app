import React from "react";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <div id="skills" className="px-6 md:px-16 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white text-gray-800">
        What I’m Good At
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-7 md:gap-10 justify-items-center items-center">
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill}
            alt={`Skill ${index + 1}`}
            className="w-20 h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;

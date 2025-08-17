import React, { useEffect, useRef, useState } from "react";
import assets from "../assets/assets";
import { ProjectLanguage } from "../types/ProjectLanguage";

const Portfolio = () => {
  const projectList = [
    {
      name: "E-commerce Store",
      image: assets.web1,
      language: ProjectLanguage.angular,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
    {
      name: "Self Service Kiosk",
      image: assets.web2,
      language: ProjectLanguage.react,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
    {
      name: "Admin Portal",
      image: assets.web3,
      language: ProjectLanguage.react,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
    {
      name: "Social Media Feed",
      image: assets.web1,
      language: ProjectLanguage.angular,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
    {
      name: "Productivity App",
      image: assets.web2,
      language: ProjectLanguage.react,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
    {
      name: "Travel App",
      image: assets.web3,
      language: ProjectLanguage.angular,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
    {
      name: "Interactive Game",
      image: assets.web1,
      language: ProjectLanguage.react,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
    {
      name: "Real-time Chat App",
      image: assets.web2,
      language: ProjectLanguage.react,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
    {
      name: "User Analytics Dashboard",
      image: assets.web3,
      language: ProjectLanguage.angular,
      github: "https://github.com/sajjadaziz/my-portfolio-app",
      url: "http://localhost:5173/",
    },
  ];

  const [filter, setFilter] = useState<string>("All");
  const sliderRef = useRef<HTMLDivElement>(null);

  const languages = Array.from(new Set(projectList.map((p) => p.language)));

  const filteredProjects =
    filter === "All"
      ? projectList
      : projectList.filter((p) => p.language === filter);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth / 2;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [filter]);

  return (
    <div id="portfolio" className="px-6 md:px-16 py-12 md:pt-[72px]">
      <h2 className="text-3xl md:text-4xl font-bold text-left mb-8 dark:text-white text-gray-800">
        Some of my <span className="text-[#5044e5]">works</span>
      </h2>

      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full text-white ${
            filter === "All" ? "bg-[#5044e5]" : "bg-[#3B3B3B]"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        {languages.map((lang) => (
          <button
            key={lang}
            className={`px-4 py-2 rounded-full text-white ${
              filter === lang ? "bg-[#5044e5]" : "bg-[#3B3B3B]"
            }`}
            onClick={() => setFilter(lang)}
          >
            {lang}
          </button>
        ))}
      </div>

      <div className="relative md:px-14">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#3B3B3B] text-white p-3 rounded-[50%] z-10"
        >
          <img
            alt="Scroll to left"
            className="w-4 rotate-180"
            src={assets.arrow_icon}
          />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="min-w-[300px] max-w-[300px] bg-[#3B3B3B] rounded-lg p-4 flex-shrink-0"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">
                {project.name}
              </h3>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="" src={assets.github_dark} />
                </a>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img alt="" src={assets.open_link} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#3B3B3B] text-white p-3 rounded-[50%] z-10"
        >
          <img alt="Scroll to left" className="w-4" src={assets.arrow_icon} />
        </button>
      </div>
    </div>
  );
};

export default Portfolio;

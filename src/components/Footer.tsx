import React from "react";
import assets from "../assets/assets";
import { Theme } from "../types/Theme";

type FooterProps = {
  theme: Theme;
};

const Footer = ({ theme }: FooterProps) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-gray-700 dark:text-white text-sm sm:text-base mb-6">
        <a href="#" className="hover:border-b hover:border-gray-500 transition">
          Home
        </a>
        <a
          href="#about-me"
          className="hover:border-b hover:border-gray-500 transition"
        >
          About Me
        </a>
        <a
          href="#skills"
          className="hover:border-b hover:border-gray-500 transition"
        >
          Skills
        </a>
        <a
          href="#portfolio"
          className="hover:border-b hover:border-gray-500 transition"
        >
          Portfolio
        </a>
        <a
          href="#contact-me"
          className="hover:border-b hover:border-gray-500 transition"
        >
          Contact Me
        </a>
      </div>

      <div className="flex justify-center gap-6 sm:gap-8">
        <a
          href="https://github.com/sajjadaziz?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={theme === Theme.Dark ? assets.github_dark : assets.github}
            alt="GitHub"
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/im-sajjad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={theme === Theme.Dark ? assets.linkedin_dark : assets.linkedin}
            alt="LinkedIn"
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
        </a>
        <a href="mailto:azizmsajjad@gmail.com">
          <img
            src={theme === Theme.Dark ? assets.email_dark : assets.email}
            alt="Email"
            className="w-6 h-6 hover:scale-110 transition-transform"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

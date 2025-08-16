import React, { useEffect, useState } from "react";
import assets from "../assets/assets";
import { Theme } from "../types/Theme";

type ThemeSwitcherProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const Navbar = ({ theme, setTheme }: ThemeSwitcherProps) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setTheme(prefersDarkMode ? Theme.Dark : Theme.Light);
  }, []);

  useEffect(() => {
    if (theme === Theme.Dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="flex justify-between item-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <div>
        <img
          src={theme === Theme.Dark ? assets.logo_dark : assets.logo}
          className="w-8 sm:w-10"
          alt="Logo"
        />
      </div>
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          className="w-5 absolute right-4 top-4 sm:hidden"
          src={assets.close_icon}
          onClick={() => setSidebarOpen(false)}
          alt="Close Menu"
        />
        <a
          href="#"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          href="#about-me"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          About Me
        </a>
        <a
          href="#skills"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Skills
        </a>
        <a
          href="#portfolio"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Portfolio
        </a>
        <a
          href="#contact-me"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Contact Me
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <img
          className="w-8 sm:hidden"
          src={theme === Theme.Dark ? assets.menu_icon_dark : assets.menu_icon}
          alt="Open Menu"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Theme } from "./types/Theme";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer theme={theme} />
    </div>
  );
};

export default App;

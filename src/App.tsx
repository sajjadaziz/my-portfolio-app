import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Theme } from "./types/Theme";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <ContactMe />
      <Footer theme={theme} />
    </div>
  );
};

export default App;

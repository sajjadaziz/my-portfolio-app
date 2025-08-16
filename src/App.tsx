import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Theme } from "./types/Theme";

const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;

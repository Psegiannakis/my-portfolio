import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/main.css";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <body className={darkMode ? "dark" : ""}>
      <React.StrictMode>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Skills darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Projects darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </React.StrictMode>
    </body>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

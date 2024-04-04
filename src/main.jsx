import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import "../styles/main.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <main className={darkMode ? "dark" : ""}>
      <React.StrictMode>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </React.StrictMode>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Skills />
    <Projects />
    <Contact />
  </React.StrictMode>
);

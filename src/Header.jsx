import "../styles/header.css";
import "./main.jsx";

export default function Header(props) {
  const scroll = (className) => {
    const sections = document.getElementsByClassName(className);
    if (sections.length > 0) {
      sections[0].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <body className={props.darkMode ? "dark" : ""}>
        <img className="logo" src="/logo.png" alt="my logo" />
        <button className="theme-button" onClick={props.toggleDarkMode}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-moon-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
          </svg>
        </button>
        <div className="header-div">
          <div className="header">
            <h2 onClick={() => scroll("hero-main")}>Home</h2>
            <h2 onClick={() => scroll("skills-div")}>About</h2>
            <h2 onClick={() => scroll("projects-div")}>Projects</h2>
            <h2 onClick={() => scroll("contact-footer")}>Contact</h2>
          </div>
        </div>
      </body>
    </>
  );
}

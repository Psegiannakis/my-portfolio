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
      <img className="logo" src="/logo.png" alt="my logo" />
      <div className="header-div">
        <div className="header">
          <h2 onClick={() => scroll("hero-main")}>Home</h2>
          <h2 onClick={() => scroll("skills-div")}>About</h2>
          <h2 onClick={() => scroll("projects-div")}>Projects</h2>
          <h2 onClick={() => scroll("contact-footer")}>Contact</h2>
        </div>
      </div>
    </>
  );
}

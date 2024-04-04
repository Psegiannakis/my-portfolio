import "../styles/projects.css";

export default function Projects(props) {
  return (
    <>
      <main className={props.darkMode ? "dark" : ""}>
        <div className="projects-div">
          <h3>Projects</h3>
          <p>A small display of what i can do</p>
          <div className="projects-grid">
            <div className="main-site">E-commerce Furniture Site</div>
            <div>Secrets Project - Authentication and Security</div>
            <div>Meme-Generator</div>
          </div>
        </div>
      </main>
    </>
  );
}

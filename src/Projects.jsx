import "../styles/projects.css";

export default function Projects(props) {
  return (
    <>
      <main className={props.darkMode ? "dark" : ""}>
        <div className="projects-div">
          <h3>Projects</h3>
          <div className="projects-grid">
            <div>E-commerce Furniture Site</div>
            <div>E-commerce Furniture Site</div>
            <div>E-commerce Furniture Site</div>
            <div>E-commerce Furniture Site</div>
          </div>
        </div>
      </main>
    </>
  );
}

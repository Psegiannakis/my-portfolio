import "../styles/projects.css";

export default function Projects(props) {
  return (
    <>
      <main className={props.darkMode ? "dark" : ""}>
        <div className="projects-div">
          <h3>Projects</h3>
          <p>A small display of what i can do</p>
        </div>
        <span className="grid">
          <div className="projects-grid">
            <div className="main-site grid-div">
              <a href="https://sports-hub-demo.netlify.app/">🔗</a>
              <p>Sports Hub</p>
            </div>
            <div className="grid-div">
              <a href="https://exercise-substitute.netlify.app///">🔗</a>
              <p>Exercise Substitute </p>
            </div>
            <div className="grid-div">
              <a href="https://furniture-plus.netlify.app/">🔗</a>
              <p>E-commerce Furniture Plus</p>
            </div>
          </div>
        </span>
      </main>
    </>
  );
}

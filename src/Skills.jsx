import "../styles/skills.css";

export default function Skills(props) {
  return (
    <>
      <main className={props.darkMode ? "dark" : ""}>
        <div className="skills-div">
          <h3>Skill set</h3>
          <h4>Front-end Development</h4>
          <div className="list">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (JS)</li>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>UI / UX (User Interface / User Experience)</li>
              <li>jQuery</li>
            </ul>
          </div>
          <div className="skills-2">
            <h4>Back-end Development</h4>
            <div className="list two">
              <ul>
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Express.js</li>
                <li>EJS (Embedded JavaScript)</li>
                <li>Axios</li>
                <li>BCrypt</li>
                <li>Passport</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

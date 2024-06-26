import "../styles/hero.css";

export default function Hero(props) {
  return (
    <>
      <main className={props.darkMode ? "dark" : ""}>
        <div className="hero-main">
          <h1>
            Hi. I'm
            <span className="color-text"> Eleftherios Psegiannakis.</span>
          </h1>
          <h3 className="late-fade">
            ( Just call me <span className="color-text">Teri...</span> )
          </h3>
        </div>

        <div className="hero-about">
          <h3>About</h3>
          <p className="para">
            As a web developer, I'm passionate about crafting captivating
            digital experiences. With a focus on design and expertise in the
            latest development tools, I'm dedicated to building user-friendly
            websites and applications. My portfolio showcases my commitment to
            innovation and quality craftsmanship in the digital realm.
          </p>
        </div>
      </main>
    </>
  );
}

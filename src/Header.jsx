import "../styles/header.css";

export default function Header() {
  return (
    <>
      <img className="logo" src="/logo.png" alt="my logo" />
      <div className="header-div">
        <div className="header">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Projects</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </>
  );
}

import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ introRef, aboutRef, projectsRef, contactRef }) => {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar-root">
      <input className="navbar-checkbox" id="navbar-buttons" type="checkbox" />
      <label className="label-icon" htmlFor="navbar-buttons">
        <FiMenu className="navbar-icon lines-icon" />
        <FiX className="navbar-icon x-icon" />
      </label>

      <ul className="navbar-ul">
        <li onClick={() => scrollToSection(introRef)}>Intro</li>
        <li onClick={() => scrollToSection(aboutRef)}>About</li>
        <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

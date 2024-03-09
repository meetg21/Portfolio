import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../assets/logo.png"; 
import menu from "../assets/menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" style={{ backgroundColor: "#1A0B2E" }}>
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" /> 
        </div>
        <div className={`navbar__menu ${isOpen ? "active" : ""}`}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div className="navbar__mobile-menu" onClick={toggleMenu}>
          <div className="hamburger-menu">
            <img src={menu} alt="Logo" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar

import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  function toggleMenu() {
    setNavActive(!navActive);
  }
  const closeMenu = () => {
    setNavActive(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        closeMenu();
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
      <NavLink className="navbar__ham" onClick={toggleMenu}>
        <span className="navbar__ham__line"></span>
        <span className="navbar__ham__line"></span>
        <span className="navbar__ham__line"></span>
      </NavLink>
      <div className={navActive ? "navbar__items__active" : "navbar__items"}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="hero"
              className="navbar__items__content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="portfolio"
              className="navbar__items__content"
            >
              PortFolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="experience"
              className="navbar__items__content"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="aboutme"
              className="navbar__items__content"
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="contactme"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  function toggleMenu() {
    setNavActive(!navActive);
  }
  function closeMenu() {
    setNavActive(false);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) closeMenu();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (window.innerWidth <= 1200) closeMenu();
  }, []);

  return (
    <div className={`navbar ${navActive ? "active" : ""}`}>
      <NavLink className={`navbar__ham ${navActive ? "active" : ""}`} onClick={toggleMenu}>
        <span className="navbar__ham__line"></span>
        <span className="navbar__ham__line"></span>
        <span className="navbar__ham__line"></span>
      </NavLink>
      <div className={`navbar__items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="Hero"
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
              to="PortFolio"
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
              to="PortFolio"
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
              to="AboutMe"
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
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </div>
  );
};

export default Navbar;

import React from "react";
import LOGO from "../Assets/logo.png";
import "./MobileNav.css";
import { Link } from "react-scroll";
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src={LOGO} alt="" />
          <ul>
            <li className="menu-item">
              <Link
                to="Home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-10}
              >
                Home
              </Link>
            </li>

            <li className="menu-item">
              <Link
                to="Skills"
                smooth={true}
                duration={500}
                spy={true}
                offset={-10}
              >
                Skills
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                spy={true}
                offset={-10}
              >
                Projects
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                spy={true}
                offset={-10}
              >
                Contact Me
              </Link>
            </li>
            <li className="Resume-item">
              <a href="https://drive.google.com/file/d/1fQuakkDXEkh2ykOfUY6co3sThnkH53Bt/view?usp=sharing">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

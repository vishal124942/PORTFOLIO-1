import React, { useState } from "react";
import LOGO from "../Assets/logo.png";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo w-52 h-auto" src={LOGO} alt="" />
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
          <button className="menu-btn" onClick={toggleMenu}>
            <span className={"material-icons"} style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;

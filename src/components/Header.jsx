import React, { useState } from "react";
import LOGO from "../Assets/logo.png";
import MobileNav from "./MobileNav";
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
            <li className="menu-item">Home</li>
            <li className="menu-item">About</li>
            <li className="menu-item">Skills</li>
            <li className="menu-item">Projects</li>
            <li className="menu-item">Contact Me</li>
            <button className="contact-btn">Hire </button>
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

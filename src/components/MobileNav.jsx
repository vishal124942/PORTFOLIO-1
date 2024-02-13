import React from "react";
import LOGO from "../Assets/logo.png";
import "./MobileNav.css";
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
            <li className="menu-item">Home</li>
            <li className="menu-item">About</li>
            <li className="menu-item">Skills</li>
            <li className="menu-item">Projects</li>
            <li className="menu-item">Contact Me</li>
            <button className="contact-btn">Hire </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;

import React from "react";
import "./Footer.css";
import COPYRIGHT from "../../Assets/copyright.png";
const Footer = () => {
  return (
    <div className="footer">
      <h1>Developed By Vishal Verma</h1>
      <div className="img-container">
        <img src={COPYRIGHT} alt="" />
        <h1>Copyrights 2024</h1>
      </div>
    </div>
  );
};

export default Footer;

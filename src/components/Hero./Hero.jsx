import React from "react";
import "./Hero.css";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import Avatar from "../../Assets/avatar.svg";
import {} from "react-icons/fa";
const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspires</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>
      <div className="hero-img">
        <div className="icon-img">
          <div className="tech-icon">
            <FaReact className="react-icon" />
          </div>
          <img src={Avatar} alt="" />
        </div>
        <div className="all-icons">
          <div className="tech-icon">
            <FaHtml5 className="html-icon" />
          </div>
          <div className="tech-icon">
            <FaCss3 className="css-icon" />
          </div>
          <div className="tech-icon">
            <FaJs className="css-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

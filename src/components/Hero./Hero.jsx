import React from "react";
import "./Hero.css";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import Avatar from "../../Assets/avatar.svg";
import {} from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section id="Home" className="hero-container">
      <div className="hero-content">
        <h1>Hello I am </h1>
        <h2>Vishal Verma</h2>
        <p>
          And i am a
          <span>
            <TypewriterComponent
              options={{
                strings: ["Frontend Developer "],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: "_",
                deleteSpeed: 100,
                pauseFor: 1000,
              }}
            />
          </span>
        </p>
      </div>
      <div className="hero-img">
        <div className="img-icon">
          <img src={Avatar} alt="" />

          <div className="all-icons">
            <div className="tech-icon">
              <FaReact className="react-icon" />
            </div>
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
      </div>
    </section>
  );
};

export default Hero;

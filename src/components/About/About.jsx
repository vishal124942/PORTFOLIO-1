import React from "react";
import "./About.css";
import PERSON from "../../Assets/person.jpg";
const About = () => {
  return (
    <section className="about-container">
      <h2 className="about-heading">About Me</h2>
      <div className="img-content">
        <div className="img">
          <img src={PERSON} alt="" />
        </div>
        <p className="about-info">
          I am Vishal Verma , a 3rd year Undergrad Student at Delhi Technologial
          University with a passion for creating user-friendly and interactive
          websites. I am a quick learner and always eager to learn new
          technologies. I am proficient in HTML, CSS, JavaScript, and React. I
          have experience working with Node.js, Express, and MongoDB. I am
          always looking for opportunities to learn and grow as a developer.
        </p>
      </div>
    </section>
  );
};

export default About;

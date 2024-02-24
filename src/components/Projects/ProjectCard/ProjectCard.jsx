import React from "react";
import "./ProjectCard.css";
import YOUTUBE from "../../../Assets/Youtube.png";
import NETFLIX from "../../../Assets/Netflix.png";
import SWIGGY from "../../../Assets/Swiggy.png";
import { FaArrowRight } from "react-icons/fa";
const ProjectCard = ({ details }) => {
  const getImgUrl = (title) => {
    switch (title) {
      case "Swiggy Clone":
        return SWIGGY;
      case "Youtube Clone":
        return YOUTUBE;
      case "Netflix Clone":
        return NETFLIX;
      default:
        return null;
    }
  };
  return (
    <div className="project-card">
      <h6>{details.title}</h6>
      <div className="project-card-img">
        <img src={getImgUrl(details.title)} alt="" />
        <ul>
          {details.description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <a href={details?.Link} className="arrow">
        Check Out <FaArrowRight />
      </a>
    </div>
  );
};

export default ProjectCard;

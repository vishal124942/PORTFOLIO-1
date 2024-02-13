import React from "react";
import "./SkillCard.css";
import Frontend from "../../../Assets/web-developer.png";
import Backend from "../../../Assets/backend.png";
import Tools from "../../../Assets/utilities.png";
import softSkills from "../../../Assets/negotiation.png";

const SkillCard = ({ title, isActive, onClick }) => {
  const getIconUrl = (title) => {
    switch (title) {
      case "Frontend":
        return Frontend;
      case "Backend":
        return Backend;
      case "Tools":
        return Tools;
      case "Soft Skills":
        return softSkills;
      default:
        return null;
    }
  };
  return (
    <div
      onClick={() => onClick()}
      className={`skills-card ${isActive ? "active" : ""}`}
    >
      <div className="skill-icon">
        <img src={getIconUrl(title)} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default SkillCard;

import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);
  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };
  return (
    <div>
      <section id="Skills"className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((item) => (
              <SkillCard
                key={item.title}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => handleSelectSkill(item)}
              />
            ))}
          </div>
          <div className="skills-info">
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

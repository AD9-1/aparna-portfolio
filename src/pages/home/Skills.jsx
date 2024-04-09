import React from "react";
import "./Skills.scss";
import skill_portfolio from "../../data/skills";
const Skills = () => {
  return (
    <div className="skill">
      <div className="skill-heading">
        <h2 >My Skills</h2>
      </div>
      <div className="skill-container">
        {skill_portfolio.Skills.map((item, index) => {
          return (
            <div key={index} className="skill-container-card">
              <div className="skill-container-card-image">
                <img src={item.src} />
              </div>
              <div className="skill-container-card-content">
                <h3 className="skill-title">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

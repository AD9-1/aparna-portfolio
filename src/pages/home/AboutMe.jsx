import React from "react";
import aparna from "../../aparna_image/Dhara.JPG";
import "./AboutMe.scss";
const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src={aparna} />
      </div>
      <div className="about-me">
        <h2 className="h2class"> About Me</h2>
        <h3 className="h3class">
          Dynamic and enthusiastic software developer with internship and
          personal project exposure, adept at utilizing frontend technologies
          such as HTML, CSS, React, JavaScript, and JavaScript DOM, coupled with
          backend proficiency in ExpressJS (Node). Bringing over 5 years of
          support experience with Java, Spring, and IAM-based applications,
          demonstrating a strong foundation for entry-level roles. Known for
          fast learning and adaptable nature, poised to excel in technical
          analyst or entry-level full-stack developer positions.
        </h3>
      </div>
    </div>
  );
};

export default AboutMe;

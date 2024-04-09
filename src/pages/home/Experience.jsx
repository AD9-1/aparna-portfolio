import React from "react";
import "./Experience.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "react-vertical-timeline-component/style.min.css";
const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-title">
        <h2>My Experience</h2>
      </div>
      <VerticalTimeline lineColor="#7ea1e2" className="experience-container">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Nov 2023 - Feb 2024"
          iconStyle={{ background: "var(--github)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h4>Web Development Diploma,Brainstation </h4>
          <p className="text-lg">Vancouver,Canada</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Dec 2016 - May 2022"
          iconStyle={{ background: "var(--darkblue)", color: "white" }}
          icon={<WorkIcon />}
        >
          <h4>Software Engineer,Wipro </h4>
          <p className="text-lg">Kolkata,India</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Jul 2014 - Jul 2016"
          iconStyle={{ background: "var(--github)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h4>M.tech in Information Technology</h4>
          <p className="text-lg">
            Indian Institute of Engineering Science and Engineering{" "}
          </p>
          <h5>WestBengal,India</h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="Jun 2010 - Jun 2014"
          iconStyle={{ background: "var(--github)", color: "white" }}
          icon={<SchoolIcon />}
        >
          <h4>B.Tech in Computer Science and Engineering</h4>
          <p className="text-lg">WestBengal University of Technology</p>
          <h5 >Kolkata,India</h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;

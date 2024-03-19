import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experienceData = [
    {
      company: "UnStop",
      position: "Campus Representative",
      duration: "Sept 2023 - Present",
      employmentType: "Part-Time",
      description: [
        "Responsible for working with company for various projects, connecting different opportunities with college students about the company ",
        "Participating in exclusive Unstop ambassador events and workshop.",
      ],
      techStack: [
        "Software Development",
        "Leadership",
        "Managment",
        "Communication",
      ],
    },
    
    {
      company: "TIS",
      position: "Summer Intern",
      duration: "June 2023 - August 2023",
      employmentType: "Full-Time",
      description: [
        "Mainted Company's Website on Wordpress and helped them migrate it to MERN framework",
        "Assited younger students in there software projects and learning different coding languages and skills",
      ],
      techStack: [
        "React.js",
        "WordPress",
        "Python",
        "C++",
        "Robotics",
        "Machine Learning",
      ],
    },
    {
      company: "R-Factor",
      position: "Student Mentor",
      duration: "Nov 2022 - March 2023",
      employmentType: "Part-Time",
      description: [
        "As a student mentor guided school student Team 6024 which participate in the international level competition the FIRST ROBOTICS COMPETITION (FRC)  ",
        "Was responsible to look into the vision department of the robot and the strategy planning for the competition  ",
        "Conducted many outreaches in various tech events , schools to spread awareness about Robotics and FIRST as a community among the students and their parents . ",
      ],
      techStack: [
        "Python",
        "Java",
        "Robotics",
        "Machine Learning",
        "Raspberry Pi",
      ],
    },
    {
      company: "KJSCE Robocon",
      position: "Team Member",
      duration: "Oct 2021 - June 2023",
      employmentType: "Full-Time",
      description: [
        "Looked into differnt aspects and algorithms of Image processing and Machine Learning to make the Robot autonomous.",
        "Responsible for making robot simulations on various mechanisms on Matlab using Simulink and Simscape",
        "Built a custom yolov5 model for pole detection and deployed it on Jetson with robust algorithm for the Robot to target the pole.",
        "Achieved 1st place in the Mathworks Modeling award at DD Robocon 2023,Natinal Level at IIT Delhi",
        "Secured All India Rank 6 Overall in the DD Robocon 2022 Competiton.",
      ],
      techStack: [
        "Image processing",
        "Machine Learning",
        "Python",

        "Linux",
        "Matlab",
        "LeaderShip",
        "Embedded C",
      ],
    },
  ];

  return (
    <div className="experience-container" id="work">
      <div className="work-head">
        <h1>Work Experience</h1>
      </div>
      <div className="company-list">
        {experienceData.map((experience, index) => (
          <div
            key={index}
            className={`company-N ${
              index === selectedCompany ? "selected" : ""
            }`}
            onClick={() => setSelectedCompany(index)}
          >
            {experience.company}
          </div>
        ))}
      </div>
      <div className="experience-list">
        <div className="experience-item">
          <div className="left-part">
            <p id="position-name">
              {experienceData[selectedCompany].position} -{" "}
              <span className="company-name">
                {experienceData[selectedCompany].company}
              </span>
            </p>
            <p id="duration">{experienceData[selectedCompany].duration}</p>
            <p id="typeemploy">
              {experienceData[selectedCompany].employmentType}
            </p>
            <ul>
              {experienceData[selectedCompany].description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="right-part">
            <p>Skills</p>
            <div className="tech-stack">
              {experienceData[selectedCompany].techStack.map((stack, idx) => (
                <span key={idx}>{stack}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

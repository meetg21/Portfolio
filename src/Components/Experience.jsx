import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  const experienceData = [
    {
      company: "Company A",
      position: "Software Engineer",
      duration: "Jan 2020 - Dec 2021",
      employmentType: "Full-time",
      description: [
        "Developed and maintained web applications using React.js.Developed and maintained web applications using React.js.",
        "Collaborated with cross-functional teams to deliver projects on time.",
        "Implemented new features and optimized performance of existing systems.",
      ],
      techStack: ["React.js", "Node.js", "MongoDB"],
    },
    {
      company: "Company B",
      position: "Frontend Developer",
      duration: "May 2018 - Aug 2019",
      employmentType: "Part-time",
      description: [
        "Designed and implemented user interfaces for client projects.",
        "Worked closely with designers to ensure pixel-perfect implementation.",
        "Utilized CSS preprocessors like Sass to streamline styling process.",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Sass"],
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

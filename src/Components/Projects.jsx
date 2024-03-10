import React, { useState } from "react";
import "./Projects.css";
import demoproj from "../assets/demoproj.png";
import githubproj from "../assets/githubproj.png";
import projectImage from "../assets/project1.png";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: "Vidhik",
      techStack: ["Tech Stack 1", "Tech Stack 2"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deserunt itaque cumque, libero, magni repudiandae quo sequi, rem explicabo minima necessitatibus. Libero cupiditate, et velit ipsa necessitatibus dolor aliquid perferendis!",
      image: projectImage,
      demoLink:
        "https://www.figma.com/file/c6VssdAiDDiBPsNdtVPKdB/SIH23?type=design&node-id=0-1&mode=design&t=kcomF8yvAlMy322F-0",
      githubLink: "github-link",
    },
    {
      name: "Healthify",
      techStack: ["Tech Stack 1", "Tech Stack 2"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deserunt itaque cumque, libero, magni repudiandae quo sequi, rem explicabo minima necessitatibus. Libero cupiditate, et velit ipsa necessitatibus dolor aliquid perferendis!",
      image: projectImage,
      demoLink: "https://devfolio.co/hackathons",
      githubLink: "github-link",
    },
    {
      name: "3",
      techStack: ["Tech Stack 1", "Tech Stack 2"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deserunt itaque cumque, libero, magni repudiandae quo sequi, rem explicabo minima necessitatibus. Libero cupiditate, et velit ipsa necessitatibus dolor aliquid perferendis!",
      image: projectImage,
      demoLink:
        "https://www.figma.com/file/c6VssdAiDDiBPsNdtVPKdB/SIH23?type=design&node-id=0-1&mode=design&t=kcomF8yvAlMy322F-0",
      githubLink: "github-link",
    },
    {
      name: "4",
      techStack: ["Tech Stack 1", "Tech Stack 2"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deserunt itaque cumque, libero, magni repudiandae quo sequi, rem explicabo minima necessitatibus. Libero cupiditate, et velit ipsa necessitatibus dolor aliquid perferendis!",
      image: projectImage,
      demoLink:
        "https://www.figma.com/file/c6VssdAiDDiBPsNdtVPKdB/SIH23?type=design&node-id=0-1&mode=design&t=kcomF8yvAlMy322F-0",
      githubLink: "github-link",
    },
    {
      name: "5",
      techStack: ["Tech Stack 1", "Tech Stack 2"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis deserunt itaque cumque, libero, magni repudiandae quo sequi, rem explicabo minima necessitatibus. Libero cupiditate, et velit ipsa necessitatibus dolor aliquid perferendis!",
      image: projectImage,
      demoLink:
        "https://www.figma.com/file/c6VssdAiDDiBPsNdtVPKdB/SIH23?type=design&node-id=0-1&mode=design&t=kcomF8yvAlMy322F-0",
      githubLink: "github-link",
    },
  ];
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="projects">
      <div className="proj-head">
        <h1>Projects</h1>
      </div>
      <div className="carousel">
        <div className="project">
          <div className="project-details">
            <h2 className="project-name">{projects[currentIndex].name}</h2>
            <div className="tech-stack">
              {projects[currentIndex].techStack.map((tech, index) => (
                <div key={index} className="tech-stack-item">
                  {tech}
                </div>
              ))}
            </div>
            <div className="proj-desc">
              <p>{projects[currentIndex].description}</p>
            </div>
            <div className="buttons">
              <div className="demo">
                <a href={projects[currentIndex].demoLink}>
                  <img src={demoproj} alt="Demo Proj" />
                </a>
              </div>
              <div className="git">
                <a href="github-link">
                  <img src={githubproj} alt="Github Proj" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-image">
            <img src={projects[currentIndex].image} alt="Project" />
          </div>
        </div>
      </div>
      <div className="dash-lines">
        {projects.map((_, index) => (
          <div
            key={index}
            className={
              index === currentIndex ? "dash-line active" : "dash-line"
            }
          ></div>
        ))}
      </div>
      <div className="controls">
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;

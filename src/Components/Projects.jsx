import React from "react";
import "./Projects.css";
import demoproj from "../assets/demoproj.png";
import githubproj from "../assets/githubproj.png";
import projectImage from "../assets/project1.png"; // Replace with your project image

const Project = () => {
  return (
    <>
      <div id="projects" className="proj-head">
        <h1>Projectsss</h1>
      </div>
      <div  className="project">
        <div className="project-details">
          <h2 className="project-name">Vidhik</h2>
          <div className="tech-stack">
            <div className="tech-stack-item">Tech Stack 1</div>
            <div className="tech-stack-item">Tech Stack 2</div>
            <div className="tech-stack-item">Tech Stack 1</div>
            <div className="tech-stack-item">Tech Stack 2</div>
            <div className="tech-stack-item">Tech Stack 1</div>
            <div className="tech-stack-item">Tech Stack 2</div>
          </div>
          <div className="proj-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              deserunt itaque cumque, libero, magni repudiandae quo sequi, rem
              explicabo minima necessitatibus. Libero cupiditate, et velit ipsa
              necessitatibus dolor aliquid perferendis!
            </p>
          </div>
          <div className="buttons">
          
            <div className="demo">
              <img src={demoproj} alt="Demo Proj" />
            </div>
            <div className="git">
              <img src={githubproj} alt="Github Proj" />
            </div>
          </div>
        </div>
        <div className="project-image">
          <img src={projectImage} alt="Project" />
        </div>
      </div>
    </>
  );
};

export default Project;

import React, { useState } from "react";
import "./Projects.css";
import demoproj from "../assets/demoproj.png";
import githubproj from "../assets/githubproj.png";
import Vidhik from "../assets/Vidhik.png";
import Foodstagram from "../assets/Foodstagram.png";
import FastSend from "../assets/FastSend.png";
import PoleDetection from "../assets/PoleDetection.png";
import Podkashvani from "../assets/Podkashvani.png";
import Prayaas from "../assets/Prayaas.png";
import Healthify from "../assets/Healthify.png";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      name: "Podkashvani",
      techStack: [
        "React Native",
        "Node.js",
        "Amazon Polly",
        "Firebase",
        "OpenAI",
        "Flask",
      ],
      description:
        "An innovative AI-powered learning solution designed to revolutionize the educational landscape , converts dense text from PDFs, documents, articles, and reports into engaging audio podcasts, enhancing focus and retention for learners.Users also gain access to concise notes and a vast library of public podcasts, covering a wide range of educational topics, with instant assistance available through personalized chatbot",
      image: Podkashvani,
      demoLink:
        "https://www.canva.com/design/DAF_uftzB5Y/OXqHvNV4Wu8P7rLPILUR_Q/view?utm_content=DAF_uftzB5Y&utm_campaign=designshare&utm_medium=link&utm_source=editor",
      githubLink: "https://github.com/meetg21/Podkashvani.git",
    },
    {
      name: "Healthify",
      techStack: ["React.js", "Node.js", "MongoDB", "OpenAI", "Fast API"],
      description:
        "A Progressive Web Application built to help an individual achieve healthier and more balanced diet plan. Uses Open Source AI to generate tailored nutrition plans for every individual based on their goals and lifestyle, with additional features such as regular diet analyzer, intelligent recipe suggestions , goal tracking and progress monitoring. ",
      image: Healthify,
      demoLink: "https://www.youtube.com/watch?v=m0M-XTkIWiY",
      githubLink: "https://github.com/Parth-Gala/Pixel_Pundits_GenAI",
    },
    {
      name: "Vidhik",
      techStack: ["React.js", "Node.js", "SQL", "Socket.io"],
      description:
        "Vidhik is your one-stop solution for connecting with qualified legal professionals, offering seamless access to a wide range of legal services, with features like weighted rating algorithms, review validation, and recommendation systems, it prioritize quality interactions.It serves as a hub for legal professionals, fostering connections, promoting opportunities, and enhancing networking within the legal community.It streamlines lawyer-client interactions, providing secure virtual consultations, trust-building through client reviews, and transparent, verified lawyer profiles.",
      image: Vidhik,
      demoLink: "https://www.youtube.com/watch?v=xwWfK9nx3Ig",
      githubLink: "https://github.com/Team-Evidently/Vidhik.git",
    },

    {
      name: "Prayaas",
      techStack: ["React.js", "Node.js", "Tensorflow", "Fast API", "MongoDB"],
      description:
        "A Progressive Web App built to uplift the lives of small and marginal farmers in India.It established a farmer community with key components like a micro-credit loan system and contract farming,fostering collective growth. Additional features included a marketplace, plant disease detection, multi-language support, and news updates .This Project was among the Top 10 finalist at a Natinal Level Hackathon 'Hack4Change' hosted by Google and T-Hub ",
      image: Prayaas,
      demoLink: "https://youtu.be/nDpMw6HI5V0",
      githubLink:
        "https://github.com/HackForChange23/36_PixelPundit_Prayaas.git",
    },
    {
      name: "Pole Detection",
      techStack: ["Python", "YoloV5", "Jetson Nano"],
      description:
        "Developed a custom YOLOv5 model for object detection specifically tailored for identifying poles,for the DD Robocon 2023 competition. This model was successfully deployed on a Jetson Nano, enabling our robot to autonomously target the designated pole where the rings needed to be shot.",
      image: PoleDetection,
      demoLink:
        "https://drive.google.com/file/d/1tFgJvfNkf8_Psh-HkCB49JYUVbG-uLTS/view?usp=sharing",
      githubLink: "github-link",
    },
    {
      name: "Foodstagram",
      techStack: ["React.js", "Node.js", "MongoDB"],
      description:
        "A food blogging website with main focus on promoting different food recipes and connecting foodies together on a social like platform.!",
      image: Foodstagram,
      demoLink: "https://foodstagram.netlify.app/",
      githubLink: "https://github.com/Beetroot16/Foodstagram.git",
    },
    {
      name: "FastSend",
      techStack: ["HTML", "CSS", "JS", "PHP"],
      description:
        "A Courier Management Website with a sleek and minimalistic design.A Courier Management Website with a sleek and minimalistic design.Functionality to place orders, track orders, and download records of past orders, ensuring efficient and convenient courier management.",
      image: FastSend,
      demoLink: "https://github.com/meetg21/FastSend.git",
      githubLink: "https://github.com/meetg21/FastSend.git",
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
            <div className="tech-stack-proj">
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
                <a href={projects[currentIndex].demoLink} target="_blank">
                  <img src={demoproj} alt="Demo Proj" />
                </a>
              </div>
              <div className="git">
                <a href={projects[currentIndex].githubLink} target="_blank">
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

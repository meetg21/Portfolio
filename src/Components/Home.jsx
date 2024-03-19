// Home.jsx

import React from "react";
import "./Home.css";
import myPhoto from "../assets/myphoto.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import whatsappIcon from "../assets/whatsapp.png";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="left-section">
        <div className="profile-photo">
          <img src={myPhoto} alt="My Photo" />
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/meetg21/" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/meetg21" target="_blank">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://wa.me/7666272227?text=Connectedthroughportfolio"  target="_blank">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
        </div>
      </div>
      <div className="right-section">
        <div className="greeting">
          <h1>
            Hii I'm <span style={{ color: "#7127BA" }}>Meet Gala</span>
          </h1>
        </div>
        <div className="description">
          <p>
            I am pursuing my Bachelors in Computer Engineering with a Honors in
            Data Sciences from K.J Somaiya College of Engineering, Mumbai.{" "}
            <br></br>Passionate about the intersection of technology and
            innovation, I am particularly drawn to areas like Web and App
            Development, Artificial Intelligence, and Machine Learning with good
            experience in Robotics too.<br></br> I thrive on the challenge of
            expanding my skill set and pushing the boundaries of what I can
            achieve.
          </p>
        </div>
        <div className="resume-button">
        <a href="https://drive.google.com/file/d/1_TsbDzFxh_kGCHe4rf8pSqlKpfuZ5JFu/view?usp=sharing" target="_blank">
          <button>Check out my Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

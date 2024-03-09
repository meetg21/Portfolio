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
          <a href="https://www.linkedin.com/in/meetg21/">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/meetg21">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://wa.me/7666272227?text=Connectedthroughportfolio">
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            sequi voluptatum dolore consequuntur totam nam cum fuga eligendi
            explicabo, ea dignissimos pariatur quod repellendus, sint, dolorem
            deserunt unde provident aliquam! Asperiores quis in quos ut pariatur
            aspernatur provident nisi sunt at. Temporibus mollitia dolore totam
            quia quas iste, optio explicabo quis similique, tempora aliquid
            saepe id possimus sint quibusdam a? Suscipit incidunt maxime
            recusandae dolore facilis, accusantium at quaerat beatae, aliquid
            sit, debitis in delectus nihil quidem eos minima assumenda optio
            autem voluptatum quam animi culpa commodi eveniet? Nulla qui illo
            nisi, rem voluptatum quidem suscipit ipsum ducimus quos minus culpa
            blanditiis dolores optio molestiae deleniti ipsam quam a eaque.
            Architecto libero voluptates quidem similique, earum maiores autem
            velit odit consequatur repellendus reprehenderit soluta eos, illum
            laboriosam fugit ullam sequi ratione magnam vero molestiae deleniti
            in quos optio explicabo? Ducimus!
          </p>
        </div>
        <div className="resume-button">
          <button>Check out my Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import vectorImg from "../images/vector1.gif";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";

import resume from "../images/Resume-lat.pdf.jpg"

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm Amrutha Rokkam</h1>
        <h1>
          And I'm a <span style={{ color: "#AF7AD5" }}>Frontend Developer</span>
        </h1>
        <p>
          Passionate about creating top-notch, interactive, and responsive web
          applications. Specializing in blending innovation and
          user-friendliness.
        </p>
        <div className="icons" >
          <a href="https://github.com/Amrutha-01">
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a href="www.linkedin.com/in/lakshmi-amrutha-rokkam-0b023122a">
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <div className="cv-button">
          <FontAwesomeIcon icon={faCloudArrowDown} />
          <a href={resume} target="_blank" download="Amrutha-Rokkam-Resume">
            Download CV
          </a>
          </div>
        </div>
      </div>
      <div className="vector-cont">
        <img src={vectorImg} />
      </div>
    </div>
  );
}

export default Home;

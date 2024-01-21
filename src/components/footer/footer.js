import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact-part">
        <h2>Contact me</h2>
        <div className="part">
          <FontAwesomeIcon
            icon={faLocationDot}
            size="xl"
            style={{ color: "white" }}
          />
          <p style={{ paddingLeft: "10px" }}>Visakhapatnam, Andhra Pradesh</p>
        </div>
        <div className="part">
          <FontAwesomeIcon
            icon={faPhoneVolume}
            size="xl"
            style={{ color: "white" }}
          />
          <p style={{ paddingLeft: "10px" }}>+91 8639163753</p>
        </div>
        <div className="part">
          <FontAwesomeIcon
            icon={faSquareEnvelope}
            size="xl"
            style={{ color: "white" }}
          />
          <p style={{ paddingLeft: "10px" }}>amrutharokkam573@gmail.com</p>
        </div>
      </div>
      <div className="about-part">
        <h2>About Us</h2>
        <p>
          I am Amrutha Rokkam, a Frontend Developer. Passionate about creating
          visually appealing and user-friendly websites, Clean code and
          responsive design. Dedicated to enhancing the digital experience
          through creative and efficient solutions.
        </p>
        <div>
          <a href="https://github.com/Amrutha-01">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ paddingRight: "30px" }}
            />
          </a>
          <a href="www.linkedin.com/in/lakshmi-amrutha-rokkam-0b023122a">
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

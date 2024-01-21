import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintbrush,
  faCode,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import "./skills.css";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skills-content">
        <div className="left-part">
          <div className="part">
            <div className="point">
              <FontAwesomeIcon
                icon={faPaintbrush}
                style={{ color: "#f7f7f8" }}
                size="xl"
              />
            </div>
            <div className="skill-text">
              <h3>Design and Develop</h3>
              <p>Clean, modern designs optimized for performance</p>
            </div>
          </div>
          <div className="part">
            <div className="point">
              <FontAwesomeIcon
                icon={faCode}
                style={{ color: "#f7f7f8" }}
                size="xl"
              />
            </div>
            <div className="skill-text">
              <h3>Technology</h3>
              <p>
                Combine all latest technologies to get a progressive website
              </p>
            </div>
          </div>
          <div className="part">
            <div className="point">
              <FontAwesomeIcon
                icon={faMobile}
                style={{ color: "#f7f7f8" }}
                size="xl"
              />
            </div>
            <div className="skill-text">
              <h3>Responsive</h3>
              <p>
                A responsive design makes the website accessible to all
                users,regardless of their device
              </p>
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>HTML</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "90%" }}>
                90%
              </div>
              {/* <p style={{width:'29vw'
            ,textAlign:'end',color:'black'}}>90%</p> */}
            </div>
          </div>
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>CSS</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-info" style={{ width: "90%" }}>
                90%
              </div>
            </div>
          </div>
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>JavaScript</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-warning" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>ReactJS</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-info" style={{ width: "85%" }}>
                85%
              </div>
            </div>
          </div>
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>Redux Toolkit</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "60%" }}>
                60%
              </div>
            </div>
          </div>
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>C++</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-danger" style={{ width: "80%" }}>
                80%
              </div>
            </div>
          </div>
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>Python</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-warning" style={{ width: "70%" }}>
                70%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

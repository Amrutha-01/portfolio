import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintbrush,
  faCode,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import "./skills.css";
import skillsIllus from "../images/skills-section.gif"

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="skills-content">
        <div className="left-part">
          <img src={skillsIllus} style={{height:'400px'}}/>
        </div>
        <div className="right-part">
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>HTML</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="99"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "99%",fontWeight:'bolder'}}>
                99%
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
              aria-valuenow="98"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "98%",fontWeight:'bolder'}}>
                98%
              </div>
            </div>
          </div>
          
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>JavaScript</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-info" style={{ width: "95%",fontWeight:'bolder'}}>
                95%
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
              <div className="progress-bar bg-info" style={{ width: "90%",fontWeight:'bolder'}}>
                90%
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
              <div className="progress-bar bg-info" style={{ width: "90%",fontWeight:'bolder'}}>
                90%
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
              <div className="progress-bar bg-warning" style={{ width: "85%",fontWeight:'bolder'}}>
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
              <div className="progress-bar bg-warning" style={{ width: "80%",fontWeight:'bolder'}}>
                80%
              </div>
            </div>
          </div>
          <div className="ind-skill">
            <h6 style={{textAlign:'left',marginLeft:'1%'}}>NodeJS & ExpressJS</h6>
            <div
              className="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-warning" style={{ width: "80%",fontWeight:'bolder'}}>
                80%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

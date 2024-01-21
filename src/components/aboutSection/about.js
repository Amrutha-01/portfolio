import React from "react";
import bgImg from "../images/port-bg.jpg";
import AmmuCrop from "../images/ammu2-crp.jpg";
import "../aboutSection/about.css";
import abtPic from "../images/ammu2.jpg"
export default function About() {
  return (
    <div className="about-main" id="about">
      <h1 >About Me</h1>
      <div className="about">
      <div className="pic">  
      <img src={abtPic} height="450px"/>
      </div>
         <div className="about-content">
         {/* <h1 >About Me</h1> */}
         <div className="cards">
           <div className="card-div">
             <h5>Personal Projects</h5>
             <p>3+ Projects</p>
             <p>Frontend Development</p>
           </div>
           <div className="card-div" style={{ left: "20vw" }}>
             <h5>Education</h5>
             <p>BTech, Bachelor's degree</p>
             <p>in computer science</p>
           </div>
         </div>
         <div className="text">
             <h3>Hey! I'm Amrutha, <span style={{color:'rgb(147, 57, 210)'}}>a Frontend developer </span></h3>
             <p>
             Based in Andhra Pradesh-India , I take joy in crafting user-friendly websites that blend creativity with functionality. Proficient in HTML,CSS,JavaScript 
            and ReactJS and a touch of Redux, I'm passionate about transforming concepts into visually appealing digital experiences.I can work well under pressure and make the best of any situation.I'm a passionate self-motivated individual with good communication skills.
           </p>
        </div>
    </div>
      </div>
    </div>
  );
}

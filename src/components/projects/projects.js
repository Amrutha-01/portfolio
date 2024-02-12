import React from "react";
import moviePic from "../images/moviesApp.png";
import memePic from "../images/memesApp.png"
import nutricheck from "../images/nutricheck.png";

import "./projects.css";

const Projects = () => {
  return (
    <div className="projects" id='projects'>
      <h1>Projects</h1>
      <div className="proj-main">
      <div className="proj-cards-div">
        <div className="card-proj">
          <div className="card" style={{ width: "15rem", height:"26rem" }}>
            <img src={moviePic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">MovieMate</h4>
              <p className="card-text">
              ReactJS and Redux power a movie app using the TMDb API, offering personalized recommendations and customizable watchlists.
              </p>
              <a
                href="https://github.com/Amrutha-01/MovieMate"
                className="btn btn-outline-primary extra"
                target="_blank"
              >
                View on Github
              </a>
            </div>
          </div>
          <div className="card" style={{  width: "15rem", height:"26rem" }}>
            <img src={nutricheck} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">NutriCheck</h4>
              <p className="card-text">
              NutriCheck, a React app that uses Spoonacular API for quick access to calorie and nutrition information for various foods.
              </p>
              <a
                href="https://github.com/Amrutha-01/NutriCheck"
                className="btn btn-outline-primary extra"
                target="_blank"
              >
                View on Github
              </a>
            </div>
          </div>
          <div className="card" style={{  width: "15rem", height:"26rem"}}>
            <img src={memePic} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">Meme Generator</h4>
              <p className="card-text">
               A fun app built with React, enabling users to create and share humorous memes using a user-friendly interface.
              </p>
              <a
                href="https://github.com/Amrutha-01/memeGenerator"
                className="btn btn-outline-primary extra"
                target="_blank"
              >
                View on Github
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;

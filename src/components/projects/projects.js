import React from "react";
import moviePic from "../images/moviesApp.png";
import memePic from "../images/memesApp.png";
import nutricheck from "../images/nutricheck.png";
import projectsInfo from "./projectData";
import "./projects.css";

const Projects = () => {
  console.log(projectsInfo);
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="proj-main">
        <div className="proj-cards-div">
          <div className="card-proj">
            {projectsInfo.map((project) => (
              <div
                className="card"
                style={{ width: "15rem", height: "26rem" }}
                key={project.id}
              >
                <img src={project.imgLink} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4 className="card-title">{project.title}</h4>
                  <p className="card-text">{project.description}</p>
                  <div className="card-links">
                    <a
                      href={project.githubLink}
                      className="btn btn-outline-primary extra"
                      target="_blank"
                    >
                      View on Github
                    </a>
                    {project.deployLink && (
                      <a
                      id="deploy-link"
                        href={project.deployLink}
                        className="btn btn-outline-primary extra"
                        target="_blank"
                      >
                        View project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

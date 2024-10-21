import "./Projects.css";
import Project from "./Project";
import { projectsData } from "../Data/ProjectsData.js";
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects-root">
      <div className="projects-title-div">
        <h1>Projects</h1>
      </div>
      <main className="projects">
        {projectsData.map((project, index) => {
          return <Project key={index} index={index} project={project} />;
        })}
      </main>
      <div className="projects-more">
        <a className="work-link" href="https://github.com/Ron-Ashkenazi">
          more of my work &rarr;
        </a>
      </div>
    </div>
  );
});

export default Projects;

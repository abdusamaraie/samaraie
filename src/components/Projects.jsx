import React from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import { ProjectContext } from "../contexts/ProjectContext";

const Projects = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className="projects">
      <h4 id="myProjects">
        <span>My Projects</span>
      </h4>

      {/* Projects grid */}

      <div className="grid">
        {projects.map((project) => (
          <ProjectCard
            projectName={project.name}
            projectImage={project.image}
            projectLink={project.link}
            key={project.id}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;

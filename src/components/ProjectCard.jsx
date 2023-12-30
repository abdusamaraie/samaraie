import React from "react";

function ProjectCard({ projectImage, projectName, projectLink }) {
  return (
    <div className="project-card">
      <img src={projectImage} alt={projectName} />

      <a className="overlay facebook-watch-overlay" href={projectLink}>
        <h3>{projectName}</h3>
      </a>
    </div>
  );
}

export default ProjectCard;

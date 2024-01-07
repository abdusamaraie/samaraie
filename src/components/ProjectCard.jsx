import React from "react"

function ProjectCard({ projectImage, projectName, projectLink, overlyStyle }) {
  return (
    <div className="project-card">
      <img src={projectImage} alt={projectName} loading="lazy" />

      <a className={`overlay ${overlyStyle}`} href={projectLink}>
        <h3>{projectName}</h3>
      </a>
    </div>
  )
}

export default ProjectCard

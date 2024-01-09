function ProjectCard({
  projectImage,
  projectName,
  projectLink,
  overlyStyle,
}: {
  projectImage: string
  projectName: string
  projectLink: string
  overlyStyle: string
}) {
  return (
    <div className="project-card card">
      <img src={projectImage} alt={projectName} loading="lazy" />

      <a className={`overlay ${overlyStyle}`} href={projectLink}>
        <h3 className={"font-semibold text-3xl"}>{projectName}</h3>
      </a>
    </div>
  )
}

export default ProjectCard

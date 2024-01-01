import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ProjectContext } from "../contexts/ProjectContext"
import "../styles/Project.css"

const Project = () => {
  const params = useParams()
  const projectId = params.projectId
  const { projects } = useContext(ProjectContext)
  const project = projects[projectId - 1]
  return (
    <div>
      <div className="project_hero">
        <h1>{project.name}</h1>
        <p>{project.describtion}</p>
      </div>
      <div className="thegrid gird">
        {/* <!-------------------Overview-------------------> */}
        <div className="flexContainer">
          <div className="flexText">
            <h5 className="blue">Vision</h5>
            <p>
              Our vision is to provide the best peer-to-peer chatting experience
              for the Buffalo students.
            </p>
            <h5 className="blue">Team</h5>
            <p>2 Engineers, 2 Designers, 1 Product Lead</p>
            <h5 className="blue">Role</h5>
            <p>Backend</p>
            <h5 className="blue">Timeline</h5>
            <p>Spring 2018 - Fall 2019</p>
          </div>
          <div className="flexImage-bigger">
            <img
              className="shadow image"
              src={project.image}
              alt={project.name}
            />
          </div>
        </div>
      </div>

      <section className="project_section">
        <h3>{project.paragraph_1_title}</h3>
        <p>{project.paragraph_1_content}</p>
        <h3>{project.paragraph_2_title}</h3>
        <p>{project.paragraph_2_content}</p>
        <h3>{project.paragraph_3_title}</h3>
        <p>{project.paragraph_3_content}</p>
      </section>
    </div>
  )
}

export default Project

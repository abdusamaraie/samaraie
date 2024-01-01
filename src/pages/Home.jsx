import React from "react"
import { Hero, ProjectsGrid } from "../components"

const Title = () => {
  return <h1 className="hero_title">Hi, I’m Abdu! 👋</h1>
}

const Subtitle = () => {
  return (
    <h2 className="h2">
      A software developer based in{" "}
      <span className="lineswipe buffalolineswipe">Buffalo, New York.</span>
      <span>
        <span>
          {" "}
          I am currently crafting user experiences at{" "}
          <span className="lineswipe alcaptain">Alcaptain</span>
        </span>
      </span>
    </h2>
  )
}

const Home = () => {
  return (
    <div>
      <Hero Title={Title} Subtitle={Subtitle} />
      <ProjectsGrid />
    </div>
  )
}

export default Home

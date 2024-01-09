import { Hero, ProjectsGrid } from "../components"
import { motion, useTime, useTransform } from "framer-motion"

const Title = () => {
  return (
    <motion.h1
      initial={{ x: 0, scale: 0 }}
      animate={{ x: [0, 150, -150, 150, 0], scale: 1.5 }}
      exit={{ x: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      layout
      className="hero_title"
    >
      Hi, I’m Abdu!
      <motion.span
        className="inline-block"
        whileHover={{
          rotate: [0, 25, -20, 50, -25, 0], // Rotate the span back and forth
        }}
        transition={{
          duration: 2, // Duration of the animation
          ease: "easeInOut", // Easing function
          loop: Infinity, // Loop the animation indefinitely
        }}
      >
        👋
      </motion.span>
    </motion.h1>
  )
}

const Subtitle = () => {
  return (
    <motion.div
      initial={{ translateX: 1000 }}
      animate={{ translateX: 0 }}
      transition={{ duration: 1.4, ease: "backIn" }}
      exit={{ translateY: 0 }}
      className="mb-12"
    >
      {" "}
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
    </motion.div>
  )
}

const Home = () => {
  return (
    <>
      <Hero Title={Title} Subtitle={Subtitle} />
      <ProjectsGrid />
    </>
  )
}

export default Home

import React from "react"
import "../styles/Hero.css"

import { motion } from "framer-motion"

// main component
import profileImage from "../assets/images/profile.jpg"
const HeroImage = () => {
  return (
    <motion.img
      src={profileImage}
      className="HeroImage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      loading="lazy"
    />
  )
}

function Hero({ Title, Subtitle }) {
  return (
    <div className="Hero">
      <HeroImage />

      <Title />
      <Subtitle />
    </div>
  )
}

export default Hero

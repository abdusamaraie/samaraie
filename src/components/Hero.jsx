import React from "react"
import "../styles/Hero.css"

// main component
import profileImage from "../assets/images/profile.jpg"
const HeroImage = () => {
  return <img src={profileImage} alt="Hero" className="HeroImage" />
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

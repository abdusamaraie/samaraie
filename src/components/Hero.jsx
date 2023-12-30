import React from "react";
import "../styles/Hero.css";

// main component

function Hero({ Title, Subtitle }) {
  return (
    <div className="Hero">
      <Title />
      <Subtitle />
    </div>
  );
}

export default Hero;

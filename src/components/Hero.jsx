import React from "react";
import "../styles/Hero.css";

const Title = () => {
  return <h1>Hi, I’m Abdu! 👋</h1>;
};

const Subtitle = () => {
  return (
    <h2 className="h2">
      A software developer based in{" "}
      <span className="lineswipe facebooklineswipe">Buffalo, New York.</span>
      <span>
        <span>
          {" "}
          I am currently crafting user experiences at{" "}
          <span className="lineswipe alcaptain">Alcaptain</span>
        </span>
      </span>
    </h2>
  );
};

// main component

function Hero() {
  return (
    <div className="Hero">
      <Title />
      <Subtitle />
    </div>
  );
}

export default Hero;

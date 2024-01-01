import React from "react"
import "../styles/About.css"
import abduImage from "../assets/images/abdu.jpeg"

const About = () => {
  return (
    <div className="about-container">
      <h1 className="h1">Hey! I am Abdu 👋</h1>
      <p className="p">
        " A self-taught UI/UX designer with a deep passion for data
        visualization. Professionally, I'm a seasoned Data Analyst, reveling in
        the world of problem-solving, especially if it involves coding.＂
      </p>

      {/* <! -- intro section --> */}
      <section className="intro">
        <div className="intro-grid ">
          <div className="grid-content lightbg ">
            <h3 className="h3">Intro 🙋🏻‍♂️</h3>

            <p>
              In 2019, I earned my degree in Computer Science from UB, setting
              the foundation for my tech journey. Following an internship on the
              backend team at OLE that summer, I embarked on a master's in Data
              Science at Buffalo State University, graduating in December 2023.
              Currently on the lookout for exciting opportunities in the dynamic
              field of data analytics. My career took flight at Lifestorage,
              where I evolved from a technical support analyst to a software
              developer, contributing to the creation of a cutting-edge web ERP
              system.
            </p>
          </div>
          <img className="grid-image" src={abduImage} alt="Abdu Samaraie" />
        </div>
      </section>

      <section className="more">
        <div className="more-container">
          <h3 className="h3">More About Me 🌍</h3>
          <p>
            Beyond the professional realm, I thrive in the creative spaces of
            <span className="figma"> Figma</span>,{" "}
            <strong className="vscode">VS Code</strong>, and Tableau, sculpting
            digital experiences that captivate. When not immersed in pixels and
            code, I'm adventuring on PlayStation with my buddies, chasing a
            soccer ball, sculpting my physique in the gym, or exploring new
            horizons through travel.
          </p>
          <p>
            A true team player, I find joy in challenging myself and embracing
            new opportunities. Let's connect! Feel free to drop me a message to
            initiate a conversation about the exciting intersections of design,
            data, and innovation at{" "}
            <a className="blue link" href="mailto:abdu@samaraie.com">
              <strong className="email">abdu@samaraie.com</strong>
            </a>
          </p>
        </div>
      </section>

      {/* <! -- skills section --> */}
      <section className="skills">
        <h2 className="skills-header">Skills 🛠️</h2>
        <div className="skills-container">
          <div className="skills-list">
            <h3 className="skills-label">Languages</h3>
            <ul className="skills-languages">
              <li className="skills-info">HTML</li>
              <li className="skills-info">CSS</li>
              <li className="skills-info">JavaScript</li>
              <li className="skills-info">SQL</li>
              <li className="skills-info">Python</li>
            </ul>
          </div>

          <div className="skills-list">
            <h3 className="skills-label">Libraries</h3>
            <ul className="skills-frameworks">
              <li>React</li>
              <li>Express</li>
              <li>Node</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
            </ul>
          </div>

          <div className="skills-list">
            <h3 className="skills-label">Tools</h3>
            <ul className="skills-tools">
              <li>Git</li>
              <li>GitHub</li>
              <li>Heroku</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

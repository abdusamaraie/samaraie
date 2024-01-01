import { NavLink } from "react-router-dom"
import "../styles/Header.css"
import darkMode from "../utils/dark-mode.js"

const Logo = () => {
  return (
    <h5 className="abdu-samaraie">
      <a href="/">
        <b>Abdu Samaraie</b>
      </a>
    </h5>
  )
}

const DarkModeBtn = () => {
  return (
    <div className="dark-mode">
      <div className="toggle-container">
        <button
          className="button darkModeBtn"
          id="theme-toggle"
          onClick={darkMode}
        >
          <span>☾</span>
        </button>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="main-nav">
        <NavLink to="/" className="nav-link">
          Work
        </NavLink>
        <NavLink to="about" className="nav-link">
          About
        </NavLink>

        <NavLink to="resume" className="nav-link">
          Resume
        </NavLink>
        <DarkModeBtn />
      </nav>
    </header>
  )
}

export default Header

import { NavLink } from "react-router-dom"
import "../styles/Header.css"

import { ThemeBtn } from "."

const Logo = () => {
  return (
    <h5 className="abdu-samaraie">
      <a href="/">
        <b>Abdu Samaraie</b>
      </a>
    </h5>
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
        {/* <DarkModeBtn /> */}
        <ThemeBtn />
      </nav>
    </header>
  )
}

export default Header

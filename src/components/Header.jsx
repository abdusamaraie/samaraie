import { NavLink } from "react-router-dom"
import "../styles/Header.css"
import { useTheme } from "../contexts/"
import { ThemeBtn } from "../components"

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
  const { toggleTheme } = useTheme()
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
        <ThemeBtn onToggle={toggleTheme} />
      </nav>
    </header>
  )
}

export default Header

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"
import { useEffect, useState } from "react"
import { ThemeProvider } from "../contexts"

const RootLayout = () => {
  // localstorage theme mode
  const localThemeInitValue: Storage | string =
    localStorage.getItem("theme") || "light"

  //Main state of the theme in the app
  const [themeMode, setTheme] = useState(localThemeInitValue)

  useEffect(() => {
    if (themeMode === "dark") {
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [themeMode])

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"))
  }

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  )
}

export default RootLayout

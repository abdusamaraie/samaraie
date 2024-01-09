import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components"
import { useEffect, useState } from "react"
import { ThemeProvider, useTheme } from "../contexts"

const RootLayout = () => {
  //Main state of the theme in the app
  const [theme, setTheme] = useState("light")

  //state of the theme in the local storage
  const curTheme = localStorage.getItem("theme")
  // on mount check if theme is set in local storage and set it
  curTheme && document.body.classList.add(curTheme)

  // handle the toggle for the theme and set it in local storage
  const handleTheme = () => {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark")
    } else {
      localStorage.removeItem("theme")
      document.body.removeAttribute("class")
    }
  }

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)

    handleTheme()
  }, [theme])

  // useEffect(() => {
  //   console.log(theme)
  // })

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default RootLayout

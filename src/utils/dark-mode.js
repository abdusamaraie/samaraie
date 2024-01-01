const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle")

  //state of the theme
  const theme = localStorage.getItem("theme")
  // on mount check if theme is set in local storage and set it
  theme && document.body.classList.add(theme)

  // handle the toggle
  const handleTheme = () => {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark-mode")
    } else {
      localStorage.removeItem("theme")
      document.body.removeAttribute("class")
    }
  }

  // Event listener
  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", handleTheme)
  })
}

export default darkMode

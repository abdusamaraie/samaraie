import { createContext, useContext } from "react"

export const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
})

export default function useTheme() {
  return useContext(ThemeContext)
}

export const ThemeProvider = ThemeContext.Provider

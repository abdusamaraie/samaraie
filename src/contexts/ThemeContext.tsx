import { createContext, useContext } from "react"

export type ThemeContextType = {
  theme: string
  toggleTheme: () => void
}

const themeContextDefaultValues: ThemeContextType = {
  theme: "",
  toggleTheme: () => {},
}
export const ThemeContext = createContext(themeContextDefaultValues)

export default function useTheme() {
  return useContext(ThemeContext)
}

export const ThemeProvider: React.Provider<ThemeContextType> =
  ThemeContext.Provider

import { createContext, useContext } from "react"

export type ThemeContextType = {
  themeMode: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)
export const ThemeProvider: React.Provider<ThemeContextType> =
  ThemeContext.Provider

export default function useTheme() {
  return useContext<ThemeContextType>(ThemeContext)
}

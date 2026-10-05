import { createContext, useContext } from 'react'

export type Theme = 'light' | 'dark'

export const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | null>(null)

/** Read the current theme and a function to switch between light and dark. */
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>')
  return ctx
}

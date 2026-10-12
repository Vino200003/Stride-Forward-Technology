import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './theme'

const STORAGE_KEY = 'theme'

/** Dark mode is the primary default. A visitor's explicit choice is remembered in localStorage. */
function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved === 'light' ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#070b14' : '#022A68')
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* storage unavailable (e.g. private mode) - the theme still works for this visit */
    }
  }, [theme])

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

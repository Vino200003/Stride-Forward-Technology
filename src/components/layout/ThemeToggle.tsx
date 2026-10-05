import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/theme'

/** Light / dark mode switch. */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-fg transition-colors hover:border-accent hover:text-accent-strong"
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  )
}

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
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-fg transition-colors duration-200 hover:border-accent/50 hover:text-accent-strong sm:h-10 sm:w-10"
    >
      {isDark ? (
        <Sun className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
      ) : (
        <Moon className="h-4.5 w-4.5" strokeWidth={1.75} aria-hidden="true" />
      )}
    </button>
  )
}

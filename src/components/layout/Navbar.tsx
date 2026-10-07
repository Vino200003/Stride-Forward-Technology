import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { ctaLabel, navLinks } from '../../data/content'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

/** Sticky top navigation: frosted glass that shrinks on scroll, with a mobile menu. */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Switch to the compact, frosted style once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu when the route changes
  useEffect(() => setOpen(false), [pathname])

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition-colors duration-200',
      isActive ? 'text-fg' : 'text-muted hover:text-fg',
    )

  return (
    <header
      className={cn(
        'sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-300',
        scrolled || open
          ? 'glass border-border/70 shadow-[0_8px_32px_-16px_hsl(var(--shadow-color)/0.2)]'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        className={cn(
          'container-page flex items-center justify-between gap-4 transition-[height] duration-300 ease-out',
          scrolled ? 'h-16' : 'h-16 sm:h-20',
        )}
        aria-label="Main"
      >
        <Logo />

        {/* Desktop links, with a sliding pill under the active one */}
        <ul className="hidden items-center gap-0.5 rounded-full border border-border/70 bg-surface/60 p-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-surface shadow-soft ring-1 ring-border"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Wrapper controls visibility so the button's own inline-flex can't override `hidden` */}
          <div className="hidden sm:block">
            <ButtonLink to="/contact" size="sm">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-fg transition-colors hover:border-accent/50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border lg:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      cn(
                        'flex min-h-12 items-center rounded-xl px-4 text-base font-medium transition-colors',
                        isActive ? 'bg-accent-soft text-accent-strong' : 'text-fg hover:bg-surface-muted',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <ButtonLink to="/contact" className="w-full">
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

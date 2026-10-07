import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUp, MessageCircle } from 'lucide-react'
import { ctaLabel } from '../../data/content'
import { whatsappLink } from '../../lib/whatsapp'
import { cn } from '../../lib/cn'
import { ButtonLink } from '../ui/Button'

/**
 * Floating WhatsApp chat button + scroll-to-top button (bottom-right corner),
 * plus a sticky "Get a Free Quote" bar on phones once the visitor scrolls past the hero.
 */
export default function FloatingButtons() {
  const [scrollY, setScrollY] = useState(0)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const showTop = scrollY > 600
  const showQuoteBar = scrollY > 480 && pathname !== '/contact'

  return (
    <aside aria-label="Quick contact">
      <div
        className={cn(
          'fixed right-4 z-30 flex flex-col items-end gap-3 transition-[bottom] duration-300 sm:right-6 sm:bottom-6',
          showQuoteBar ? 'bottom-24' : 'bottom-4',
        )}
      >
        <AnimatePresence>
          {showTop && (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0 })}
              aria-label="Scroll to top"
              className="glass inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-fg shadow-lift transition-colors hover:border-accent/50 hover:text-accent-strong"
            >
              <ArrowUp className="h-5 w-5" aria-hidden="true" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* PLACEHOLDER number - set `whatsappNumber` in src/data/content.ts */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp (opens in a new tab)"
          className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-lift transition-transform duration-200 hover:scale-105 sm:h-14 sm:w-14"
        >
          <MessageCircle className="relative h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
          <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg bg-fg px-3 py-1.5 text-xs font-medium whitespace-nowrap text-bg opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile-only sticky quote bar */}
      <AnimatePresence>
        {showQuoteBar && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="glass fixed inset-x-0 bottom-0 z-30 border-t border-border/70 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden"
          >
            <ButtonLink to="/contact" className="w-full">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  )
}

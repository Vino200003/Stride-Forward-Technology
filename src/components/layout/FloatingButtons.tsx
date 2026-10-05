import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { whatsappLink } from '../../lib/whatsapp'

/** Floating WhatsApp chat button + scroll-to-top button (bottom-right corner). */
export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-4 z-30 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0 })}
            aria-label="Scroll to top"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-fg shadow-lift transition-colors hover:border-accent hover:text-accent-strong"
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
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] text-white shadow-lift transition-transform hover:scale-105"
      >
        <MessageCircle className="relative h-7 w-7" aria-hidden="true" />
        <span className="pointer-events-none absolute right-full mr-3 hidden rounded-lg bg-fg px-3 py-1.5 text-xs font-medium whitespace-nowrap text-bg opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}

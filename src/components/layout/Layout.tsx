import { Suspense, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'

/** Scroll to the element matching the URL hash. Retries briefly while a lazy page loads. */
function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.slice(1))
  let tries = 0
  const attempt = () => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else if (tries++ < 40) window.setTimeout(attempt, 50)
  }
  attempt()
}

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading page">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-accent-soft border-t-accent" />
    </div>
  )
}

/** Shared page shell: navbar, animated page content, footer, and floating buttons. */
export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()

  // Same-page hash links (e.g. /services -> /services#web-development)
  useEffect(() => {
    if (location.hash) scrollToHash(location.hash)
  }, [location.hash, location.key])

  // On a new page: move to the top once the old page has faded out.
  const handleExitComplete = () => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-lg bg-primary px-4 py-2 font-semibold text-primary-fg focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to main content
      </a>
      <Navbar />
      <AnimatePresence mode="wait" initial={false} onExitComplete={handleExitComplete}>
        <motion.main
          key={location.pathname}
          id="main-content"
          tabIndex={-1}
          className="flex-1 outline-none"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <Suspense fallback={<PageLoader />}>{outlet}</Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

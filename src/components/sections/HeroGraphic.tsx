import { motion } from 'framer-motion'
import { BarChart3, Bell, CheckCircle2 } from 'lucide-react'

/**
 * Abstract "software" illustration for the hero, built from code (no image files):
 * a browser window with a dashboard, a floating phone, and small notification chips,
 * gently floating over brand-colored gradient blobs. Purely decorative.
 */
const float = (delay = 0, distance = 10) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 6, delay, repeat: Infinity, ease: 'easeInOut' as const },
})

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-xl" aria-hidden="true">
      {/* Glowing gradient blobs */}
      <motion.div
        className="absolute top-[5%] right-[5%] h-2/3 w-2/3 rounded-full bg-sky/40 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[5%] h-1/2 w-1/2 rounded-full bg-navy/40 blur-3xl dark:bg-[#0b4a9c]/60"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Browser window with dashboard */}
      <motion.div
        {...float(0, 8)}
        className="absolute top-[8%] left-[2%] w-[82%] overflow-hidden rounded-2xl border border-border bg-surface shadow-lift"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffc145]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2ed47a]" />
          <span className="ml-3 h-3 flex-1 rounded-full bg-border" />
        </div>
        <div className="grid grid-cols-3 gap-3 p-4 sm:p-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-xl bg-surface-muted p-3">
              <div className="h-1.5 w-1/2 rounded-full bg-border" />
              <div className={`mt-2 h-3 w-3/4 rounded-full ${i === 1 ? 'bg-sky' : 'bg-navy dark:bg-sky/70'}`} />
            </div>
          ))}
          <div className="col-span-3 flex h-28 items-end gap-2 rounded-xl bg-surface-muted p-3 sm:h-36">
            {[40, 65, 50, 80, 60, 95, 75, 88].map((h, i) => (
              <motion.div
                key={i}
                className={`flex-1 rounded-t-md ${i % 2 ? 'bg-sky' : 'bg-navy dark:bg-sky/60'}`}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.07, ease: 'easeOut' }}
              />
            ))}
          </div>
          <div className="col-span-2 space-y-2">
            <div className="h-2 w-full rounded-full bg-border" />
            <div className="h-2 w-4/5 rounded-full bg-border" />
          </div>
          <div className="h-6 rounded-lg bg-primary" />
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div
        {...float(1.2, 12)}
        className="absolute right-[2%] bottom-[2%] w-[30%] rounded-[1.6rem] border-4 border-[#0b1729] bg-surface p-2 shadow-lift dark:border-[#1b2a47]"
      >
        <div className="mx-auto mb-2 h-1.5 w-1/3 rounded-full bg-[#0b1729] dark:bg-[#1b2a47]" />
        <div className="bg-brand-gradient rounded-xl p-3">
          <div className="h-1.5 w-1/2 rounded-full bg-white/60" />
          <div className="mt-2 h-3 w-3/4 rounded-full bg-white" />
        </div>
        <div className="mt-2 space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg bg-surface-muted p-2">
              <span className={`h-5 w-5 shrink-0 rounded-md ${i === 0 ? 'bg-sky' : 'bg-accent-soft'}`} />
              <span className="h-1.5 flex-1 rounded-full bg-border" />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        {...float(0.6, 10)}
        className="absolute top-[2%] right-[6%] flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-fg shadow-lift"
      >
        <CheckCircle2 className="h-4 w-4 text-[#16a34a]" />
        Deployed
      </motion.div>
      <motion.div
        {...float(2, 10)}
        className="absolute bottom-[14%] left-0 flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-fg shadow-lift"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
          <BarChart3 className="h-3.5 w-3.5" />
        </span>
        +38% bookings
      </motion.div>
      <motion.div
        {...float(1.6, 8)}
        className="absolute top-[45%] right-0 hidden items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-xs font-semibold text-fg shadow-lift sm:flex"
      >
        <Bell className="h-4 w-4 text-accent-strong" />
        New order
      </motion.div>
    </div>
  )
}

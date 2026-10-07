import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Bell, CheckCircle2 } from 'lucide-react'

/**
 * Abstract "software" illustration for the hero, built from code (no image files):
 * a browser window with a dashboard, a floating phone, and small glass notification chips,
 * gently floating over a soft brand glow. Purely decorative.
 */

// Gentle CSS float: runs on the compositor (not the main thread) and stops for reduced motion.
// Only the phase differs per element; a fixed distance keeps the keyframes compositable.
const float = (delay = 0): CSSProperties => ({ animationDelay: `${-delay}s` })

const chip =
  'animate-float absolute flex items-center gap-2 rounded-xl border border-border/80 bg-surface/95 px-3 py-2 text-xs font-semibold text-fg shadow-lift'

const bars = [40, 62, 48, 78, 58, 92, 72, 86]

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-5/4 w-full max-w-xl" aria-hidden="true">
      {/* Soft glow + ring behind the window */}
      <div className="absolute inset-[10%] rounded-full bg-linear-to-tr from-navy-500/25 via-sky/30 to-sky-300/20 blur-3xl dark:from-navy-500/40 dark:via-sky/25" />
      <div className="absolute inset-[4%] rounded-full border border-dashed border-accent/20" />

      {/* Browser window with dashboard */}
      <div
        style={float(0)}
        className="animate-float absolute top-[8%] left-[2%] w-[82%] overflow-hidden rounded-2xl border border-border bg-surface shadow-lift ring-1 ring-black/2 dark:ring-white/5"
      >
        <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted/70 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffc145]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#2ed47a]" />
          <span className="mx-auto h-5 w-1/2 rounded-md border border-border bg-surface" />
        </div>
        <div className="grid grid-cols-3 gap-3 p-4 sm:p-5">
          {['bg-navy-800 dark:bg-sky-300', 'bg-sky', 'bg-navy-500 dark:bg-sky-600'].map((c, i) => (
            <div key={i} className="rounded-xl border border-border/70 bg-surface-muted/60 p-3">
              <div className="h-1.5 w-1/2 rounded-full bg-border" />
              <div className={`mt-2 h-3 w-3/4 rounded-full ${c}`} />
            </div>
          ))}
          <div className="col-span-3 flex h-28 items-end gap-2 rounded-xl border border-border/70 bg-surface-muted/60 p-3 sm:h-36">
            {bars.map((h, i) => (
              // scaleY (not height) so the grow-in animation never triggers layout
              <motion.div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 origin-bottom rounded-t-md bg-linear-to-t ${
                  i % 2 ? 'from-sky-600 to-sky-400' : 'from-navy-800 to-navy-600 dark:from-sky-800 dark:to-sky-600'
                }`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
          <div className="col-span-2 space-y-2">
            <div className="h-2 w-full rounded-full bg-border" />
            <div className="h-2 w-4/5 rounded-full bg-border" />
          </div>
          <div className="h-6 rounded-lg bg-primary" />
        </div>
      </div>

      {/* Phone */}
      <div
        style={float(1.2)}
        className="animate-float absolute right-[2%] bottom-[2%] w-[30%] rounded-[1.6rem] border-4 border-[#0b1729] bg-surface p-2 shadow-lift dark:border-[#232d40]"
      >
        <div className="mx-auto mb-2 h-1.5 w-1/3 rounded-full bg-[#0b1729] dark:bg-[#232d40]" />
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
      </div>

      {/* Floating glass chips */}
      <div style={float(0.6)} className={`${chip} top-[1%] right-[6%]`}>
        <CheckCircle2 className="h-4 w-4 text-[#16a34a] dark:text-[#4ade80]" />
        Deployed
      </div>
      <div style={float(2)} className={`${chip} bottom-[14%] left-0`}>
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
          <BarChart3 className="h-3.5 w-3.5" />
        </span>
        +38% bookings
      </div>
      <div style={float(1.6)} className={`${chip} top-[45%] right-0 hidden sm:flex`}>
        <Bell className="h-4 w-4 text-accent-strong" />
        New order
      </div>
    </div>
  )
}

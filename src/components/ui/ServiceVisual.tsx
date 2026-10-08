import { motion, useReducedMotion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

const BARS = [38, 62, 46, 78, 56, 88]

/**
 * Decorative "holographic" panel for a service: the icon on glass, orbit rings,
 * and floating mock UI cards. Purely visual, hidden from assistive tech.
 */
export default function ServiceVisual({ icon: Icon, index, className }: { icon: LucideIcon; index: number; className?: string }) {
  const reduceMotion = useReducedMotion()
  const spin = (duration: number, reverse = false) =>
    reduceMotion ? {} : { animate: { rotate: reverse ? -360 : 360 }, transition: { duration, repeat: Infinity, ease: 'linear' as const } }

  return (
    <div
      className={cn(
        'bg-brand-gradient relative isolate aspect-4/3 overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-white/10',
        className,
      )}
      aria-hidden="true"
    >
      {/* Line grid + glows */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="animate-drift absolute -top-24 -right-16 -z-10 h-72 w-72 rounded-full bg-sky/45 blur-[90px]" />
      <div className="animate-drift absolute -bottom-28 -left-20 -z-10 h-72 w-72 rounded-full bg-navy-900/80 blur-[90px] [animation-delay:-9s]" />
      <div className="bg-noise absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay" />

      {/* Big watermark number */}
      <span className="absolute bottom-3 left-6 font-display text-7xl font-extrabold text-white/10 tabular-nums sm:text-8xl">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Orbit rings around the icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="absolute aspect-square w-[78%] max-w-[22rem] rounded-full border border-dashed border-white/15" {...spin(60)}>
          <span className="absolute top-1/2 -left-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-sky shadow-[0_0_16px_4px_rgb(1_163_253/0.6)]" />
        </motion.div>
        <motion.div className="absolute aspect-square w-[52%] max-w-[15rem] rounded-full border border-white/20" {...spin(36, true)}>
          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/80" />
        </motion.div>
        <div className="absolute aspect-square w-[30%] max-w-[9rem] rounded-full bg-sky/20 blur-2xl" />

        {/* Icon on glass */}
        <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-white/25 bg-white/10 text-white shadow-[0_20px_40px_-12px_rgb(0_0_0/0.45)] backdrop-blur-md sm:h-24 sm:w-24">
          <Icon className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={1.5} />
        </div>
      </div>

      {/* Floating mock UI: a list card and a chart card */}
      <div className="animate-float absolute top-[10%] left-[7%] w-[34%] max-w-40 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-sky" />
          <span className="h-1.5 w-1/2 rounded-full bg-white/50" />
        </div>
        <div className="mt-3 space-y-1.5">
          <span className="block h-1.5 w-full rounded-full bg-white/25" />
          <span className="block h-1.5 w-4/5 rounded-full bg-white/25" />
          <span className="block h-1.5 w-3/5 rounded-full bg-white/25" />
        </div>
      </div>

      <div className="animate-float absolute right-[7%] bottom-[11%] w-[36%] max-w-44 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md [animation-delay:-3.5s]">
        <span className="block h-1.5 w-1/2 rounded-full bg-white/50" />
        <div className="mt-3 flex h-12 items-end gap-1.5">
          {BARS.map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 origin-bottom rounded-t-sm bg-linear-to-t from-sky/60 to-white/80"
              style={{ height: `${h}%` }}
              initial={reduceMotion ? false : { scaleY: 0.2 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

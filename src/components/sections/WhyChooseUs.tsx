import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { whyChooseUs } from '../../data/content'
import { cn } from '../../lib/cn'
import IconTile from '../ui/IconTile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/* ---- Small decorative visuals, one per bento tile (aria-hidden) ---- */

function SprintVisual() {
  const weeks = [100, 100, 72, 0]
  return (
    <div className="mt-8 grid grid-cols-4 gap-3" aria-hidden="true">
      {weeks.map((w, i) => (
        <div key={i}>
          <div className="h-2 overflow-hidden rounded-full bg-border/70">
            <motion.div
              className="h-full rounded-full bg-linear-to-r from-navy-600 to-sky dark:from-sky-600 dark:to-sky-300"
              initial={{ width: 0 }}
              whileInView={{ width: `${w}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="mt-2 text-xs font-medium text-muted">Week {i + 1}</p>
        </div>
      ))}
    </div>
  )
}

function CodeVisual() {
  const lines = [
    ['text-sky-700 dark:text-sky-300', 'test', "('books a slot')"],
    ['text-navy-500 dark:text-navy-300', '  expect', '(slot).toBeBooked()'],
    ['text-sky-700 dark:text-sky-300', 'test', "('sends reminder')"],
    ['text-navy-500 dark:text-navy-300', '  expect', '(sms).toHaveBeenSent()'],
  ]
  return (
    <div
      className="mt-8 overflow-hidden rounded-xl border border-border bg-surface-muted font-mono text-[0.75rem] leading-6"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 text-[0.6875rem] text-muted">booking.test.ts</span>
      </div>
      <div className="px-4 py-3 whitespace-nowrap">
        {lines.map(([c, a, b], i) => (
          <div key={i}>
            <span className={c}>{a}</span>
            <span className="text-muted">{b}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-border px-4 py-2 text-[0.6875rem] font-semibold text-[#15803d] dark:text-[#4ade80]">
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
        4 passed
      </div>
    </div>
  )
}

function QuoteVisual() {
  return (
    <div className="mt-8 flex items-center justify-between rounded-xl border border-dashed border-border px-4 py-3" aria-hidden="true">
      <span className="text-sm text-muted">Fixed quote</span>
      <span className="font-display text-sm font-bold text-fg">No surprises</span>
    </div>
  )
}

function StatusVisual() {
  return (
    <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-surface-muted px-4 py-3 text-sm" aria-hidden="true">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
      </span>
      <span className="text-fg">All systems running</span>
    </div>
  )
}

// Layout per item (same order as whyChooseUs.items in content.ts)
const tiles: { className: string; visual: ReactNode }[] = [
  { className: 'lg:col-span-4', visual: <SprintVisual /> },
  { className: 'lg:col-span-2 lg:row-span-2', visual: <CodeVisual /> },
  { className: 'lg:col-span-2', visual: <QuoteVisual /> },
  { className: 'lg:col-span-2', visual: <StatusVisual /> },
]

/** Home: 4 reasons to choose the company, as a bento grid. */
export default function WhyChooseUs() {
  return (
    <section className="section-y relative bg-surface-muted" aria-labelledby="why-us">
      <div className="container-page">
        <SectionHeading id="why-us" eyebrow={whyChooseUs.eyebrow} title={whyChooseUs.title} subtitle={whyChooseUs.subtitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {whyChooseUs.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className={cn('h-full', tiles[i]?.className)}>
              <div className="card group flex h-full flex-col p-6 transition-[box-shadow,border-color] duration-300 hover:border-accent/40 hover:shadow-glow sm:p-8">
                <IconTile icon={item.icon} className="group-hover:scale-105" />
                <h3 className="mt-6 text-xl font-bold text-fg">{item.title}</h3>
                <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-muted">{item.description}</p>
                <div className="mt-auto">{tiles[i]?.visual}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { CalendarCheck, Check, FileText, GitCommitHorizontal, MessageCircle } from 'lucide-react'
import { whyChooseUs } from '../../data/content'
import { cn } from '../../lib/cn'
import IconTile from '../ui/IconTile'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as const
const AUTO_ADVANCE_MS = 6000

/* ---- Showcase visuals, one per reason (aria-hidden, decorative) ---- */

function SprintVisual() {
  const weeks = [
    { label: 'Discovery', done: 100 },
    { label: 'Designs', done: 100 },
    { label: 'First build', done: 72 },
    { label: 'Launch', done: 0 },
  ]
  return (
    <div className="space-y-3">
      {weeks.map((w, i) => (
        <div key={w.label} className="flex items-center gap-4">
          <span className="w-14 shrink-0 text-xs font-semibold text-muted">Wk {i + 1}</span>
          <div className="relative h-8 flex-1 overflow-hidden rounded-xl bg-border/50">
            {w.done > 0 ? (
              <motion.div
                className="flex h-full items-center rounded-xl bg-linear-to-r from-navy to-sky px-3 text-xs font-semibold whitespace-nowrap text-white dark:from-sky-600 dark:to-sky"
                initial={{ width: 0 }}
                animate={{ width: `${w.done}%` }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE }}
              >
                {w.done > 40 && w.label}
              </motion.div>
            ) : (
              <span className="absolute inset-y-0 left-3 flex items-center text-xs font-semibold text-muted">
                {w.label}
              </span>
            )}
          </div>
          <span className="w-10 shrink-0 text-right text-xs font-semibold text-fg tabular-nums">{w.done}%</span>
        </div>
      ))}
      <motion.div
        className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm shadow-soft"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7, ease: EASE }}
      >
        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
          <CalendarCheck className="h-3.5 w-3.5" />
        </span>
        <span className="text-fg">Next demo: working build you can click through</span>
        <span className="ml-auto shrink-0 text-xs text-muted">Friday</span>
      </motion.div>
    </div>
  )
}

function CodeVisual() {
  const lines = [
    ['text-sky-700 dark:text-sky-300', 'test', "('books a slot')"],
    ['text-navy dark:text-navy-300', '  expect', '(slot).toBeBooked()'],
    ['text-sky-700 dark:text-sky-300', 'test', "('sends reminder')"],
    ['text-navy dark:text-navy-300', '  expect', '(sms).toHaveBeenSent()'],
  ]
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface font-mono text-[0.8125rem] leading-7 shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-2 text-xs text-muted">booking.test.ts</span>
      </div>
      <div className="overflow-hidden px-5 py-4 whitespace-nowrap">
        {lines.map(([c, a, b], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.12, ease: EASE }}
          >
            <span className={c}>{a}</span>
            <span className="text-muted">{b}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex items-center gap-2 border-t border-border px-5 py-2.5 text-xs font-semibold text-[#15803d] dark:text-[#4ade80]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Check className="h-4 w-4" strokeWidth={3} />
        4 passed · 0 failed
      </motion.div>
    </div>
  )
}

function QuoteVisual() {
  const rows = [
    ['Design & prototype', '$1,200'],
    ['Website build', '$2,800'],
    ['Launch & training', '$400'],
  ]
  return (
    <div className="rounded-xl border border-border bg-surface p-5 shadow-soft">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted uppercase">
        <FileText className="h-4 w-4" />
        Fixed quote
      </div>
      <ul className="mt-4 divide-y divide-dashed divide-border text-sm">
        {rows.map(([label, price], i) => (
          <motion.li
            key={label}
            className="flex justify-between py-2.5"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.1, ease: EASE }}
          >
            <span className="text-muted">{label}</span>
            <span className="font-medium text-fg tabular-nums">{price}</span>
          </motion.li>
        ))}
      </ul>
      <div className="mt-2 flex items-center justify-between border-t-2 border-fg/80 pt-3">
        <span className="font-display font-bold text-fg">Total</span>
        <span className="font-display text-lg font-bold text-fg tabular-nums">$4,400</span>
      </div>
      <motion.p
        className="mt-4 inline-flex rotate-[-3deg] rounded-md border-2 border-[#15803d] px-2.5 py-1 text-xs font-bold tracking-widest text-[#15803d] uppercase dark:border-[#4ade80] dark:text-[#4ade80]"
        initial={{ opacity: 0, scale: 1.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.35, ease: EASE }}
      >
        No hidden fees
      </motion.p>
    </div>
  )
}

function SupportVisual() {
  const events = [
    { icon: MessageCircle, text: 'Can we add online payments?', meta: 'You · Mon' },
    { icon: GitCommitHorizontal, text: 'Stripe checkout shipped', meta: 'Us · Wed' },
    { icon: Check, text: 'Security updates applied', meta: 'Us · Fri' },
  ]
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm shadow-soft">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
        </span>
        <span className="font-medium text-fg">All systems running</span>
        <span className="ml-auto text-xs text-muted tabular-nums">99.9% uptime</span>
      </div>
      {events.map(({ icon: Icon, text, meta }, i) => (
        <motion.div
          key={text}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm shadow-soft"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 + i * 0.12, ease: EASE }}
        >
          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
            <Icon className="h-3.5 w-3.5" />
          </span>
          <span className="truncate text-fg">{text}</span>
          <span className="ml-auto shrink-0 text-xs text-muted">{meta}</span>
        </motion.div>
      ))}
    </div>
  )
}

// Showcase content per item (same order as whyChooseUs.items in content.ts)
const showcases: { stat: string; statLabel: string; visual: ReactNode; points: string[] }[] = [
  {
    stat: '1–2 wks',
    statLabel: 'Sprint length',
    visual: <SprintVisual />,
    points: ['Weekly demos', 'Shared progress board', 'Live in weeks'],
  },
  {
    stat: '100%',
    statLabel: 'Code you own',
    visual: <CodeVisual />,
    points: ['Automated tests', 'Full source handover', 'No lock-in'],
  },
  {
    stat: '$0',
    statLabel: 'Surprise costs',
    visual: <QuoteVisual />,
    points: ['Fixed price', 'Scope agreed up front', 'Pay by milestone'],
  },
  {
    stat: '24h',
    statLabel: 'Typical reply time',
    visual: <SupportVisual />,
    points: ['Monitoring & backups', 'Security updates', 'Direct line to devs'],
  },
]

/** Home: 4 reasons to choose the company, as an interactive feature switcher. */
export default function WhyChooseUs() {
  const items = whyChooseUs.items
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [userPicked, setUserPicked] = useState(false)
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { amount: 0.4 })
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Auto-advance while visible; stops for good once the visitor picks a reason themselves
  const autoPlay = !reduceMotion && !userPicked && !paused && inView
  useEffect(() => {
    if (!autoPlay) return
    const t = setTimeout(() => setActive((a) => (a + 1) % items.length), AUTO_ADVANCE_MS)
    return () => clearTimeout(t)
  }, [autoPlay, active, items.length])

  const select = (i: number) => {
    setActive(i)
    setUserPicked(true)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, number> = {
      ArrowDown: (i + 1) % items.length,
      ArrowRight: (i + 1) % items.length,
      ArrowUp: (i - 1 + items.length) % items.length,
      ArrowLeft: (i - 1 + items.length) % items.length,
      Home: 0,
      End: items.length - 1,
    }
    if (!(e.key in keys)) return
    e.preventDefault()
    select(keys[e.key])
    tabRefs.current[keys[e.key]]?.focus()
  }

  const current = items[active]
  const show = showcases[active]

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface-muted py-16 sm:py-20 lg:py-24" aria-labelledby="why-us">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: heading + selectable reasons */}
          <div className="lg:col-span-5">
            <SectionHeading
              id="why-us"
              align="left"
              eyebrow={whyChooseUs.eyebrow}
              title={whyChooseUs.title}
              subtitle={whyChooseUs.subtitle}
            />
            <Reveal delay={0.1}>
              <div
                role="tablist"
                aria-label="Reasons to choose us"
                aria-orientation="vertical"
                className="mt-8 space-y-1.5"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
              >
                {items.map((item, i) => {
                  const selected = i === active
                  return (
                    <button
                      key={item.title}
                      ref={(el) => {
                        tabRefs.current[i] = el
                      }}
                      type="button"
                      role="tab"
                      id={`why-tab-${i}`}
                      aria-selected={selected}
                      aria-controls="why-panel"
                      tabIndex={selected ? 0 : -1}
                      onClick={() => select(i)}
                      onKeyDown={(e) => onKeyDown(e, i)}
                      className={cn(
                        'relative w-full overflow-hidden rounded-2xl border px-5 py-3 text-left transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
                        selected
                          ? 'border-border bg-surface shadow-soft'
                          : 'border-transparent hover:bg-surface/60',
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={cn(
                            'font-display text-sm font-bold tabular-nums transition-colors',
                            selected ? 'text-accent-strong' : 'text-muted',
                          )}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={cn(
                            'font-display text-lg font-bold transition-colors',
                            selected ? 'text-fg' : 'text-muted',
                          )}
                        >
                          {item.title}
                        </span>
                      </div>
                      <AnimatePresence initial={false}>
                        {selected && (
                          <motion.p
                            className="overflow-hidden pl-9 text-[0.9375rem] leading-relaxed text-muted"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                          >
                            <span className="block pt-2">{item.description}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                      {/* Auto-advance progress */}
                      {selected && !userPicked && !reduceMotion && (
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-border/60" aria-hidden="true">
                          <motion.span
                            key={`${active}-${autoPlay}`}
                            className="block h-full origin-left bg-accent"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: autoPlay ? 1 : 0 }}
                            transition={{ duration: autoPlay ? AUTO_ADVANCE_MS / 1000 : 0, ease: 'linear' }}
                          />
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </Reveal>
          </div>

          {/* Right: showcase stage */}
          <Reveal delay={0.15} className="lg:col-span-7 lg:self-center">
            <div
              id="why-panel"
              role="tabpanel"
              aria-labelledby={`why-tab-${active}`}
              className="relative flex min-h-108 sm:h-136 flex-col overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8"
            >
              {/* Decorative backdrop */}
              <div
                className="pointer-events-none absolute inset-0 opacity-60 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
                aria-hidden="true"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  className="relative flex flex-1 flex-col"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <IconTile icon={current.icon} />
                      <div>
                        <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                          {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                        </p>
                        <h3 className="text-xl font-bold text-fg">{current.title}</h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-3xl font-extrabold text-accent-strong tabular-nums sm:text-4xl">
                        {show.stat}
                      </p>
                      <p className="text-xs font-medium text-muted">{show.statLabel}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center pt-6" aria-hidden="true">
                    {show.visual}
                  </div>

                  <ul className="mt-6 grid gap-2 border-t border-border pt-5 sm:grid-cols-3">
                    {show.points.map((point, i) => (
                      <motion.li
                        key={point}
                        className="flex items-center gap-2 text-sm font-medium text-fg"
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: 0.5 + i * 0.1, ease: EASE }}
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { process } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/**
 * Home: 5-step process.
 * Vertical timeline on mobile, horizontal on large screens.
 * The connecting line draws itself as the visitor scrolls through the section.
 */
export default function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] })
  const spring = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const progress = useReducedMotion() ? 1 : spring

  return (
    <section className="section-y" aria-labelledby="our-process">
      <div className="container-page">
        <SectionHeading id="our-process" eyebrow={process.eyebrow} title={process.title} subtitle={process.subtitle} />

        <ol ref={ref} className="relative mt-14 grid gap-10 lg:mt-20 lg:grid-cols-5 lg:gap-6">
          {/* Track + animated fill: vertical on mobile, horizontal on desktop */}
          <span className="absolute top-3 bottom-3 left-7 w-px bg-border lg:hidden" aria-hidden="true" />
          <motion.span
            style={{ scaleY: progress }}
            className="absolute top-3 bottom-3 left-7 w-px origin-top bg-linear-to-b from-navy-700 via-sky to-sky-300 lg:hidden dark:from-sky-300 dark:via-sky"
            aria-hidden="true"
          />
          <span className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-border lg:block" aria-hidden="true" />
          <motion.span
            style={{ scaleX: progress }}
            className="absolute top-7 right-[10%] left-[10%] hidden h-px origin-left bg-linear-to-r from-navy-700 via-sky to-sky-300 lg:block dark:from-sky-300 dark:via-sky"
            aria-hidden="true"
          />

          {process.steps.map((step, i) => {
            const Icon = step.icon
            return (
              <li key={step.title} className="relative">
                <Reveal delay={i * 0.08} className="flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-accent-strong shadow-soft ring-8 ring-bg">
                    <Icon className="h-5.5 w-5.5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div className="pt-1 lg:mt-6 lg:pt-0">
                    <p className="font-display text-xs font-bold tracking-[0.14em] text-accent-strong" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-fg">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted lg:text-sm">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

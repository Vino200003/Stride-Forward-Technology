import { motion, useReducedMotion } from 'framer-motion'
import { process } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Home: 5-step process as a row of numbered step cards (stacks on smaller screens).
 * Sits on a soft sky-tinted band so it stands apart from the neutral sections around it.
 */
export default function ProcessTimeline() {
  const reduceMotion = useReducedMotion()
  const steps = process.steps

  return (
    <section
      className="section-y relative isolate overflow-hidden border-y border-sky-100 bg-linear-to-b from-sky-50 via-[#e3f3ff] to-sky-50 dark:border-border dark:from-[#081325] dark:via-[#0b1a33] dark:to-[#081325]"
      aria-labelledby="our-process"
    >
      {/* Decorative: line grid, glows, noise */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(1_163_253/0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgb(1_163_253/0.08)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="animate-drift absolute -top-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-sky/20 blur-[110px] dark:bg-sky/15" aria-hidden="true" />
      <div
        className="animate-drift absolute -right-24 -bottom-40 -z-10 h-96 w-96 rounded-full bg-sky-300/30 blur-[110px] dark:bg-sky-700/20 [animation-delay:-9s]"
        aria-hidden="true"
      />

      <div className="container-page">
        <SectionHeading id="our-process" eyebrow={process.eyebrow} title={process.title} subtitle={process.subtitle} />

        {/* Timeline rail with a node per step (desktop only) */}
        <div className="relative mt-16 hidden lg:block" aria-hidden="true">
          <div className="absolute inset-x-[10%] top-1/2 h-px -translate-y-1/2 bg-sky-200 dark:bg-border" />
          <motion.div
            className="absolute inset-x-[10%] top-1/2 h-px origin-left -translate-y-1/2 bg-linear-to-r from-sky-400 via-sky to-sky-300 shadow-[0_0_10px_rgb(1_163_253/0.5)]"
            initial={reduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          <div className="relative grid grid-cols-5">
            {steps.map((step, i) => (
              <motion.span
                key={step.title}
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-sky/40 bg-surface font-display text-sm font-bold text-accent-strong shadow-[0_0_0_6px_rgb(1_163_253/0.1),0_8px_20px_-6px_rgb(1_163_253/0.45)]"
                initial={reduceMotion ? false : { scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.25, ease: EASE }}
              >
                {i + 1}
              </motion.span>
            ))}
          </div>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-5">
          {steps.map((step, i) => {
            const Icon = step.icon
            const last = i === steps.length - 1
            return (
              <li key={step.title} className={last ? 'sm:col-span-2 lg:col-span-1' : undefined}>
                <Reveal delay={i * 0.08} className="h-full">
                <div
                  className="card group relative flex h-full flex-col overflow-hidden p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
                >
                  {/* Big faded step number in the corner */}
                  <span
                    className="pointer-events-none absolute -right-2 -bottom-6 font-display text-8xl font-extrabold text-accent/8 select-none"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold tracking-wide text-accent-strong">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon className="h-5 w-5 text-muted transition-colors group-hover:text-accent-strong" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-fg">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
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

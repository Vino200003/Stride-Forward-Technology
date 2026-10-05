import { motion } from 'framer-motion'
import { process } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/**
 * Home: 5-step process.
 * Vertical timeline on mobile, horizontal on large screens.
 */
export default function ProcessTimeline() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="our-process">
      <div className="container-page">
        <SectionHeading id="our-process" eyebrow={process.eyebrow} title={process.title} subtitle={process.subtitle} />

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* Connecting line: vertical on mobile, horizontal on desktop */}
          <motion.span
            className="absolute top-2 bottom-2 left-7 w-0.5 origin-top bg-gradient-to-b from-navy via-sky to-sky/20 lg:hidden dark:from-sky"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            aria-hidden="true"
          />
          <motion.span
            className="absolute top-7 right-[10%] left-[10%] hidden h-0.5 origin-left bg-gradient-to-r from-navy via-sky to-sky/30 lg:block dark:from-sky"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            aria-hidden="true"
          />

          {process.steps.map((step, i) => {
            const Icon = step.icon
            return (
              <li key={step.title} className="relative">
                <Reveal delay={i * 0.12} className="flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                  <span className="relative z-10 inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-fg shadow-lift ring-8 ring-bg">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                    <span className="absolute -top-2 -right-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky text-xs font-bold text-navy">
                      {i + 1}
                    </span>
                  </span>
                  <div className="lg:mt-6">
                    <h3 className="text-lg font-semibold text-fg">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
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

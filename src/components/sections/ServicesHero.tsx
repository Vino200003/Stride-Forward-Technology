import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ctaBanner, services, servicesPage } from '../../data/content'
import { ButtonLink } from '../ui/Button'
import { Eyebrow } from '../ui/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as const

/** Services page hero: centered copy over a soft glow and line grid, with a chip per service. */
export default function ServicesHero() {
  const reduceMotion = useReducedMotion()
  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  })
  const float = (duration: number, delay = 0) =>
    reduceMotion ? {} : { animate: { y: [0, -10, 0] }, transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' as const } }

  return (
    <section className="relative isolate -mt-16 overflow-hidden bg-bg pt-16 sm:-mt-20 sm:pt-20">
      {/* Background: line grid fading out at the edges, brand glows, decorative outlines */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-lines mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute top-1/2 -left-48 h-120 w-120 -translate-y-1/2 rounded-full bg-sky/20 blur-[120px] dark:bg-sky/10" />
        <div className="absolute -top-24 -right-40 h-100 w-100 rounded-full bg-sky/15 blur-[110px] dark:bg-sky/10" />
        <div className="absolute top-1/3 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

        {/* Large arcs bleeding in from both sides */}
        <div className="absolute top-1/2 -left-96 hidden h-160 w-160 -translate-y-1/2 rounded-full border border-sky/30 md:block" />
        <div className="absolute top-[38%] -right-104 hidden h-160 w-160 rounded-full border border-sky/30 md:block" />

        {/* Small floating shapes */}
        <motion.div {...float(6)} className="absolute top-[18%] left-[8%] hidden h-7 w-7 rounded-full border border-sky/50 md:block" />
        <motion.div {...float(7, 1)} className="absolute top-[52%] left-[6%] hidden h-15 w-15 rounded-2xl border border-sky/40 md:block" />
        <motion.div {...float(6.5, 0.5)} className="absolute top-[14%] right-[6%] hidden h-12 w-12 rounded-xl border border-sky/40 md:block" />
        <motion.div {...float(5.5, 1.5)} className="absolute top-[58%] right-[9%] hidden h-6 w-6 rounded-full border border-sky/50 md:block" />
      </div>

      <div className="container-page relative flex flex-col items-center pt-14 pb-16 text-center sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <motion.div {...rise(0.05)}>
          <Eyebrow>{servicesPage.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1 {...rise(0.12)} className="max-w-4xl text-display font-extrabold text-balance text-navy-800 dark:text-fg">
          {servicesPage.titleLead}{' '}
          <span className="block bg-linear-to-r from-sky-600 to-sky-500 bg-clip-text pb-[0.08em] text-transparent dark:from-sky-300 dark:to-sky-500">
            {servicesPage.titleHighlight}
          </span>
        </motion.h1>

        <motion.p {...rise(0.22)} className="mt-6 max-w-2xl text-lg text-pretty text-muted sm:text-xl">
          {servicesPage.subtitle}
        </motion.p>

        <motion.div {...rise(0.3)} className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <ButtonLink to={ctaBanner.primary.to} size="lg">
            {ctaBanner.primary.label}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to="/services#services-overview" variant="secondary" size="lg">
            {servicesPage.exploreLabel}
            <ArrowDown className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
        </motion.div>

        {/* One chip per service, linking to its detailed section */}
        <motion.ul {...rise(0.4)} className="mt-12 flex max-w-5xl flex-wrap justify-center gap-3" aria-label="Our services">
          {services.map((s) => (
            <li key={s.id}>
              <Link
                to={`/services#${s.id}`}
                className="glass group inline-flex items-center gap-2.5 rounded-xl border border-border px-4 py-2.5 text-[0.9375rem] font-medium text-fg shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <s.icon
                  className="h-5 w-5 text-accent-strong transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                {s.title}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

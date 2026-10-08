import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { ctaBanner, services, servicesPage } from '../../data/content'
import { ButtonLink } from '../ui/Button'
import { Eyebrow } from '../ui/SectionHeading'

const EASE = [0.22, 1, 0.36, 1] as const

/** Services page hero: copy on the left, team photo bleeding in from the right, curved edge into the next band. */
export default function ServicesHero() {
  const reduceMotion = useReducedMotion()
  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  })

  return (
    <section className="relative isolate -mt-16 flex flex-col overflow-hidden bg-bg pt-16 sm:-mt-20 sm:pt-20 lg:min-h-[40rem]">
      {/* Photo: in flow below the copy on small screens, full-bleed background from lg up */}
      <div className="relative order-last -z-10 aspect-2/1 w-full lg:absolute lg:inset-0 lg:order-none lg:aspect-auto">
        <motion.img
          src="/images/services/services-hero-1600.webp"
          srcSet="/images/services/services-hero-900.webp 900w, /images/services/services-hero-1600.webp 1600w"
          sizes="100vw"
          width={1600}
          height={800}
          alt={servicesPage.heroImageAlt}
          fetchPriority="high"
          className="h-full w-full object-cover object-[75%_center] dark:brightness-[0.55] dark:saturate-[1.2]"
          initial={reduceMotion ? false : { scale: 1.06, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EASE }}
        />
        {/* Fade the photo into the page so the copy always sits on a calm background */}
        <div
          className="absolute inset-0 bg-linear-to-b from-bg via-transparent to-transparent lg:bg-linear-to-r lg:from-bg lg:from-35% lg:via-bg/75 lg:via-50% lg:to-transparent lg:to-75%"
          aria-hidden="true"
        />
        <div className="absolute inset-0 hidden bg-navy-900/40 mix-blend-multiply dark:block" aria-hidden="true" />
      </div>

      {/* Soft brand glow behind the headline */}
      <div
        className="absolute -top-40 -left-40 -z-10 h-120 w-120 rounded-full bg-accent/15 blur-[110px] dark:bg-accent/10"
        aria-hidden="true"
      />

      <div className="container-page relative w-full pt-14 pb-10 sm:pt-20 lg:flex lg:flex-1 lg:items-center lg:pt-16 lg:pb-32">
        <div className="max-w-xl">
          <motion.div {...rise(0.05)}>
            <Eyebrow>{servicesPage.eyebrow}</Eyebrow>
          </motion.div>
          <motion.h1 {...rise(0.12)} className="text-display font-extrabold text-balance text-fg">
            {servicesPage.title}
          </motion.h1>
          <motion.span
            className="mt-6 block h-1 w-20 origin-left rounded-full bg-linear-to-r from-navy to-sky dark:from-sky-600 dark:to-sky"
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            aria-hidden="true"
          />
          <motion.p {...rise(0.22)} className="mt-6 text-lg text-pretty text-muted">
            {servicesPage.subtitle}
          </motion.p>
          <motion.div {...rise(0.3)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to={ctaBanner.primary.to} size="lg">
              {ctaBanner.primary.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/services#services-overview" variant="secondary" size="lg">
              {servicesPage.exploreLabel}
              <ArrowDown className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
          </motion.div>

          {/* Service icon strip */}
          <motion.ul
            {...rise(0.4)}
            className="glass mt-10 inline-flex items-center gap-1 rounded-2xl border border-border/70 p-2 shadow-soft"
            aria-label={`${services.length} services`}
          >
            {services.map((s, i) => (
              <li key={s.id}>
                <motion.span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-accent-strong transition-colors hover:bg-accent-soft"
                  title={s.title}
                  animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                  transition={{ duration: 3.2, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <s.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  <span className="sr-only">{s.title}</span>
                </motion.span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Curved edge into the tinted services band */}
      <svg
        className="absolute inset-x-0 bottom-0 hidden h-16 w-full fill-surface-muted lg:block xl:h-24"
        viewBox="0 0 1440 96"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 96h1440V40C1180 92 900 4 600 26 360 44 170 92 0 58Z" />
      </svg>
    </section>
  )
}

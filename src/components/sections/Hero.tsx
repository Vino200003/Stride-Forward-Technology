import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { hero } from '../../data/content'
import { ButtonLink } from '../ui/Button'
import HeroGraphic from './HeroGraphic'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

/** Home page hero: headline, intro, two CTAs, trust line, and the animated graphic. */
export default function Hero() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden pt-16 sm:-mt-20 sm:pt-20" aria-labelledby="hero-title">
      {/* Background: line grid fading out, drifting brand orbs, fine noise */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-lines absolute inset-0 mask-[radial-gradient(ellipse_80%_70%_at_50%_0%,black_20%,transparent_75%)]" />
        <div className="animate-drift absolute -top-48 -left-32 h-[34rem] w-[34rem] rounded-full bg-sky/25 blur-[120px] dark:bg-sky/20" />
        <div className="animate-drift absolute top-20 -right-40 h-[30rem] w-[30rem] rounded-full bg-navy-500/20 blur-[120px] [animation-delay:-9s] dark:bg-navy-600/40" />
        <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.06]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-bg" />
      </div>

      <div className="container-page grid items-center gap-14 pt-12 pb-20 sm:pt-20 sm:pb-24 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pt-24 lg:pb-32">
        <div className="text-center lg:text-left">
          <motion.p
            {...fadeUp(0)}
            className="glass inline-flex items-center gap-2 rounded-full border border-border/80 px-3.5 py-1.5 text-xs font-medium text-muted shadow-soft sm:text-sm"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.eyebrow}
          </motion.p>

          <motion.h1 id="hero-title" {...fadeUp(0.08)} className="text-display mt-7 font-extrabold text-balance text-fg">
            {hero.headlineStart} <span className="text-gradient">{hero.headlineHighlight}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted lg:mx-0 lg:text-xl"
          >
            {hero.subheading}
          </motion.p>

          <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonLink to={hero.primaryCta.to} size="lg">
              {hero.primaryCta.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to={hero.secondaryCta.to} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </motion.div>

          {/* Trust line */}
          <motion.ul
            {...fadeUp(0.32)}
            className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted lg:justify-start"
            aria-label="Why work with us"
          >
            {hero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroGraphic />
        </motion.div>
      </div>
    </section>
  )
}

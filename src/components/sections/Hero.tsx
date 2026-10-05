import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { hero } from '../../data/content'
import { ButtonLink } from '../ui/Button'
import HeroGraphic from './HeroGraphic'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
})

/** Home page hero: headline, intro, two CTAs, and the animated graphic. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container-page relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        <div className="text-center lg:text-left">
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-muted shadow-soft sm:text-sm"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            id="hero-title"
            {...fadeUp(0.1)}
            className="mt-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-fg sm:text-5xl lg:text-6xl"
          >
            {hero.headlineStart} <span className="text-gradient">{hero.headlineHighlight}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted lg:mx-0 lg:text-xl"
          >
            {hero.subheading}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonLink to={hero.primaryCta.to} size="lg">
              {hero.primaryCta.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to={hero.secondaryCta.to} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </ButtonLink>
          </motion.div>

          <motion.ul
            {...fadeUp(0.4)}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted lg:justify-start"
          >
            {hero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent-strong" aria-hidden="true" />
                {point}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HeroGraphic />
        </motion.div>
      </div>
    </section>
  )
}

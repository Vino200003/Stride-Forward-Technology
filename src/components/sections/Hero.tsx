import { motion } from 'framer-motion'
import { ArrowRight, Check, Code2, ShieldCheck, Zap } from 'lucide-react'
import { hero } from '../../data/content'
import { ButtonLink } from '../ui/Button'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
})

/** Full-Screen Hero Banner with AI-Generated Tech Background, Glass Overlay & Centered Content */
export default function Hero() {
  return (
    <section className="relative isolate -mt-16 overflow-hidden pt-22 pb-10 sm:-mt-20 sm:pt-26 sm:pb-12 lg:pt-30 lg:pb-14 flex items-center justify-center" aria-labelledby="hero-title">
      {/* Background: AI Generated Tech Ribbons + Gradient Glass Overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center scale-105 filter brightness-[0.9] dark:brightness-[0.75] contrast-[1.05]"
        />
        {/* Multilayered Adaptive Glass Overlay for pristine contrast in both light & dark mode */}
        <div className="absolute inset-0 bg-linear-to-b from-bg/92 via-bg/75 to-bg backdrop-blur-[3px]" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-transparent via-bg/50 to-bg opacity-90" />
        <div className="bg-noise absolute inset-0 opacity-[0.035] mix-blend-overlay dark:opacity-[0.06]" />
      </div>

      {/* Centered Main Content in Middle */}
      <div className="container-page flex flex-col items-center text-center">
        {/* Status Eyebrow Badge (Hidden on mobile, visible on desktop/web) */}
        <motion.p
          {...fadeUp(0)}
          className="glass hidden sm:inline-flex items-center gap-2 rounded-full border border-border/90 px-4 py-1.5 text-xs font-semibold text-fg shadow-soft backdrop-blur-md sm:text-sm"
        >
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {hero.eyebrow}
        </motion.p>

        {/* Display Headline - Increased Size & Authority */}
        <motion.h1
          id="hero-title"
          {...fadeUp(0.08)}
          className="mt-2 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance text-fg tracking-tight leading-[1.06] max-w-5xl"
        >
          {hero.headlineStart}{' '}
          <span className="text-gradient block sm:inline">{hero.headlineHighlight}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.16)}
          className="mt-4 max-w-3xl text-lg sm:text-xl lg:text-2xl leading-relaxed text-pretty text-muted"
        >
          {hero.subheading}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          {...fadeUp(0.24)}
          className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <ButtonLink to={hero.primaryCta.to} size="lg" className="shadow-glow">
            {hero.primaryCta.label}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to={hero.secondaryCta.to} size="lg" variant="secondary" className="glass">
            {hero.secondaryCta.label}
          </ButtonLink>
        </motion.div>

        {/* Trust Checklist - Enlarged Typography */}
        <motion.ul
          {...fadeUp(0.32)}
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2.5 text-sm sm:text-base font-semibold text-fg/85"
          aria-label="Why work with us"
        >
          {hero.trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
              </span>
              {point}
            </li>
          ))}
        </motion.ul>

        {/* Value Highlights Dock - Enlarged Text & Icons */}
        <motion.div
          {...fadeUp(0.4)}
          className="glass mt-10 inline-grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 rounded-2xl border border-border/80 px-7 py-4.5 shadow-soft"
        >
          <div className="flex items-center gap-3 text-left">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <span className="block text-sm font-extrabold text-fg">100% Code IP</span>
              <span className="text-xs text-muted font-medium">You own all code & repos</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left border-t sm:border-t-0 sm:border-l border-border/70 pt-2.5 sm:pt-0 sm:pl-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
              <Zap className="h-5 w-5" />
            </span>
            <div>
              <span className="block text-sm font-extrabold text-fg">Fixed-Price Quote</span>
              <span className="text-xs text-muted font-medium">Transparent, zero surprises</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left border-t sm:border-t-0 sm:border-l border-border/70 pt-2.5 sm:pt-0 sm:pl-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <Code2 className="h-5 w-5" />
            </span>
            <div>
              <span className="block text-sm font-extrabold text-fg">Senior Engineers</span>
              <span className="text-xs text-muted font-medium">Direct contact, no middle layers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

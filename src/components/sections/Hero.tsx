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
    <section className="relative isolate -mt-16 overflow-hidden pt-18 pb-4 sm:-mt-20 sm:pt-20 sm:pb-5 lg:pt-22 lg:pb-5 flex items-center justify-center" aria-labelledby="hero-title">
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
          className="mt-2 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] font-black text-balance text-fg tracking-tight leading-[1.04] max-w-5xl"
        >
          {hero.headlineStart}{' '}
          <span className="text-gradient block sm:inline">{hero.headlineHighlight}</span>
        </motion.h1>

        {/* Subtitle - Enlarged for Clear Readability */}
        <motion.p
          {...fadeUp(0.16)}
          className="mt-4 max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-[1.65rem] leading-relaxed text-pretty text-muted"
        >
          {hero.subheading}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          {...fadeUp(0.24)}
          className="mt-7 sm:mt-8 flex w-full flex-col justify-center gap-3.5 sm:w-auto sm:flex-row"
        >
          <ButtonLink to={hero.primaryCta.to} size="lg" className="shadow-glow text-base sm:text-lg font-bold px-8 py-3.5 sm:py-4">
            {hero.primaryCta.label}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink to={hero.secondaryCta.to} size="lg" variant="secondary" className="glass text-base sm:text-lg font-bold px-8 py-3.5 sm:py-4">
            {hero.secondaryCta.label}
          </ButtonLink>
        </motion.div>

        {/* Trust Checklist - Enlarged Typography */}
        <motion.ul
          {...fadeUp(0.32)}
          className="mt-6 sm:mt-7 flex flex-wrap justify-center gap-x-8 gap-y-2.5 text-sm sm:text-base font-semibold text-fg/85"
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

        {/* Value Highlights Dock - Enlarged Fonts */}
        <motion.div
          {...fadeUp(0.4)}
          className="glass mt-7 sm:mt-8 inline-grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-7 rounded-2xl border border-border/80 px-7 py-4 sm:px-9 sm:py-4.5 shadow-soft"
        >
          <div className="flex items-center gap-3 text-left">
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-strong shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <div>
              <span className="block text-sm sm:text-base font-extrabold text-fg">100% Code IP</span>
              <span className="text-xs sm:text-sm text-muted font-medium">You own all code & repos</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left border-t sm:border-t-0 sm:border-l border-border/70 pt-2.5 sm:pt-0 sm:pl-7">
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
              <Zap className="h-5 w-5" />
            </span>
            <div>
              <span className="block text-sm sm:text-base font-extrabold text-fg">Fixed-Price Quote</span>
              <span className="text-xs sm:text-sm text-muted font-medium">Transparent, zero surprises</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-left border-t sm:border-t-0 sm:border-l border-border/70 pt-2.5 sm:pt-0 sm:pl-7">
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
              <Code2 className="h-5 w-5" />
            </span>
            <div>
              <span className="block text-sm sm:text-base font-extrabold text-fg">Senior Engineers</span>
              <span className="text-xs sm:text-sm text-muted font-medium">Direct contact, no middle layers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

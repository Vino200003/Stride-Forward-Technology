import { ArrowRight } from 'lucide-react'
import { ctaBanner } from '../../data/content'
import { ButtonLink } from '../ui/Button'
import Reveal from '../ui/Reveal'

/** Closing call-to-action banner on the brand gradient. Used at the bottom of most pages. */
export default function CTABanner() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="cta-title">
      <div className="container-page">
        <Reveal className="bg-brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-lift sm:px-12 sm:py-20">
          {/* Decorative glows and grid */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sky/40 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-navy/60 blur-3xl" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 id="cta-title" className="text-3xl font-bold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
              {ctaBanner.title}
            </h2>
            <p className="mt-4 text-lg text-white/85">{ctaBanner.subtitle}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink to={ctaBanner.primary.to} variant="light" size="lg">
                {ctaBanner.primary.label}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink to={ctaBanner.secondary.to} variant="outline-light" size="lg">
                {ctaBanner.secondary.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

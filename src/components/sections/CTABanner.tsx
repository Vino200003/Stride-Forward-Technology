import { ArrowRight } from 'lucide-react'
import { ctaBanner } from '../../data/content'
import { ButtonLink } from '../ui/Button'
import Reveal from '../ui/Reveal'

/** Closing call-to-action banner on the brand gradient. Used at the bottom of most pages. */
export default function CTABanner() {
  return (
    <section className="section-y" aria-labelledby="cta-title">
      <div className="container-page">
        <Reveal className="bg-brand-gradient relative isolate overflow-hidden rounded-[2rem] px-6 py-16 text-center shadow-lift ring-1 ring-white/10 sm:px-12 sm:py-24">
          {/* Decorative: line grid, drifting glows, noise */}
          <div
            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)]"
            aria-hidden="true"
          />
          <div className="animate-drift absolute -top-32 -right-24 -z-10 h-96 w-96 rounded-full bg-sky/50 blur-[100px]" aria-hidden="true" />
          <div
            className="animate-drift absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-navy-900/80 blur-[100px] [animation-delay:-8s]"
            aria-hidden="true"
          />
          <div className="bg-noise absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay" aria-hidden="true" />

          <div className="mx-auto max-w-2xl">
            <h2 id="cta-title" className="text-h1 font-extrabold text-balance text-white">
              {ctaBanner.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">{ctaBanner.subtitle}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
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

import { Check } from 'lucide-react'
import { ctaBanner, hero, servicesPage } from '../../data/content'
import ContactForm from '../ContactForm'
import Reveal from '../ui/Reveal'

/** Closing band for the Services page: pitch on the brand gradient, contact form on a raised card. */
export default function ServicesContact() {
  return (
    <section className="bg-brand-gradient relative isolate overflow-hidden" aria-labelledby="services-contact-title">
      {/* Curved top edge out of the previous section */}
      <svg className="absolute inset-x-0 top-0 h-12 w-full fill-bg sm:h-20" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0h1440v22C1200 70 940 76 700 48 450 18 220 30 0 64Z" />
      </svg>

      {/* Decorative: line grid, drifting glows, noise */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_30%_50%,black,transparent_70%)]"
        aria-hidden="true"
      />
      <div className="animate-drift absolute top-1/4 -left-32 -z-10 h-96 w-96 rounded-full bg-sky/40 blur-[110px]" aria-hidden="true" />
      <div
        className="animate-drift absolute -right-24 -bottom-40 -z-10 h-96 w-96 rounded-full bg-navy-900/80 blur-[100px] [animation-delay:-8s]"
        aria-hidden="true"
      />
      <div className="bg-noise absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay" aria-hidden="true" />

      <div className="container-page grid items-center gap-12 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-white uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-sky" aria-hidden="true" />
            {servicesPage.contactEyebrow}
          </p>
          <h2 id="services-contact-title" className="text-h1 font-extrabold text-balance text-white">
            {ctaBanner.title}
          </h2>
          <span className="mt-6 block h-1 w-20 rounded-full bg-linear-to-r from-sky to-white/60" aria-hidden="true" />
          <p className="mt-6 max-w-md text-lg text-white/85">{ctaBanner.subtitle}</p>
          <ul className="mt-8 space-y-3">
            {hero.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 font-medium text-white">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-sky-200 ring-1 ring-white/20">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6 shadow-lift ring-1 ring-white/10 sm:p-8">
            <h3 className="text-xl font-bold text-fg sm:text-2xl">{servicesPage.contactFormTitle}</h3>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

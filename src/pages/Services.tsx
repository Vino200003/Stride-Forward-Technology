import { ArrowRight, Check } from 'lucide-react'
import { seo, services, servicesPage } from '../data/content'
import Seo from '../components/ui/Seo'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import ServiceVisual from '../components/ui/ServiceVisual'
import { ButtonLink } from '../components/ui/Button'
import ServiceCard from '../components/cards/ServiceCard'
import ServicesHero from '../components/sections/ServicesHero'
import ServicesContact from '../components/sections/ServicesContact'
import { cn } from '../lib/cn'

export default function Services() {
  return (
    <>
      <Seo {...seo.services} />
      <ServicesHero />

      {/* Overview grid - "Explore" jumps to the detailed section below */}
      <section className="section-y scroll-mt-16 bg-surface-muted" id="services-overview" aria-labelledby="services-overview-title">
        <div className="container-page">
          <SectionHeading id="services-overview-title" title={servicesPage.overviewTitle} subtitle={servicesPage.overviewSubtitle} decorated />
          {/* Flex-wrap so an odd last row stays centered */}
          <div className="mt-12 flex flex-wrap justify-center gap-5 lg:mt-16">
            {services.map((service, i) => (
              <Reveal
                key={service.id}
                delay={(i % 3) * 0.08}
                className="w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <ServiceCard service={service} index={i} to={`/services#${service.id}`} centered />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections: visual and copy alternate sides */}
      <section className="section-y" aria-labelledby="service-details">
        <div className="container-page">
          <SectionHeading id="service-details" title={servicesPage.detailsTitle} decorated />
          <div className="mt-14 space-y-20 lg:mt-20 lg:space-y-28">
            {services.map((service, i) => (
              <article key={service.id} id={service.id} className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={cn(i % 2 === 1 && 'lg:order-last')}>
                  {service.image ? (
                    <div className="relative aspect-4/3 overflow-hidden rounded-4xl shadow-lift ring-1 ring-border">
                      <img
                        src={`${service.image}-1536.webp`}
                        srcSet={`${service.image}-900.webp 900w, ${service.image}-1536.webp 1536w`}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        alt={service.imageAlt ?? ''}
                        width={1536}
                        height={1024}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : (
                    <ServiceVisual icon={service.icon} index={i} />
                  )}
                </Reveal>

                <Reveal delay={0.08}>
                  <p className="flex items-center gap-3 font-display text-sm font-bold text-accent-strong tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                    <span className="h-px w-10 bg-linear-to-r from-accent to-transparent" aria-hidden="true" />
                    <span className="text-muted">{String(services.length).padStart(2, '0')}</span>
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-fg sm:text-3xl">{service.title}</h3>
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{service.description}</p>

                  <h4 className="mt-8 font-sans text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                    {servicesPage.includesLabel}
                  </h4>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-border bg-surface p-3.5 text-[0.9375rem] text-fg shadow-soft transition-colors duration-300 hover:border-accent/40"
                      >
                        <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ButtonLink to={`/contact?service=${service.id}`} className="mt-8">
                    {servicesPage.quoteLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ButtonLink>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServicesContact />
    </>
  )
}

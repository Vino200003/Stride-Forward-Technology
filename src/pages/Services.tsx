import { ArrowRight, Check } from 'lucide-react'
import { seo, services, servicesPage } from '../data/content'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import IconTile from '../components/ui/IconTile'
import { ButtonLink } from '../components/ui/Button'
import ServiceCard from '../components/cards/ServiceCard'
import CTABanner from '../components/sections/CTABanner'

export default function Services() {
  return (
    <>
      <Seo {...seo.services} />
      <PageHeader eyebrow={servicesPage.eyebrow} title={servicesPage.title} subtitle={servicesPage.subtitle} />

      {/* Overview grid - "Learn more" jumps to the detailed section below */}
      <section className="section-y" aria-labelledby="services-overview">
        <h2 id="services-overview" className="sr-only">
          Our services
        </h2>
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08} className="h-full">
              <ServiceCard service={service} to={`/services#${service.id}`} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Detailed sections */}
      <section className="section-y bg-surface-muted" aria-labelledby="service-details">
        <div className="container-page">
          <SectionHeading id="service-details" title={servicesPage.detailsTitle} />
          <div className="mt-12 space-y-6 lg:mt-16">
            {services.map((service) => (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className="card grid scroll-mt-28 gap-8 p-6 shadow-soft transition-[border-color,box-shadow] duration-300 hover:border-accent/30 sm:p-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div>
                    <IconTile icon={service.icon} />
                    <h3 className="mt-6 text-2xl font-bold text-fg sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted">{service.description}</p>
                    <ButtonLink to={`/contact?service=${service.id}`} className="mt-8">
                      {servicesPage.quoteLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                  </div>
                  <div className="rounded-2xl border border-border bg-surface-muted p-6 sm:p-8">
                    <h4 className="font-sans text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase">
                      {servicesPage.includesLabel}
                    </h4>
                    <ul className="mt-5 space-y-4">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-fg">
                          <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                            <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

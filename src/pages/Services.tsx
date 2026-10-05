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
      <section className="py-20 sm:py-24" aria-label="Our services">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.08} className="h-full">
              <ServiceCard service={service} to={`/services#${service.id}`} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Detailed sections */}
      <section className="bg-surface-muted py-20 sm:py-24" aria-labelledby="service-details">
        <div className="container-page">
          <SectionHeading id="service-details" title={servicesPage.detailsTitle} />
          <div className="mt-12 space-y-6">
            {services.map((service) => (
              <Reveal key={service.id}>
                <article
                  id={service.id}
                  className="grid scroll-mt-28 gap-8 rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-10 lg:grid-cols-2 lg:gap-12"
                >
                  <div>
                    <IconTile icon={service.icon} />
                    <h3 className="mt-5 text-2xl font-bold text-fg">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{service.description}</p>
                    <ButtonLink to={`/contact?service=${service.id}`} className="mt-6" size="sm">
                      {servicesPage.quoteLabel}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                  </div>
                  <div className="rounded-2xl bg-surface-muted p-6">
                    <h4 className="text-sm font-semibold tracking-wider text-accent-strong uppercase">
                      {servicesPage.includesLabel}
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-fg">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-fg">
                            <Check className="h-3 w-3" aria-hidden="true" />
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

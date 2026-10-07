import { ArrowRight } from 'lucide-react'
import { services, whatWeDo } from '../../data/content'
import ServiceCard from '../cards/ServiceCard'
import { ButtonLink } from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/** Home: the 4 featured services. */
export default function WhatWeDo() {
  const featured = services.filter((s) => s.featured)
  return (
    <section className="section-y" aria-labelledby="what-we-do">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="what-we-do"
            align="left"
            eyebrow={whatWeDo.eyebrow}
            title={whatWeDo.title}
            subtitle={whatWeDo.subtitle}
          />
          <Reveal className="shrink-0">
            <ButtonLink to="/services" variant="secondary">
              View all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {featured.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.07} className="h-full">
              <ServiceCard service={service} to={`/services#${service.id}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section className="py-20 sm:py-24" aria-labelledby="what-we-do">
      <div className="container-page">
        <SectionHeading id="what-we-do" eyebrow={whatWeDo.eyebrow} title={whatWeDo.title} subtitle={whatWeDo.subtitle} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.08} className="h-full">
              <ServiceCard service={service} to={`/services#${service.id}`} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <ButtonLink to="/services" variant="secondary">
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}

import { whyChooseUs } from '../../data/content'
import FeatureCard from '../cards/FeatureCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/** Home: 4 reasons to choose the company. */
export default function WhyChooseUs() {
  return (
    <section className="bg-surface-muted py-20 sm:py-24" aria-labelledby="why-us">
      <div className="container-page">
        <SectionHeading id="why-us" eyebrow={whyChooseUs.eyebrow} title={whyChooseUs.title} subtitle={whyChooseUs.subtitle} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

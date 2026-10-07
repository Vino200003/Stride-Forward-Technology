import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { faq } from '../../data/content'
import FAQItem from '../cards/FAQItem'
import { ButtonLink } from '../ui/Button'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/** Home: FAQ accordion (one item open at a time). */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-y bg-surface-muted" aria-labelledby="faq">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="faq" align="left" eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />
          <Reveal className="mt-8">
            <ButtonLink to="/contact" variant="secondary">
              Ask us anything
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.05}>
              <FAQItem
                question={item.question}
                answer={item.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

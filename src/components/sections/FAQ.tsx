import { useState } from 'react'
import { faq } from '../../data/content'
import FAQItem from '../cards/FAQItem'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/** Home: FAQ accordion (one item open at a time). */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-surface-muted py-20 sm:py-24" aria-labelledby="faq">
      <div className="container-page">
        <SectionHeading id="faq" eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.subtitle} />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.06}>
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

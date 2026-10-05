import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Info } from 'lucide-react'
import { testimonials } from '../../data/content'
import { cn } from '../../lib/cn'
import TestimonialCard from '../cards/TestimonialCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const AUTOPLAY_MS = 7000

/**
 * Home: testimonial slider.
 * Auto-advances, pauses on hover/focus, and never auto-plays for reduced-motion users.
 */
export default function Testimonials() {
  const items = testimonials.items
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  const go = useCallback(
    (next: number, dir: number) => {
      setDirection(dir)
      setIndex((next + items.length) % items.length)
    },
    [items.length],
  )

  useEffect(() => {
    if (paused || reduceMotion || items.length < 2) return
    const t = window.setTimeout(() => go(index + 1, 1), AUTOPLAY_MS)
    return () => window.clearTimeout(t)
  }, [index, paused, reduceMotion, go, items.length])

  return (
    <section className="py-20 sm:py-24" aria-labelledby="testimonials">
      <div className="container-page">
        <SectionHeading id="testimonials" eyebrow={testimonials.eyebrow} title={testimonials.title} />
        <Reveal className="mt-4 flex justify-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-surface-muted px-3 py-1 text-xs text-muted">
            <Info className="h-3.5 w-3.5" aria-hidden="true" />
            {testimonials.note}
          </p>
        </Reveal>

        <Reveal
          className="mx-auto mt-10 max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative overflow-hidden" aria-live={paused ? 'polite' : 'off'}>
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${items.length}`}
              >
                <TestimonialCard testimonial={items[index]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(index - 1, -1)}
              aria-label="Previous testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-accent hover:text-accent-strong"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => go(i, i > index ? 1 : -1)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    i === index ? 'w-8 bg-primary' : 'w-2.5 bg-border hover:bg-muted',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label="Next testimonial"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-accent hover:text-accent-strong"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

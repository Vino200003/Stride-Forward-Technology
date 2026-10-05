import { Quote, Star } from 'lucide-react'

type Testimonial = { quote: string; name: string; role: string; rating: number }

/** A single client quote with star rating. */
export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

  return (
    <figure className="relative rounded-3xl border border-border bg-surface p-8 shadow-soft sm:p-10">
      <Quote className="absolute top-8 right-8 h-10 w-10 text-accent/25" aria-hidden="true" />
      <div className="flex gap-1" role="img" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={i < testimonial.rating ? 'h-5 w-5 fill-amber-400 text-amber-400' : 'h-5 w-5 text-border'}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-5 text-lg leading-relaxed text-pretty text-fg sm:text-xl">
        "{testimonial.quote}"
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-4">
        <span
          className="bg-brand-gradient inline-flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
          aria-hidden="true"
        >
          {initials}
        </span>
        <span>
          <span className="block font-semibold text-fg">{testimonial.name}</span>
          <span className="block text-sm text-muted">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

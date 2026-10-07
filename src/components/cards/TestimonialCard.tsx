import { Quote, Star } from 'lucide-react'

type Testimonial = { quote: string; name: string; role: string; rating: number }

/** A single client quote with star rating, avatar, name and role. */
export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

  return (
    <figure className="card relative flex min-h-76 flex-col p-8 shadow-lift sm:p-10">
      <Quote className="absolute top-8 right-8 h-10 w-10 fill-accent/10 text-accent/30" strokeWidth={1.25} aria-hidden="true" />
      <div className="flex gap-1" role="img" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={i < testimonial.rating ? 'h-4.5 w-4.5 fill-amber-400 text-amber-400' : 'h-4.5 w-4.5 text-border'}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-6 flex-1 font-display text-lg leading-relaxed font-semibold tracking-tight text-pretty text-fg sm:text-xl">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
        <span
          className="bg-brand-gradient inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ring-accent-soft"
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

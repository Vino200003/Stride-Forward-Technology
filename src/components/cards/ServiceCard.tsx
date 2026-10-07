import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../data/content'
import IconTile from '../ui/IconTile'

/** Service summary card with icon, short description, and a "Learn more" link. Whole card is clickable. */
export default function ServiceCard({ service, to }: { service: Service; to: string }) {
  return (
    <article className="card group relative flex h-full flex-col p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow sm:p-7">
      {/* Spotlight glow from the top edge on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(120%_60%_at_50%_0%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between">
        <IconTile icon={service.icon} className="group-hover:scale-105" />
        <ArrowUpRight
          className="h-5 w-5 text-muted/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-strong"
          aria-hidden="true"
        />
      </div>
      <h3 className="relative mt-6 text-lg font-bold text-fg">{service.title}</h3>
      <p className="relative mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{service.short}</p>
      <Link
        to={to}
        className="mt-6 inline-flex items-center gap-1.5 self-start rounded text-sm font-semibold text-accent-strong after:absolute after:inset-0 after:z-10 after:rounded-[inherit] focus-visible:outline-offset-4"
      >
        Learn more<span className="sr-only"> about {service.title}</span>
      </Link>
    </article>
  )
}

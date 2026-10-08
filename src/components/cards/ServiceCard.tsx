import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../../data/content'
import IconTile from '../ui/IconTile'

/** Service summary card: number, icon, short description, and an "Explore" link. Whole card is clickable. */
export default function ServiceCard({ service, to, index }: { service: Service; to: string; index?: number }) {
  return (
    <article className="card group relative flex h-full flex-col overflow-hidden p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow sm:p-8">
      {/* Spotlight glow from the top edge on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(120%_60%_at_50%_0%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between">
        <IconTile icon={service.icon} className="group-hover:scale-105" />
        {index !== undefined && (
          <span className="font-display text-sm font-bold text-muted/50 tabular-nums" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="relative mt-8 text-xl font-bold text-fg">{service.title}</h3>
      <p className="relative mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">{service.short}</p>
      <div className="relative mt-8 flex items-center justify-between border-t border-border pt-5">
        <Link
          to={to}
          className="inline-flex items-center rounded text-sm font-semibold text-fg after:absolute after:inset-0 after:z-10 after:rounded-[inherit] focus-visible:outline-offset-4"
        >
          Explore<span className="sr-only"> {service.title}</span>
        </Link>
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-fg"
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
        </span>
      </div>
    </article>
  )
}

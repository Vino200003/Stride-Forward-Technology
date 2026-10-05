import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../../data/content'
import IconTile from '../ui/IconTile'

/** Service summary card with icon, short description, and a "Learn more" link. */
export default function ServiceCard({ service, to }: { service: Service; to: string }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lift sm:p-7">
      {/* Gradient bar that slides in on hover */}
      <span
        className="absolute inset-x-6 top-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-navy to-sky transition-transform duration-300 group-hover:scale-x-100 dark:from-sky dark:to-sky/40"
        aria-hidden="true"
      />
      <IconTile icon={service.icon} className="group-hover:bg-primary group-hover:text-primary-fg" />
      <h3 className="mt-5 text-lg font-semibold text-fg">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.short}</p>
      <Link
        to={to}
        className="mt-5 inline-flex items-center gap-1.5 self-start rounded text-sm font-semibold text-accent-strong after:absolute after:inset-0 after:rounded-2xl"
      >
        Learn more<span className="sr-only"> about {service.title}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  )
}

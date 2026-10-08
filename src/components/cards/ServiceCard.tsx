import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Service } from '../../data/content'
import IconTile from '../ui/IconTile'
import { cn } from '../../lib/cn'

/** Service summary card: number, icon, short description, and an "Explore" link. Whole card is clickable. */
export default function ServiceCard({
  service,
  to,
  index,
  centered = false,
}: {
  service: Service
  to: string
  index?: number
  centered?: boolean // center the icon, text and link (home page)
}) {
  return (
    <article
      className={cn(
        'card group relative flex h-full flex-col overflow-hidden p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow sm:p-8',
        // Light mode: resting shadow + firmer border so cards lift off the tinted section
        centered && 'text-center not-dark:border-fg/15 not-dark:shadow-soft',
      )}
    >
      {centered && (
        <>
          {/* Brand accent strip along the top edge */}
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-linear-to-r from-navy to-sky opacity-80 transition-opacity duration-300 group-hover:opacity-100 dark:from-sky-600 dark:to-sky"
            aria-hidden="true"
          />
          {/* Soft sky wash behind the icon, fading to the card surface */}
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-accent-soft to-transparent"
            aria-hidden="true"
          />
        </>
      )}
      {/* Spotlight glow from the top edge on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(120%_60%_at_50%_0%,color-mix(in_oklab,var(--accent)_10%,transparent),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className={cn('relative flex items-start', centered ? 'justify-center' : 'justify-between')}>
        {centered ? (
          // Solid brand tile so the icon stands out against the sky wash
          <span
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-navy to-navy-600 text-white shadow-[0_8px_20px_-8px_hsl(var(--glow)/0.6)] transition-transform duration-300 ease-out group-hover:scale-105 dark:from-sky-600 dark:to-sky dark:text-navy-900"
            aria-hidden="true"
          >
            <service.icon className="h-5.5 w-5.5" strokeWidth={1.75} />
          </span>
        ) : (
          <IconTile icon={service.icon} className="group-hover:scale-105" />
        )}
        {index !== undefined && (
          <span
            className={cn(
              'font-display text-sm font-bold text-muted/50 tabular-nums',
              centered && 'absolute top-0 right-0',
            )}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="relative mt-8 text-xl font-bold text-fg">{service.title}</h3>
      <p className="relative mt-3 flex-1 text-[0.9375rem] leading-relaxed text-muted">{service.short}</p>
      <div
        className={cn(
          'relative mt-8 flex items-center border-t border-border pt-5',
          centered ? 'justify-center gap-3' : 'justify-between',
        )}
      >
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

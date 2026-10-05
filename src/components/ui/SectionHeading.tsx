import { cn } from '../../lib/cn'
import Reveal from './Reveal'

type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  /** h1 for page headers, h2 for sections */
  as?: 'h1' | 'h2'
  id?: string
  className?: string
}

/** Small label + heading + optional intro text used at the top of every section. */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', as: Tag = 'h2', id, className }: Props) {
  return (
    <Reveal className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold tracking-wider text-accent-strong uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <Tag
        id={id}
        className={cn(
          'font-bold tracking-tight text-balance text-fg',
          Tag === 'h1' ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl',
        )}
      >
        {title}
      </Tag>
      {subtitle && <p className="mt-4 text-base text-pretty text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}

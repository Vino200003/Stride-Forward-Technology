import type { ReactNode } from 'react'
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
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag id={id} className={cn('font-bold text-balance text-fg', Tag === 'h1' ? 'text-h1' : 'text-h2')}>
        {title}
      </Tag>
      {subtitle && <p className="mt-5 text-base text-pretty text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}

/** Small uppercase label above headings. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-accent-strong uppercase shadow-soft',
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </p>
  )
}

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
        'mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-accent-strong uppercase',
        className,
      )}
    >
      <span className="h-px w-6 bg-linear-to-r from-transparent to-accent" aria-hidden="true" />
      {children}
    </p>
  )
}

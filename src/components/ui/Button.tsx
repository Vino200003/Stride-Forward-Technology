import { Link, type LinkProps } from 'react-router-dom'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'light' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98]'

const variants: Record<Variant, string> = {
  // Main call-to-action: navy in light mode, sky in dark mode
  primary: 'bg-primary text-primary-fg shadow-soft hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lift',
  secondary: 'border border-border bg-surface text-fg shadow-soft hover:-translate-y-0.5 hover:border-accent',
  // For use on the dark brand gradient
  light: 'bg-white text-navy shadow-soft hover:-translate-y-0.5 hover:shadow-lift',
  'outline-light': 'border border-white/40 text-white hover:bg-white/10',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm sm:text-base',
  lg: 'px-7 py-3.5 text-base',
}

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}

type Common = { variant?: Variant; size?: Size; className?: string }

/** A router link styled as a button. */
export function ButtonLink({ variant, size, className, ...props }: Common & LinkProps) {
  return <Link className={buttonClasses(variant, size, className)} {...props} />
}

/** A real <button> with the same styles. */
export function Button({ variant, size, className, ...props }: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={buttonClasses(variant, size, className)} {...props} />
}

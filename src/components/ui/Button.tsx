import { Link, type LinkProps } from 'react-router-dom'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

// The trailing icon (usually an arrow) nudges right on hover.
const base =
  'group/btn relative inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out disabled:pointer-events-none disabled:opacity-60 active:translate-y-0 active:scale-[0.98] [&>svg:last-child:not(:first-child)]:transition-transform [&>svg:last-child:not(:first-child)]:duration-200 hover:[&>svg:last-child:not(:first-child)]:translate-x-0.5'

const variants: Record<Variant, string> = {
  // Main call-to-action: navy in light mode, sky in dark mode
  primary:
    'bg-primary text-primary-fg shadow-[inset_0_1px_0_rgb(255_255_255/0.15),0_1px_2px_hsl(var(--shadow-color)/0.2)] hover:-translate-y-px hover:bg-primary-hover hover:shadow-glow',
  secondary:
    'border border-border bg-surface text-fg shadow-soft hover:-translate-y-px hover:border-accent/50 hover:shadow-lift',
  ghost: 'text-fg hover:bg-fg/5',
  // For use on the dark brand gradient
  light: 'bg-white text-navy shadow-soft hover:-translate-y-px hover:shadow-lift',
  'outline-light': 'border border-white/35 text-white hover:border-white/60 hover:bg-white/10',
}

// Every size is at least 40px tall; md and lg meet the 44px touch-target guideline.
const sizes: Record<Size, string> = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-12 px-5 text-sm sm:text-base',
  lg: 'min-h-13 px-7 text-base',
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

import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/content'
import { cn } from '../../lib/cn'

type LogoProps = {
  /** "auto" switches styling for dark/light; "light" is for fixed dark backgrounds like the footer */
  variant?: 'auto' | 'light'
  className?: string
  onClick?: () => void
}

/**
 * Company logo linking to the home page.
 * Uses the authentic brand logo (/logo-mark.webp, /logo-mark.png) across all modes.
 * On dark backgrounds / dark mode, a crisp white rounded badge ensures the navy
 * lettering remains fully visible with maximum contrast while preserving original brand colors.
 */
export default function Logo({ variant = 'auto', className, onClick }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <Link to="/" onClick={onClick} className={cn('inline-flex items-center gap-3 rounded-lg', className)}>
      {/* Brand logo: uses normal mode logo with white pill on dark backgrounds */}
      <picture
        className={cn(
          'flex items-center justify-center rounded-xl px-2 py-1 transition-all duration-200',
          isLight
            ? 'bg-white shadow-sm ring-1 ring-white/10'
            : 'bg-transparent dark:bg-white dark:shadow-[0_2px_12px_rgba(255,255,255,0.12)]',
        )}
      >
        <source srcSet="/logo-mark.webp" type="image/webp" />
        <img
          src="/logo-mark.png"
          alt=""
          width={120}
          height={40}
          className="h-8 w-auto sm:h-9 object-contain"
        />
      </picture>

      <span
        className={cn(
          'hidden text-sm leading-tight font-bold tracking-tight sm:block',
          isLight ? 'text-white' : 'text-fg',
        )}
      >
        Stride Forward
        <span
          className={cn(
            'block text-xs font-medium',
            isLight ? 'text-white/70' : 'text-muted',
          )}
        >
          Technology
        </span>
      </span>
      <span className="sr-only">{siteConfig.name} - home</span>
    </Link>
  )
}


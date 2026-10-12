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
 * Light mode uses the navy + cyan logo (/logo-mark.*); dark mode swaps in the
 * official reversed white + cyan logo (/logo-mark-light.*) with no background.
 */
export default function Logo({ variant = 'auto', className, onClick }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <Link to="/" onClick={onClick} className={cn('inline-flex items-center gap-3 rounded-lg', className)}>
      {/* Light mode: navy + cyan logo (on a white badge over the dark footer) */}
      <picture
        className={cn(
          'flex items-center justify-center rounded-xl px-2 py-1 dark:hidden',
          isLight && 'bg-white shadow-sm ring-1 ring-white/10',
        )}
      >
        <source srcSet="/logo-mark.webp" type="image/webp" />
        <img src="/logo-mark.png" alt="" width={120} height={40} className="h-8 w-auto object-contain sm:h-9" />
      </picture>
      {/* Dark mode: official reversed white + cyan logo, no background */}
      <picture className="hidden items-center justify-center px-2 py-1 dark:flex">
        <source srcSet="/logo-mark-light.webp" type="image/webp" />
        <img src="/logo-mark-light.png" alt="" width={120} height={40} className="h-8 w-auto object-contain sm:h-9" />
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


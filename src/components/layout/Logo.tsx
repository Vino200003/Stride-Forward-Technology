import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/content'
import { cn } from '../../lib/cn'

type LogoProps = {
  /** "auto" switches automatically between dark/light; "light" always uses the white/sky logo */
  variant?: 'auto' | 'light'
  className?: string
  onClick?: () => void
}

/**
 * Company logo linking to the home page.
 * Uses transparent logo marks:
 * - On light backgrounds: standard navy + sky logo (/logo-mark.webp, /logo-mark.png)
 * - On dark backgrounds: crisp white + sky logo (/logo-mark-light.webp, /logo-mark-light.png)
 * With zero white box or background overlay.
 */
export default function Logo({ variant = 'auto', className, onClick }: LogoProps) {
  if (variant === 'light') {
    return (
      <Link to="/" onClick={onClick} className={cn('inline-flex items-center gap-3 rounded-lg', className)}>
        <picture className="block">
          <source srcSet="/logo-mark-light.webp" type="image/webp" />
          <img src="/logo-mark-light.png" alt="" width={120} height={40} className="h-9 w-auto sm:h-10" />
        </picture>
        <span className="hidden text-sm leading-tight font-bold tracking-tight sm:block text-white">
          Stride Forward
          <span className="block text-xs font-medium text-white/70">
            Technology
          </span>
        </span>
        <span className="sr-only">{siteConfig.name} - home</span>
      </Link>
    )
  }

  return (
    <Link to="/" onClick={onClick} className={cn('inline-flex items-center gap-3 rounded-lg', className)}>
      {/* Light mode: navy logo */}
      <picture className="block dark:hidden">
        <source srcSet="/logo-mark.webp" type="image/webp" />
        <img src="/logo-mark.png" alt="" width={120} height={40} className="h-9 w-auto sm:h-10" />
      </picture>
      {/* Dark mode: crisp white + cyan logo without white background box */}
      <picture className="hidden dark:block">
        <source srcSet="/logo-mark-light.webp" type="image/webp" />
        <img src="/logo-mark-light.png" alt="" width={120} height={40} className="h-9 w-auto sm:h-10" />
      </picture>
      <span className="hidden text-sm leading-tight font-bold tracking-tight sm:block text-fg">
        Stride Forward
        <span className="block text-xs font-medium text-muted">
          Technology
        </span>
      </span>
      <span className="sr-only">{siteConfig.name} - home</span>
    </Link>
  )
}

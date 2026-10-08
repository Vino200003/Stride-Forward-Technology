import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/content'
import { cn } from '../../lib/cn'

type LogoProps = {
  /** "auto" adds a white badge in dark mode; "light" always shows the badge (dark backgrounds) */
  variant?: 'auto' | 'light'
  className?: string
  onClick?: () => void
}

/**
 * Company logo linking to the home page.
 * The original navy + sky logo is used everywhere so the brand colors never change. On dark backgrounds
 * it sits on a small white badge so the navy stays readable.
 * Files: /public/logo-mark.png plus a small .webp copy (240x80) that browsers load first. To change the
 * logo, replace the .png file (keep the same name) and re-export or delete the matching .webp file.
 */
export default function Logo({ variant = 'auto', className, onClick }: LogoProps) {
  return (
    <Link to="/" onClick={onClick} className={cn('inline-flex items-center gap-3 rounded-lg', className)}>
      <picture
        className={cn(
          'block rounded-lg',
          variant === 'light' ? 'bg-white px-2 py-1 shadow-soft' : 'dark:bg-white dark:px-2 dark:py-1',
        )}
      >
        <source srcSet="/logo-mark.webp" type="image/webp" />
        <img src="/logo-mark.png" alt="" width={120} height={40} className="h-9 w-auto sm:h-10" />
      </picture>
      <span
        className={cn(
          'hidden text-sm leading-tight font-bold tracking-tight sm:block',
          variant === 'light' ? 'text-white' : 'text-fg',
        )}
      >
        Stride Forward
        <span className={cn('block text-xs font-medium', variant === 'light' ? 'text-white/70' : 'text-muted')}>
          Technology
        </span>
      </span>
      <span className="sr-only">{siteConfig.name} - home</span>
    </Link>
  )
}

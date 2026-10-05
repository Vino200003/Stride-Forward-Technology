import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/content'
import { cn } from '../../lib/cn'

type LogoProps = {
  /** "auto" swaps to the white version in dark mode; "light" always uses the white version (dark backgrounds) */
  variant?: 'auto' | 'light'
  className?: string
  onClick?: () => void
}

/**
 * Company logo linking to the home page.
 * Files: /public/logo-mark.png (navy) and /public/logo-mark-light.png (white, for dark backgrounds).
 * To change the logo, replace those two files (keep the same names).
 */
export default function Logo({ variant = 'auto', className, onClick }: LogoProps) {
  const img = 'h-9 w-auto sm:h-10'
  return (
    <Link to="/" onClick={onClick} className={cn('inline-flex items-center gap-3 rounded-lg', className)}>
      {variant === 'auto' ? (
        <>
          <img src="/logo-mark.png" alt="" width={120} height={40} className={cn(img, 'dark:hidden')} />
          <img src="/logo-mark-light.png" alt="" width={120} height={40} className={cn(img, 'hidden dark:block')} />
        </>
      ) : (
        <img src="/logo-mark-light.png" alt="" width={120} height={40} className={img} />
      )}
      <span
        className={cn(
          'hidden text-sm leading-tight font-bold tracking-tight sm:block',
          variant === 'light' ? 'text-white' : 'text-fg',
        )}
      >
        Straide Forward
        <span className={cn('block text-xs font-medium', variant === 'light' ? 'text-white/70' : 'text-muted')}>
          Technology
        </span>
      </span>
      <span className="sr-only">{siteConfig.name} - home</span>
    </Link>
  )
}

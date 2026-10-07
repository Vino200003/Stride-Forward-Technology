import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/content'
import { cn } from '../../lib/cn'

type LogoProps = {
  /** "auto" swaps to the white version in dark mode; "light" always uses the white version (dark backgrounds) */
  variant?: 'auto' | 'light'
  className?: string
  onClick?: () => void
}

/** WebP first (much smaller), PNG fallback. */
function LogoImg({ name, className }: { name: 'logo-mark' | 'logo-mark-light'; className: string }) {
  return (
    <picture className={className}>
      <source srcSet={`/${name}.webp`} type="image/webp" />
      <img src={`/${name}.png`} alt="" width={120} height={40} className="h-9 w-auto sm:h-10" />
    </picture>
  )
}

/**
 * Company logo linking to the home page.
 * Files: /public/logo-mark.png (navy) and /public/logo-mark-light.png (white, for dark backgrounds),
 * plus small .webp copies (240x80) that browsers load first. To change the logo, replace the .png files
 * (keep the same names) and re-export or delete the matching .webp files.
 */
export default function Logo({ variant = 'auto', className, onClick }: LogoProps) {
  return (
    <Link to="/" onClick={onClick} className={cn('inline-flex items-center gap-3 rounded-lg', className)}>
      {variant === 'auto' ? (
        <>
          <LogoImg name="logo-mark" className="block dark:hidden" />
          <LogoImg name="logo-mark-light" className="hidden dark:block" />
        </>
      ) : (
        <LogoImg name="logo-mark-light" className="block" />
      )}
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

import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

/** Gradient-tinted rounded square holding an icon, used on cards. */
export default function IconTile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={cn(
        'bg-icon-gradient inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-accent-strong transition-transform duration-300 ease-out',
        className,
      )}
      aria-hidden="true"
    >
      <Icon className="h-5.5 w-5.5" strokeWidth={1.75} />
    </span>
  )
}

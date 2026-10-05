import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/cn'

/** Rounded square holding an icon, used on cards. */
export default function IconTile({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong transition-colors duration-300',
        className,
      )}
      aria-hidden="true"
    >
      <Icon className="h-6 w-6" strokeWidth={2} />
    </span>
  )
}

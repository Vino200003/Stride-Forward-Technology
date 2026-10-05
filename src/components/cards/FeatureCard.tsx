import type { LucideIcon } from 'lucide-react'
import IconTile from '../ui/IconTile'

/** Simple icon + title + text card (Why Choose Us, Values). */
export default function FeatureCard({ icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="group h-full rounded-2xl border border-border bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <IconTile icon={icon} className="group-hover:bg-primary group-hover:text-primary-fg" />
      <h3 className="mt-5 text-lg font-semibold text-fg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  )
}

import type { LucideIcon } from 'lucide-react'
import IconTile from '../ui/IconTile'

/** Simple icon + title + text card (About page values). */
export default function FeatureCard({ icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <div className="card group h-full p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow sm:p-7">
      <IconTile icon={icon} className="group-hover:scale-105" />
      <h3 className="mt-6 text-lg font-bold text-fg">{title}</h3>
      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{description}</p>
    </div>
  )
}

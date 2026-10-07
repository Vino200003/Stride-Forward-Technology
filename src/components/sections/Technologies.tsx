import { technologies } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

type Tech = (typeof technologies.items)[number]

function TechPill({ tech }: { tech: Tech }) {
  const Icon = tech.icon
  return (
    <div className="card flex shrink-0 items-center gap-3 rounded-2xl py-3 pr-6 pl-3 shadow-soft">
      <span
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${tech.color}1a`, color: tech.color }}
        aria-hidden="true"
      >
        <Icon className="h-5.5 w-5.5 dark:brightness-150" strokeWidth={1.75} />
      </span>
      <span>
        <span className="block font-semibold whitespace-nowrap text-fg">{tech.name}</span>
        <span className="block text-xs whitespace-nowrap text-muted">{tech.use}</span>
      </span>
    </div>
  )
}

/** Home: infinite marquee of the technologies we use. Pauses on hover; static for reduced motion. */
export default function Technologies() {
  // Repeat the list so one "half" of the track is always wider than the screen
  const loop = [...technologies.items, ...technologies.items]
  return (
    <section className="section-y overflow-hidden bg-surface-muted" aria-labelledby="technologies">
      <div className="container-page">
        <SectionHeading
          id="technologies"
          eyebrow={technologies.eyebrow}
          title={technologies.title}
          subtitle={technologies.subtitle}
        />
      </div>

      <Reveal className="group relative mt-12 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-16">
        {/* Screen readers get the list once */}
        <ul className="sr-only">
          {technologies.items.map((t) => (
            <li key={t.name}>
              {t.name}: {t.use}
            </li>
          ))}
        </ul>
        <div
          className="animate-marquee flex w-max py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          aria-hidden="true"
        >
          {[0, 1].map((half) => (
            <div key={half} className="flex gap-4 pr-4">
              {loop.map((tech, i) => (
                <TechPill key={`${half}-${i}`} tech={tech} />
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

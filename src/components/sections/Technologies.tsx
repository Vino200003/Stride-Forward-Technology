import { technologies } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/** Home: technology icon grid. */
export default function Technologies() {
  return (
    <section className="bg-surface-muted py-20 sm:py-24" aria-labelledby="technologies">
      <div className="container-page">
        <SectionHeading
          id="technologies"
          eyebrow={technologies.eyebrow}
          title={technologies.title}
          subtitle={technologies.subtitle}
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.items.map((tech, i) => {
            const Icon = tech.icon
            return (
              <li key={tech.name}>
                <Reveal
                  delay={i * 0.06}
                  className="group flex h-full flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${tech.color}1f`, color: tech.color }}
                    aria-hidden="true"
                  >
                    <Icon className="h-7 w-7 dark:brightness-150" />
                  </span>
                  <span className="mt-4 font-semibold text-fg">{tech.name}</span>
                  <span className="mt-1 text-xs text-muted">{tech.use}</span>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

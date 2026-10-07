import { stats } from '../../data/content'
import { cn } from '../../lib/cn'
import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'

/** Home: strip of animated key numbers, directly under the hero. */
export default function StatsStrip() {
  return (
    <section aria-label="Key facts" className="relative">
      <div className="container-page">
        <Reveal>
          <dl className="card grid grid-cols-2 overflow-hidden shadow-soft lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  'flex flex-col-reverse items-center border-border px-4 py-8 text-center sm:px-6 sm:py-10',
                  i % 2 === 1 && 'border-l',
                  i >= 2 && 'border-t lg:border-t-0',
                  i === 2 && 'lg:border-l',
                )}
              >
                <dt className="mt-2 max-w-[14rem] text-sm leading-snug text-muted">{s.label}</dt>
                <dd className="text-gradient font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

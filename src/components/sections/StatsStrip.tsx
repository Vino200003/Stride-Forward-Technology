import { stats } from '../../data/content'
import { cn } from '../../lib/cn'
import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'

/** Home: strip of animated key numbers, directly under the hero. */
export default function StatsStrip() {
  return (
    <section aria-label="Key facts" className="relative pt-3 sm:pt-5 lg:pt-6 pb-6 sm:pb-8 lg:pb-10">
      <div className="container-page">
        <Reveal>
          <dl className="card grid grid-cols-2 overflow-hidden shadow-lift border border-border/80 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  'flex flex-col-reverse items-center border-border px-5 py-7 text-center sm:px-7 sm:py-8 lg:py-9',
                  i % 2 === 1 && 'border-l',
                  i >= 2 && 'border-t lg:border-t-0',
                  i === 2 && 'lg:border-l',
                )}
              >
                <dt className="mt-2.5 max-w-[15rem] text-sm sm:text-base font-semibold leading-snug text-muted">{s.label}</dt>
                <dd className="text-gradient font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
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

import { stats } from '../../data/content'
import { cn } from '../../lib/cn'
import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'

/** Home: strip of animated key numbers, directly under the hero. */
export default function StatsStrip() {
  return (
    <section aria-label="Key facts" className="relative pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20">
      <div className="container-page">
        <Reveal>
          <dl className="card grid grid-cols-2 overflow-hidden shadow-lift border border-border/80 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  'flex flex-col-reverse items-center border-border px-4 py-6 text-center sm:px-6 sm:py-7 lg:py-8',
                  i % 2 === 1 && 'border-l',
                  i >= 2 && 'border-t lg:border-t-0',
                  i === 2 && 'lg:border-l',
                )}
              >
                <dt className="mt-2.5 max-w-[15rem] text-xs sm:text-sm font-semibold leading-snug text-muted">{s.label}</dt>
                <dd className="text-gradient font-display text-5xl sm:text-6xl font-black tracking-tight leading-none">
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

import { process } from '../../data/content'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/** Home: 5-step process as a row of numbered step cards (stacks on smaller screens). */
export default function ProcessTimeline() {
  return (
    <section className="section-y" aria-labelledby="our-process">
      <div className="container-page">
        <SectionHeading id="our-process" eyebrow={process.eyebrow} title={process.title} subtitle={process.subtitle} />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
          {process.steps.map((step, i) => {
            const Icon = step.icon
            const last = i === process.steps.length - 1
            return (
              <li key={step.title} className={last ? 'sm:col-span-2 lg:col-span-1' : undefined}>
                <Reveal delay={i * 0.08} className="h-full">
                <div
                  className="card group relative flex h-full flex-col overflow-hidden p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
                >
                  {/* Big faded step number in the corner */}
                  <span
                    className="pointer-events-none absolute -right-2 -bottom-6 font-display text-8xl font-extrabold text-fg/5 select-none"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold tracking-wide text-accent-strong">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon className="h-5 w-5 text-muted transition-colors group-hover:text-accent-strong" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-lg font-bold text-fg">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

import { projects } from '../../data/content'

type Project = (typeof projects)[number]

/** One project screenshot in a slim browser frame, with its title underneath. */
function ShowcaseCard({ project }: { project: Project }) {
  return (
    <div className="w-56 shrink-0 sm:w-68 lg:w-80">
      <div className="overflow-hidden rounded-2xl border border-border bg-surface p-1.5 shadow-lift">
        <div className="flex items-center gap-1.5 px-2.5 pt-1 pb-2.5">
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
        <div className="aspect-8/5 overflow-hidden rounded-xl bg-surface-muted">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            width={800}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        <p className="truncate text-sm font-semibold text-fg">{project.title}</p>
        <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
          {project.category}
        </span>
      </div>
    </div>
  )
}

/**
 * Hero: an endless, slowly scrolling strip of portfolio projects (Cogntix-style showcase).
 * Pauses on hover; stays still for reduced motion. Purely visual - screen readers get a plain list.
 */
export default function HeroShowcase() {
  // Repeat the list so one "half" of the track is always wider than the screen
  const loop = [...projects, ...projects]
  return (
    <div className="group relative mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <ul className="sr-only" aria-label="Recent projects">
        {projects.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
      <div
        className="animate-marquee flex w-max py-3 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: '70s' }}
        aria-hidden="true"
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex gap-6 pr-6">
            {loop.map((project, i) => (
              <ShowcaseCard key={`${half}-${i}`} project={project} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

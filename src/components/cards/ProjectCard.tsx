import type { Project } from '../../data/content'
import { portfolioPage } from '../../data/content'

/** Portfolio project card: image with tag overlay, title, and Problem / Solution / Result. */
export default function ProjectCard({ project }: { project: Project }) {
  const { labels } = portfolioPage
  const rows = [
    { label: labels.problem, text: project.problem },
    { label: labels.solution, text: project.solution },
    { label: labels.result, text: project.result },
  ]

  return (
    <article className="card group grid h-full overflow-hidden p-2 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow lg:grid-cols-[2fr_3fr] lg:items-center lg:gap-4">
      <div className="relative aspect-8/5 overflow-hidden rounded-[1.1rem] bg-surface-muted">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <span className="glass absolute top-3 left-3 rounded-full border border-white/40 px-3 py-1 text-xs font-semibold text-fg shadow-soft">
          {project.category}
        </span>

        {/* Overlay with tech tags: always visible on touch screens, fades in on hover elsewhere */}
        {project.tags && project.tags.length > 0 && (
          <div className="absolute inset-x-0 bottom-0 flex items-end bg-linear-to-t from-navy-900/85 via-navy-900/40 to-transparent p-4 pt-12 transition-opacity duration-300 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-within:opacity-100">
            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-white/20 bg-white/15 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex flex-col px-4 pt-6 pb-5 sm:px-5 lg:px-6 lg:py-8">
        <h3 className="text-xl font-bold text-fg sm:text-2xl">{project.title}</h3>
        <dl className="mt-5 flex-1 divide-y divide-border text-[0.9375rem]">
          {rows.map((row) => (
            <div key={row.label} className="py-3.5 first:pt-0 last:pb-0">
              <dt className="text-xs font-semibold tracking-[0.12em] text-accent-strong uppercase">{row.label}</dt>
              <dd className="mt-1 leading-relaxed text-muted">{row.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  )
}

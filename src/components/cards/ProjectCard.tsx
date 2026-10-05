import type { Project } from '../../data/content'
import { portfolioPage } from '../../data/content'

/** Portfolio project card: image, title, Problem / Solution / Result, and tech tags. */
export default function ProjectCard({ project }: { project: Project }) {
  const { labels } = portfolioPage
  const rows = [
    { label: labels.problem, text: project.problem },
    { label: labels.solution, text: project.solution },
    { label: labels.result, text: project.result },
  ]

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[8/5] overflow-hidden bg-surface-muted">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-soft backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
        <dl className="mt-4 flex-1 space-y-3 text-sm">
          {rows.map((row) => (
            <div key={row.label}>
              <dt className="font-semibold text-accent-strong">{row.label}</dt>
              <dd className="mt-0.5 leading-relaxed text-muted">{row.text}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-lg bg-surface-muted px-2.5 py-1 text-xs font-medium text-fg">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

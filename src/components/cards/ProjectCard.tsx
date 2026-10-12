import { ArrowRight, CheckCircle2, Zap } from 'lucide-react'
import type { Project } from '../../data/content'
import { portfolioPage } from '../../data/content'
import ProjectMockup from './ProjectMockup'
import { Link } from 'react-router-dom'

/** Linear/Vercel-tier Case Study Card with real coded UI Mockup and business impact metrics */
export default function ProjectCard({ project }: { project: Project }) {
  const { labels } = portfolioPage

  return (
    <article className="card group overflow-hidden border border-border/80 bg-surface/90 shadow-lift transition-all duration-300 hover:border-accent/40 hover:shadow-glow">
      {/* Card Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 bg-surface-muted/50 px-5 py-3.5 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent-strong">
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.status || 'Verified Build'}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-semibold text-muted">
          <span>Enterprise Grade</span>
          <span className="text-border">•</span>
          <span>100% Client Owned</span>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-12 lg:items-center lg:gap-8">
        {/* Left Column: Live Coded UI Mockup */}
        <div className="lg:col-span-6 xl:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-surface-muted/30 p-1 sm:p-2 transition-transform duration-500 group-hover:scale-[1.01]">
            <ProjectMockup projectId={project.id} />
          </div>
        </div>

        {/* Right Column: Case Study Breakdown & Metrics */}
        <div className="flex flex-col justify-between space-y-5 lg:col-span-6 xl:col-span-5">
          <div>
            <h3 className="text-2xl font-extrabold text-fg sm:text-3xl tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-semibold text-accent-strong">
              {project.subtitle}
            </p>

            {/* Problem & Solution */}
            <div className="mt-5 space-y-3.5 text-sm">
              <div className="rounded-xl border border-border/80 bg-surface-muted/30 p-3.5">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                  <Zap className="h-3.5 w-3.5 text-amber-500" />
                  {labels.problem}
                </span>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-fg/80">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-xl border border-border/80 bg-surface-muted/30 p-3.5">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-strong">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                  {labels.solution}
                </span>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-fg/80">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Business Impact Metrics Grid */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="mt-5">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
                  {labels.result}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-accent/20 bg-accent/5 p-2.5 text-center sm:p-3"
                    >
                      <span className="block font-display text-base sm:text-lg font-black text-accent-strong">
                        {m.value}
                      </span>
                      <span className="mt-0.5 block text-[10px] leading-tight text-muted font-medium">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="mt-5">
              <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-fg/70"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 border-t border-border/80 flex items-center justify-between gap-3">
            <span className="text-xs text-muted">Ready to build something similar?</span>
            <Link
              to={`/contact?service=custom-software&ref=${project.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-fg shadow-soft transition-all hover:bg-primary-hover hover:gap-2"
            >
              Request Scoping <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

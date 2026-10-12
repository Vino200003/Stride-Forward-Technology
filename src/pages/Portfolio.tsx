import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  X,
  Zap,
} from 'lucide-react'
import { portfolioPage, projects, seo, type Project } from '../data/content'
import { cn } from '../lib/cn'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import CTABanner from '../components/sections/CTABanner'
import { Link } from 'react-router-dom'

type Filter = (typeof portfolioPage.filters)[number]

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All')
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null)

  const filters = portfolioPage.filters.filter((f) => f === 'All' || projects.some((p) => p.category === f))
  const visibleProjects = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  // Prevent background scrolling when details modal is open
  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = 'hidden'
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveModalProject(null)
      }
      window.addEventListener('keydown', onKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', onKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [activeModalProject])

  return (
    <>
      <Seo {...seo.portfolio} />
      <PageHeader eyebrow={portfolioPage.eyebrow} title={portfolioPage.title} subtitle={portfolioPage.subtitle} />

      <section className="pt-6 pb-20 sm:pt-8 sm:pb-24 lg:pb-28" aria-label="Portfolio Projects">
        <div className="container-page">
          {/* Executive Trust Metrics Strip */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <div className="card p-3 sm:p-3.5 text-center shadow-soft">
              <span className="block font-display text-lg sm:text-xl font-black text-accent-strong">100%</span>
              <span className="text-[10px] sm:text-xs text-muted font-medium">Source Code Ownership</span>
            </div>
            <div className="card p-3 sm:p-3.5 text-center shadow-soft">
              <span className="block font-display text-lg sm:text-xl font-black text-accent-strong">4+</span>
              <span className="text-[10px] sm:text-xs text-muted font-medium">Flagship Systems Live</span>
            </div>
            <div className="card p-3 sm:p-3.5 text-center shadow-soft">
              <span className="block font-display text-lg sm:text-xl font-black text-accent-strong">99.9%</span>
              <span className="text-[10px] sm:text-xs text-muted font-medium">Production Reliability</span>
            </div>
            <div className="card p-3 sm:p-3.5 text-center shadow-soft">
              <span className="block font-display text-lg sm:text-xl font-black text-accent-strong">0</span>
              <span className="text-[10px] sm:text-xs text-muted font-medium">Hidden Licensing Fees</span>
            </div>
          </div>

          {/* Category Filter Pills */}
          {filters.length > 2 && (
            <div className="mb-6 flex justify-center">
              <div
                className="flex flex-wrap justify-center gap-1 rounded-full border border-border bg-surface p-1 shadow-soft"
                role="group"
                aria-label="Filter projects by category"
              >
                {filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFilter(f)}
                    aria-pressed={filter === f}
                    className={cn(
                      'relative min-h-9 rounded-full px-4 text-xs font-semibold transition-colors duration-200 cursor-pointer',
                      filter === f ? 'text-primary-fg' : 'text-muted hover:text-fg',
                    )}
                  >
                    {filter === f && (
                      <motion.span
                        layoutId="portfolio-filter"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">{f}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3-COLUMN RESPONSIVE CARD GRID (3 per row on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {visibleProjects.map((project, index) => {
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setActiveModalProject(project)}
                  className="card group relative flex flex-col justify-between overflow-hidden border border-border/80 bg-surface p-4 sm:p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-glow cursor-pointer"
                >
                  <div>
                    {/* Dedicated Project Image Container - Prominent & Crisp */}
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-border/60 bg-surface-muted/60 shadow-inner">
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-30" />

                      {/* Floating Category Pill */}
                      <div className="absolute top-2.5 left-2.5">
                        <span className="rounded-md bg-surface/90 backdrop-blur-md px-2.5 py-0.5 text-xs font-bold text-fg shadow-2xs border border-border/40">
                          {project.category}
                        </span>
                      </div>

                      {/* Floating Index Number */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="font-mono text-xs font-bold text-white/95 drop-shadow-md bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Project Title & Live Status */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-lg sm:text-xl font-extrabold text-fg tracking-tight group-hover:text-accent-strong transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <span className="flex items-center gap-1.5 shrink-0 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {project.status}
                        </span>
                      </div>

                      <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Tech Stack Pills (Metrics hidden from main card, accessible via click) */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-surface-muted/60 px-2 py-0.5 text-[11px] font-medium text-fg/80"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="rounded-md border border-border/60 bg-surface-muted/30 px-1.5 py-0.5 text-[10px] text-muted">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom: Explore Button */}
                  <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-fg group-hover:text-accent-strong transition-colors">
                      Explore Case Study
                    </span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-muted text-fg transition-all duration-300 group-hover:bg-primary group-hover:text-primary-fg group-hover:translate-x-0.5 shadow-2xs">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {visibleProjects.length === 0 && (
            <p className="mt-12 text-center text-muted">{portfolioPage.empty}</p>
          )}
        </div>
      </section>

      {/* FULL DETAILS POPUP MODAL (Opens on Card Click) */}
      <AnimatePresence>
        {activeModalProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveModalProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl max-h-[92vh] overflow-y-auto rounded-3xl border border-border bg-surface p-5 sm:p-7 lg:p-9 shadow-lift"
            >
              {/* Modal Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close details popup"
                className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:bg-surface-muted hover:text-fg shadow-soft cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-12">
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-accent-soft px-2.5 py-0.5 text-xs font-bold text-accent-strong">
                    {activeModalProject.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {activeModalProject.status}
                  </span>
                </div>
                <h2 id="modal-project-title" className="mt-2 text-2xl sm:text-3xl font-black text-fg tracking-tight">
                  {activeModalProject.title}
                </h2>
                <p className="text-sm font-semibold text-accent-strong">{activeModalProject.subtitle}</p>
              </div>

              {/* Modal Visual Showcase: New High-Res Project Image Only */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-border/70 bg-surface-muted/50 shadow-soft">
                <div className="px-3.5 py-2 bg-surface-muted/80 border-b border-border/60 text-[11px] font-semibold text-muted flex items-center justify-between">
                  <span>Live Production System Interface</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-strong">Production Build</span>
                </div>
                <div className="aspect-16/10 sm:aspect-16/9 w-full overflow-hidden bg-black/5">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.imageAlt || activeModalProject.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>

              {/* 3 Business Impact Metrics */}
              {activeModalProject.metrics && activeModalProject.metrics.length > 0 && (
                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {activeModalProject.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-accent/20 bg-accent/5 p-3 text-center sm:p-3.5"
                    >
                      <span className="block font-display text-base sm:text-xl font-black text-accent-strong font-mono">
                        {m.value}
                      </span>
                      <span className="mt-0.5 block text-[10px] sm:text-xs text-muted font-medium">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Challenge & Solution Breakdown */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2 text-xs sm:text-sm">
                <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-3.5 sm:p-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                    <Zap className="h-3.5 w-3.5 text-amber-500" />
                    The Business Challenge
                  </span>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-fg/80">
                    {activeModalProject.problem}
                  </p>
                </div>

                <div className="rounded-xl border border-border/80 bg-surface-muted/40 p-3.5 sm:p-4">
                  <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent-strong">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent" />
                    Engineered Solution
                  </span>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-fg/80">
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* Technologies & Enterprise Handover Guarantee */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-muted mr-1">Stack:</span>
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-fg/75 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted font-medium">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Enterprise Security & Full Source IP Handover</span>
                </div>
              </div>

              {/* Modal CTA Action Bar */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-border bg-surface-muted/40 p-4">
                <span className="text-xs text-muted text-center sm:text-left">
                  Need a custom solution similar to {activeModalProject.title}?
                </span>
                <Link
                  to={`/contact?service=custom-software&ref=${activeModalProject.id}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-fg shadow-soft transition-colors hover:bg-primary-hover w-full sm:w-auto"
                >
                  <span>Request Similar Project Scope</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CTABanner />
    </>
  )
}

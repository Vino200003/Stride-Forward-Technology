import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import { portfolioPage, projects, seo } from '../data/content'
import { cn } from '../lib/cn'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import ProjectCard from '../components/cards/ProjectCard'
import CTABanner from '../components/sections/CTABanner'

type Filter = (typeof portfolioPage.filters)[number]

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <Seo {...seo.portfolio} />
      <PageHeader eyebrow={portfolioPage.eyebrow} title={portfolioPage.title} subtitle={portfolioPage.subtitle} />

      <section className="py-16 sm:py-20" aria-label="Projects">
        <div className="container-page">
          <Reveal className="flex flex-col items-center justify-between gap-5 sm:flex-row">
            {/* Honesty label */}
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-fg shadow-soft">
              <Lightbulb className="h-4 w-4 text-accent-strong" aria-hidden="true" />
              {portfolioPage.conceptLabel}
            </p>

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
              {portfolioPage.filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={cn(
                    'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200',
                    filter === f
                      ? 'bg-primary text-primary-fg shadow-soft'
                      : 'border border-border bg-surface text-muted hover:border-accent hover:text-fg',
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>

          <p className="sr-only" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>

          <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((project) => (
                <motion.li
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard project={project} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
          {visible.length === 0 && <p className="mt-10 text-center text-muted">{portfolioPage.empty}</p>}
        </div>
      </section>

      <CTABanner />
    </>
  )
}

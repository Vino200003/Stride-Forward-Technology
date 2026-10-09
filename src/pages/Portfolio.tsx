import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  // Only offer categories that have projects; hide the filter entirely when there is just one
  const filters = portfolioPage.filters.filter((f) => f === 'All' || projects.some((p) => p.category === f))

  return (
    <>
      <Seo {...seo.portfolio} />
      <PageHeader eyebrow={portfolioPage.eyebrow} title={portfolioPage.title} subtitle={portfolioPage.subtitle} />

      <section className="pt-12 pb-24 sm:pt-16 lg:pb-32" aria-label="Projects">
        <div className="container-page">
          {filters.length > 2 && (
            <Reveal className="flex justify-center">
              {/* Category filter */}
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
                      'relative min-h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-200',
                      filter === f ? 'text-primary-fg' : 'text-muted hover:text-fg',
                    )}
                  >
                    {filter === f && (
                      <motion.span
                        layoutId="portfolio-filter"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 34,
                        }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">{f}</span>
                  </button>
                ))}
              </div>
            </Reveal>
          )}

          <h2 className="sr-only">Projects</h2>
          <p className="sr-only" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>

          {/* Projects stacked one after another, image always on the same side */}
          <motion.ul layout className="mt-10 flex flex-col gap-8 lg:mt-12 lg:gap-10">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((project) => (
                <motion.li
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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

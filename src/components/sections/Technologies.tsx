import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { technologies, type TechItem } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { CheckCircle2, Sparkles } from 'lucide-react'

function TechCard({ tech }: { tech: TechItem }) {
  const Icon = tech.icon
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="card group relative flex flex-col justify-between overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
    >
      <div>
        <div className="flex items-center justify-between">
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${tech.color}15`, color: tech.color }}
            aria-hidden="true"
          >
            <Icon className="h-6 w-6 dark:brightness-125" strokeWidth={1.75} />
          </span>

          <span className="rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-[11px] font-semibold text-muted">
            {tech.badge}
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-base font-bold text-fg group-hover:text-accent-strong transition-colors">
            {tech.name}
          </h3>
          <span className="text-xs font-semibold text-accent-strong">{tech.use}</span>
          <p className="mt-2 text-xs leading-relaxed text-muted">{tech.description}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 pt-3 border-t border-border/60 text-[11px] text-muted">
        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
        <span>Production Verified</span>
      </div>
    </motion.div>
  )
}

/** Home: Modern Categorized Architecture & Tech Stack Matrix (Zero Marquees) */
export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filteredItems =
    activeCategory === 'all'
      ? technologies.items
      : technologies.items.filter((item) => item.category === activeCategory)

  return (
    <section className="section-y bg-surface-muted/50" aria-labelledby="technologies">
      <div className="container-page">
        <SectionHeading
          id="technologies"
          eyebrow={technologies.eyebrow}
          title={technologies.title}
          subtitle={technologies.subtitle}
        />

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-1.5" role="tablist">
          {technologies.categories.map((cat) => {
            const isSelected = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'text-primary-fg shadow-sm'
                    : 'text-muted hover:text-fg bg-surface border border-border/80'
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="tech-category-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    aria-hidden="true"
                  />
                )}
                <span className="relative">{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Technology Matrix Grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </AnimatePresence>
        </div>

        {/* Architectural Assurance Banner */}
        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-fg">Have a specific technology preference?</p>
                <p className="text-xs text-muted">We build systems that cleanly integrate into your existing stack.</p>
              </div>
            </div>
            <a
              href="/contact"
              className="shrink-0 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-fg shadow-soft hover:bg-primary-hover transition-colors"
            >
              Consult Stack Architecture
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

import { Target } from 'lucide-react'
import { aboutPage, seo } from '../data/content'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Reveal from '../components/ui/Reveal'
import FeatureCard from '../components/cards/FeatureCard'
import TeamCard from '../components/cards/TeamCard'
import CTABanner from '../components/sections/CTABanner'

export default function About() {
  return (
    <>
      <Seo {...seo.about} />
      <PageHeader eyebrow={aboutPage.eyebrow} title={aboutPage.title} subtitle={aboutPage.subtitle} />

      {/* Story + mission */}
      <section className="section-y" aria-labelledby="our-story">
        <div className="container-page grid gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <h2 id="our-story" className="text-h2 font-bold text-fg">
              {aboutPage.storyTitle}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              {aboutPage.story.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="bg-brand-gradient relative isolate overflow-hidden rounded-3xl p-8 text-white shadow-lift ring-1 ring-white/10 sm:p-10">
              <div className="bg-noise absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay" aria-hidden="true" />
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-sky/40 blur-3xl" aria-hidden="true" />
              <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="relative mt-5 text-2xl font-bold">{aboutPage.missionTitle}</h2>
              <p className="relative mt-3 text-lg leading-relaxed text-white/90">{aboutPage.mission}</p>
            </div>
            <dl className="mt-6 grid grid-cols-3 gap-3">
              {aboutPage.stats.map((s) => (
                <div
                  key={s.label}
                  className="card flex flex-col-reverse p-4 text-center shadow-soft"
                >
                  <dt className="mt-1 text-xs leading-snug text-muted">{s.label}</dt>
                  <dd className="text-gradient font-display text-xl font-extrabold tracking-tight sm:text-2xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-surface-muted" aria-labelledby="our-values">
        <div className="container-page">
          <SectionHeading id="our-values" title={aboutPage.valuesTitle} subtitle={aboutPage.valuesSubtitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {aboutPage.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="h-full">
                <FeatureCard {...v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-y" aria-labelledby="our-team">
        <div className="container-page">
          <SectionHeading id="our-team" title={aboutPage.teamTitle} subtitle={aboutPage.teamSubtitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {aboutPage.team.map((m, i) => (
              <Reveal key={m.role} delay={i * 0.08} className="h-full">
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}

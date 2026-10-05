import type { LegalSection } from '../data/content'
import Seo from './ui/Seo'

type Props = {
  seo: { title: string; description: string }
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

/** Shared layout for the Privacy Policy and Terms pages. */
export default function LegalPage({ seo, title, updated, intro, sections }: Props) {
  return (
    <>
      <Seo {...seo} />
      <article className="container-page max-w-3xl py-16 sm:py-24">
        <header className="border-b border-border pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-fg sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">{updated}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted">{intro}</p>
        </header>
        <div className="mt-10 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl font-semibold text-fg">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 24)} className="mt-3 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  )
}

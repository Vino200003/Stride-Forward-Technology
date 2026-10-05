import SectionHeading from './SectionHeading'

/** Header band used at the top of inner pages (Services, About, etc.). */
export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-muted">
      <div
        className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <div
        className="absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-navy/15 blur-3xl dark:bg-accent/10"
        aria-hidden="true"
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} subtitle={subtitle} />
      </div>
    </section>
  )
}

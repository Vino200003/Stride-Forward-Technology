import SectionHeading from './SectionHeading'

/** Header band used at the top of inner pages (Services, About, etc.). */
export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div
        className="bg-lines absolute inset-0 -z-10 mask-[radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 -z-10 h-96 w-3xl max-w-[140%] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl dark:bg-accent/15"
        aria-hidden="true"
      />
      <div className="container-page relative pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-32">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} subtitle={subtitle} className="max-w-3xl" />
      </div>
    </section>
  )
}

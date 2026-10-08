import SectionHeading from './SectionHeading'

/** Centered header band used at the top of inner pages (Services, About, etc.). */
export default function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative isolate -mt-16 overflow-hidden pt-16 sm:-mt-20 sm:pt-20">
      <div
        className="bg-lines absolute inset-0 -z-10 mask-[radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-48 left-1/2 -z-10 h-120 w-4xl max-w-[160%] -translate-x-1/2 rounded-full bg-accent/20 blur-[110px] dark:bg-accent/15"
        aria-hidden="true"
      />
      <div className="container-page relative pt-16 pb-12 sm:pt-24 sm:pb-16 lg:pt-28">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} subtitle={subtitle} className="max-w-3xl" />
      </div>
    </section>
  )
}

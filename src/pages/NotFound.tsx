import { Link } from 'react-router-dom'
import { ArrowRight, Home } from 'lucide-react'
import { navLinks, notFoundPage, seo } from '../data/content'
import Seo from '../components/ui/Seo'
import { ButtonLink } from '../components/ui/Button'

export default function NotFound() {
  const quickLinks = navLinks.filter((l) => l.to !== '/')
  return (
    <>
      <Seo {...seo.notFound} noIndex />
      <section className="relative isolate overflow-hidden">
        <div
          className="bg-lines absolute inset-0 -z-10 mask-[radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/4 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
          aria-hidden="true"
        />
        <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
          <p className="text-gradient font-display text-[clamp(6rem,4rem+10vw,11rem)] leading-none font-extrabold tracking-[-0.06em] select-none">
            404
          </p>
          <h1 className="text-h2 mt-6 font-bold text-fg">{notFoundPage.title}</h1>
          <p className="mt-4 max-w-md text-lg text-muted">{notFoundPage.body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/">
              <Home className="h-4 w-4" aria-hidden="true" />
              {notFoundPage.cta}
            </ButtonLink>
            <ButtonLink to="/contact" variant="secondary">
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <nav aria-label="Popular pages" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-flex min-h-11 items-center rounded-lg px-3 text-muted transition-colors hover:text-accent-strong"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </>
  )
}

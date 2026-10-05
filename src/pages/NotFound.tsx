import { ArrowLeft } from 'lucide-react'
import { notFoundPage, seo } from '../data/content'
import Seo from '../components/ui/Seo'
import { ButtonLink } from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo {...seo.notFound} noIndex />
      <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="text-gradient text-7xl font-extrabold sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-fg">{notFoundPage.title}</h1>
        <p className="mt-3 max-w-md text-muted">{notFoundPage.body}</p>
        <ButtonLink to="/" className="mt-8">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {notFoundPage.cta}
        </ButtonLink>
      </section>
    </>
  )
}

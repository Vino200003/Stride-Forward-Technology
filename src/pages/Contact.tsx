import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contactPage, seo, siteConfig } from '../data/content'
import { whatsappLink } from '../lib/whatsapp'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import SocialIcon from '../components/ui/SocialIcon'
import ContactForm from '../components/ContactForm'

const details = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: 'Phone', value: siteConfig.phone, href: siteConfig.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: whatsappLink, external: true },
  { icon: MapPin, label: 'Address', value: siteConfig.address },
]

export default function Contact() {
  return (
    <>
      <Seo {...seo.contact} />
      <PageHeader eyebrow={contactPage.eyebrow} title={contactPage.title} subtitle={contactPage.subtitle} />

      <section className="py-16 sm:py-20" aria-label="Contact">
        <div className="container-page grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-10">
              <h2 className="text-2xl font-bold text-fg">{contactPage.formTitle}</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          {/* Details */}
          <Reveal delay={0.1} className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
              <h2 className="text-lg font-bold text-fg">{contactPage.detailsTitle}</h2>
              <ul className="mt-5 space-y-5">
                {details.map(({ icon: Icon, label, value, href, external }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-muted">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                          className="rounded font-semibold break-words text-fg transition-colors hover:text-accent-strong"
                        >
                          {value}
                          {external && <span className="sr-only"> (opens in a new tab)</span>}
                        </a>
                      ) : (
                        <p className="font-semibold text-fg">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8">
              <h2 className="flex items-center gap-2 text-lg font-bold text-fg">
                <Clock className="h-5 w-5 text-accent-strong" aria-hidden="true" />
                {contactPage.hoursTitle}
              </h2>
              <dl className="mt-4 space-y-2 text-sm">
                {siteConfig.workingHours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-b border-border pb-2 last:border-0">
                    <dt className="text-muted">{h.days}</dt>
                    <dd className="font-medium text-fg">{h.hours}</dd>
                  </div>
                ))}
              </dl>

              <h2 className="mt-8 text-lg font-bold text-fg">{contactPage.socialTitle}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {siteConfig.socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.name} (opens in a new tab)`}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent-strong"
                    >
                      <SocialIcon name={s.name} className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Map placeholder
            TODO: replace this block with a Google Maps embed, e.g.
            <iframe title="Our location" src="https://www.google.com/maps/embed?pb=..." loading="lazy" className="h-full w-full" /> */}
        <Reveal className="container-page mt-8">
          <div
            className="relative flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface-muted sm:h-96"
            role="img"
            aria-label={`Map placeholder. ${contactPage.mapNote}`}
          >
            <div className="bg-grid absolute inset-0" aria-hidden="true" />
            <svg className="absolute inset-0 h-full w-full text-border" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 800 400">
              <path d="M0 260 C200 220 260 330 420 280 S650 150 800 190" fill="none" stroke="currentColor" strokeWidth="14" />
              <path d="M260 0 C300 120 220 240 300 400" fill="none" stroke="currentColor" strokeWidth="10" />
              <path d="M560 0 L520 400" fill="none" stroke="currentColor" strokeWidth="8" />
            </svg>
            <div className="relative flex flex-col items-center text-center">
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-fg shadow-lift">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </span>
              <p className="mt-4 font-semibold text-fg">{contactPage.mapTitle}</p>
              <p className="mt-1 max-w-xs px-4 text-sm text-muted">{contactPage.mapNote}</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}

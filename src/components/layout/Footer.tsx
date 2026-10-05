import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { footer, navLinks, services, siteConfig } from '../../data/content'
import SocialIcon from '../ui/SocialIcon'
import Logo from './Logo'

const linkClass = 'rounded text-sm text-white/75 transition-colors hover:text-white'

/** Site footer. Always dark navy, so it uses the white logo. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-dark text-white">
      <div
        className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-sky/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-page relative grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">{footer.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social media">
            {siteConfig.socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${siteConfig.name} on ${s.name} (opens in a new tab)`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all hover:-translate-y-0.5 hover:bg-sky hover:text-navy"
                >
                  <SocialIcon name={s.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <nav className="lg:col-span-2" aria-labelledby="footer-quick-links">
          <h2 id="footer-quick-links" className="text-sm font-semibold tracking-wider text-white uppercase">
            {footer.quickLinksTitle}
          </h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav className="lg:col-span-3" aria-labelledby="footer-services">
          <h2 id="footer-services" className="text-sm font-semibold tracking-wider text-white uppercase">
            {footer.servicesTitle}
          </h2>
          <ul className="mt-4 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold tracking-wider text-white uppercase">{footer.contactTitle}</h2>
          <address className="mt-4 space-y-3 text-sm text-white/75 not-italic">
            <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 rounded hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              <span className="break-all">{siteConfig.email}</span>
            </a>
            <a href={siteConfig.phoneHref} className="flex items-start gap-3 rounded hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              {siteConfig.phone}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              {siteConfig.address}
            </p>
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              {siteConfig.workingHours[0].days}, {siteConfig.workingHours[0].hours}
            </p>
          </address>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-sm text-white/70 sm:flex-row">
          <p>
            © {siteConfig.year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {footer.legal.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

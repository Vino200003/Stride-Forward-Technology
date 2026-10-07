# Stride Forward Technology - Website

React + Vite + TypeScript + Tailwind CSS v4 + React Router + Framer Motion + lucide-react.

## Run it

```bash
npm install       # first time only
npm run dev       # dev server at http://localhost:5173
npm run build     # type-check + production build into /dist
npm run preview   # preview the production build
```

When you deploy, set up a rewrite so every route serves `index.html`, since this is a single-page app. On Netlify, add a `_redirects` file containing `/* /index.html 200`. Vercel handles this automatically for Vite projects.

## Where to edit

| What | Where |
| --- | --- |
| **All text** (pages, services, projects, FAQ, team, legal) | `src/data/content.ts` |
| Company name, email, phone, WhatsApp, address, socials, domain | `siteConfig` at the top of `src/data/content.ts` |
| **Colors** (light + dark) | CSS variables at the top of `src/index.css` (navy/sky 50-900 scales are in the `@theme` block) |
| Fonts | Self-hosted in `public/fonts` (Plus Jakarta Sans for headings, Inter for text), declared at the top of `src/index.css` |
| Home stats strip | `stats` in `src/data/content.ts` (keep the numbers true) |
| **Logo** | Replace `public/logo-mark.png` (navy, for light backgrounds) and `public/logo-mark-light.png` (white, for dark backgrounds), then re-export or delete the matching `.webp` files (240x80) |
| Favicon / social share image | `public/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png`, `og-image.png` |
| Portfolio images | `public/images/portfolio/*.svg`. Replace with screenshots and update `image` in `content.ts` |
| Team photos | `public/images/team/*`. Update `image` in `content.ts` |
| Contact form sending | `submitContactForm()` in `src/components/ContactForm.tsx` (see the TODO) |
| Newsletter signup | `subscribe()` in `src/components/layout/Footer.tsx` (see the TODO); text in `footer.newsletter` |
| Map | TODO comment in `src/pages/Contact.tsx` |

Search `content.ts` for **PLACEHOLDER** to find everything that still needs real information.

## Brand colors (from the logo)

- Navy `#022A68` is the primary color: buttons, links and headings in light mode.
- Sky `#01A3FD` is the accent: icons, highlights and gradients. In dark mode it is also the button color.
- `#0369A1` is a darker sky used when the accent is text, so it passes WCAG AA on white.

## Structure

```
src/
  data/content.ts        all site text
  index.css              theme tokens + custom utilities
  context/               light/dark theme
  components/
    layout/              Navbar, Footer, Logo, Layout, ThemeToggle, FloatingButtons
    sections/            Home page sections (Hero, Process, FAQ, CTA, etc.)
    cards/               ServiceCard, ProjectCard, TestimonialCard, FAQItem, TeamCard, FeatureCard
    ui/                  Button, Reveal, SectionHeading, PageHeader, Seo, SocialIcon, IconTile
    ContactForm.tsx, LegalPage.tsx
  pages/                 one file per route (lazy-loaded)
```

import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { siteConfig } from '../../data/content'

type SeoProps = { title: string; description: string; image?: string; noIndex?: boolean }

/** Sets the page title, meta description, canonical URL, and Open Graph / Twitter tags. */
export default function Seo({ title, description, image = '/og-image.png', noIndex }: SeoProps) {
  const { pathname } = useLocation()
  const url = `${siteConfig.url}${pathname === '/' ? '' : pathname}`
  const fullTitle = `${title} | ${siteConfig.name}`
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}

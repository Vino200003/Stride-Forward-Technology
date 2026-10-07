import { seo } from '../data/content'
import Seo from '../components/ui/Seo'
import Hero from '../components/sections/Hero'
import StatsStrip from '../components/sections/StatsStrip'
import WhatWeDo from '../components/sections/WhatWeDo'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import Technologies from '../components/sections/Technologies'
import FAQ from '../components/sections/FAQ'
import CTABanner from '../components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero />
      <StatsStrip />
      <WhatWeDo />
      <WhyChooseUs />
      <ProcessTimeline />
      <Technologies />
      <FAQ />
      <CTABanner />
    </>
  )
}

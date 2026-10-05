import { seo } from '../data/content'
import Seo from '../components/ui/Seo'
import Hero from '../components/sections/Hero'
import WhatWeDo from '../components/sections/WhatWeDo'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ProcessTimeline from '../components/sections/ProcessTimeline'
import Technologies from '../components/sections/Technologies'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import CTABanner from '../components/sections/CTABanner'

export default function Home() {
  return (
    <>
      <Seo {...seo.home} />
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <ProcessTimeline />
      <Technologies />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}

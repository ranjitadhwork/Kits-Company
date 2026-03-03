import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSection } from '@/components/home/hero-section'
import { ValuePropsSection } from '@/components/home/value-props-section'
import { ProductLinesSection } from '@/components/home/product-lines-section'
import { BringJoySection } from '@/components/home/bring-joy-section'
import { HowItWorksSection } from '@/components/home/how-it-works-section'
import { NewsletterSection } from '@/components/home/newsletter-section'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ValuePropsSection />
        <ProductLinesSection />
        <BringJoySection />
        <HowItWorksSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </>
  )
}

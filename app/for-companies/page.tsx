import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CompanyContactForm } from '@/components/company-contact-form'

export const metadata: Metadata = {
  title: 'For Companies | The Kits Company',
  description:
    'Business opportunities and cooperation. Corporate gifting, distribution, and wholesale partnerships with The Kits Company.',
}

export default function ForCompaniesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white pt-24">
        {/* Hero text */}
        <section className="mx-auto max-w-3xl px-6 py-16 text-center lg:px-8 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
            Business Opportunities and Cooperation
          </p>
          <h1 className="mt-6 font-serif text-3xl leading-[1.2] tracking-wide text-foreground md:text-4xl lg:text-5xl text-balance">
            For Companies
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {"Whether you're a distributor, wholesaler, or retailer, we're eager to connect and explore mutually beneficial cooperation opportunities."}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {'Looking for corporate gifting or ways to "wow" your employees and customers? We have exceptional solutions tailored just for you.'}
          </p>
        </section>

        {/* Contact form */}
        <section className="mx-auto max-w-2xl px-6 pb-24 lg:px-8 lg:pb-32">
          <div className="rounded-2xl border border-border bg-[#f5f5f5] p-8 md:p-12">
            <h2 className="font-serif text-2xl tracking-wide text-foreground text-center">
              Get in touch
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Fill out the form below and our team will be in touch shortly.
            </p>
            <CompanyContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

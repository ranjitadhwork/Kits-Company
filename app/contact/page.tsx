import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us | The Kits Company',
  description:
    'Get in touch with The Kits Company. We are here to help with orders, product questions, and more.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left column - info */}
            <div>
              <Image
                src="/images/tkc-logo.png"
                alt="The Kits Company logo"
                width={160}
                height={36}
                className="mb-6"
              />
              <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
                Contact Us
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Have a question about your order, our products, or anything else?
                We{"'"}d love to hear from you. Fill out the form and our team will
                get back to you as soon as possible.
              </p>
              <Image
                src="/images/fork-spaghetti.png"
                alt="Fork with spaghetti"
                width={500}
                height={160}
                className="mt-8"
              />
            </div>

            {/* Right column - form */}
            <div className="rounded-lg border border-border bg-secondary/30 p-6 md:p-8">
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

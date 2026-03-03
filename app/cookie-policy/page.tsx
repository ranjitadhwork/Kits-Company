import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Cookie Policy | The Kits Company',
  description:
    'Learn how The Kits Company uses cookies to enhance your browsing experience.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Cookie Policy
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We use cookies to enhance your experience on thekitscompany.com.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Essential Cookies
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Required for the shopping cart and secure checkout.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Performance Cookies
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We use traffic log cookies to analyze how you use the site and
                improve our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Control
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                You can choose to decline cookies via your browser settings,
                though this may limit website functionality.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Privacy
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Cookies do not give us access to your computer or any personal
                data you have not shared.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Shipping & Delivery | The Kits Company',
  description:
    'Learn about our shipping rates, delivery times, and perishable handling for The Kits Company meal kits.',
}

export default function ShippingPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Shipping Policy
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            At thekitscompany.com, we strive to deliver your fresh pasta kits as
            quickly as possible to ensure maximum quality.
          </p>

          <div className="mt-12 flex flex-col gap-10">
            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Processing Time
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Orders are processed within 1{'\u20132'} business days. You will
                receive a notification once your kit has shipped.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Shipping Rates
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Delivery charges are calculated at checkout based on your
                location and the weight of your order.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Delivery Estimates
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Standard shipping typically takes 2{'\u20134'} business days
                within the UK. Please note that delivery times are estimates and
                not guaranteed.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Perishable Handling
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Our kits are packed to maintain freshness. It is your
                responsibility to ensure someone is available to receive the
                delivery or to provide a safe place for the courier.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl tracking-tight text-foreground">
                Damaged Goods
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                If your package arrives damaged or the food quality is
                compromised, please contact info@voscaltd.com with photos within
                12 hours of delivery.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Us | The Kits Company',
  description:
    'Hearty meals made convenient. Create tasty, simple and uncomplicated Italian meal sets that give people more time to enjoy food with pleasure.',
}

const beliefs = [
  {
    title: 'Authenticity & Simplicity',
    description:
      'Authentic Italian food is not only simple and tasty, it should be easy to make at home.',
  },
  {
    title: 'Quality & Health',
    description:
      'Convenient food can be healthy and produced with high quality ingredients.',
  },
  {
    title: 'Sustainability',
    description:
      'Sustainability can be achieved by engineering our products with the right proportion to avoid waste.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-24">
        {/* Brand Idea Hero */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative aspect-square flex items-center justify-center">
              <Image
                src="/images/about-heart-pasta.png"
                alt="Spaghetti nest with heart-shaped tomato sauce and fresh basil"
                width={520}
                height={520}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Brand Idea
              </p>
              <h1 className="mt-4 font-serif text-3xl leading-[1.15] tracking-wide text-foreground md:text-4xl lg:text-5xl text-balance">
                Hearty Meals Made Convenient
              </h1>

              <div className="mt-10">
                <h2 className="font-serif text-xl tracking-wide text-foreground md:text-2xl">
                  Reason to Exist
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Create tasty, simple and uncomplicated Italian meal sets that
                  give people more time to enjoy food with pleasure.
                </p>
              </div>

              <div className="mt-10">
                <h2 className="font-serif text-xl tracking-wide text-foreground md:text-2xl">
                  We believe that
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Authentic Italian food is not only simple and tasty, it
                    should be easy to make at home.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Convenient food can be healthy and produced with high
                    quality ingredients.
                  </p>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Sustainability can be achieved by engineering our products
                    with the right proportion to avoid waste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Our Pillars
              </p>
              <h2 className="mt-4 font-serif text-4xl tracking-wide text-foreground md:text-5xl">
                What drives us
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {beliefs.map((belief, index) => (
                <div
                  key={belief.title}
                  className="rounded-md border border-border bg-background p-8"
                >
                  <span className="text-xs font-medium text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-serif text-xl tracking-wide text-foreground">
                    {belief.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/sustainability-pasta-3.png"
                alt="Three colorful fusilli pasta spirals in green, yellow, and orange representing sustainable, mindful cooking"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                Sustainability
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.15] tracking-wide text-foreground md:text-4xl text-balance">
                Mindful cooking, zero waste
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We champion a more mindful and sustainable way of cooking
                globally, through thoughtful preparation methods and strict
                portion control.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                All ingredients included in our kits are already in the right
                doses! This means zero leftovers, zero waste, and a positive
                environmental impact, all without sacrificing flavor.
              </p>
              <Button
                size="lg"
                className="mt-8 w-fit bg-accent text-accent-foreground hover:bg-accent/90 tracking-wide"
                asChild
              >
                <Link href="/shop">
                  Check out the kits!
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-4xl tracking-wide text-foreground md:text-5xl text-balance">
                Ready to taste the difference?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Browse our collection and discover your new favourite meal.
              </p>
              <Button
                size="lg"
                className="mt-8 tracking-wide"
                asChild
              >
                <Link href="/shop">
                  Shop Now
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

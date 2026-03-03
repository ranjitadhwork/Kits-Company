import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-white pt-16">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-foreground/60">
              Italian Meal Kits
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Meal kits for modern life
            </h1>
            <p className="mt-3 font-serif text-2xl tracking-tight text-foreground/50 md:text-3xl">
              from everyday convenience to gourmet experiences
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-md">
              We create curated meal kits that simplify cooking, reduce waste, combine convenience and quality and fit naturally into everyday life and special occasions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full bg-foreground px-8 text-background hover:bg-foreground/90 text-sm tracking-widest uppercase"
                asChild
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-foreground/30 px-8 text-sm tracking-widest uppercase hover:bg-foreground/5"
                asChild
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>

          {/* Image column */}
          <div className="relative order-1 aspect-[3/4] max-h-[600px] overflow-hidden rounded-lg lg:order-2">
            <Image
              src="/images/hero-paccheri-couple.png"
              alt="Boccon Divino Paccheri al Ragù di Mare meal kit with a couple cooking in the background"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ProductLinesSection() {
  return (
    <section className="bg-white">
      {/* Boccon Divino */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Link
            href="/shop?line=gourmet"
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/images/boccon-divino-tris.png"
              alt="Three Boccon Divino premium Italian meal kit boxes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Boccon Divino
            </h2>
            <p className="mt-3 text-lg font-medium text-foreground">
              Gourmet Italian, effortlessly.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Boccon Divino is a line of premium Italian meal kits created to
              deliver true Italian flavour with refined simplicity.
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              Each box is carefully composed to guarantee a perfect result every
              time {'\u2014'} no extra ingredients, no unnecessary steps, no surprises.
            </p>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.15em] text-foreground">
              Each Boccon Divino box includes:
            </p>
            <ul className="mt-3 flex flex-col gap-1.5 text-base text-muted-foreground">
              <li>Artisanal Italian pasta</li>
              <li>Premium, chef-crafted sauces</li>
              <li>An exclusive Boccon Divino sea-salt tablet, precisely calibrated for the dish</li>
            </ul>

            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-full border-foreground/30 text-foreground hover:bg-foreground hover:text-white text-sm tracking-widest uppercase"
              asChild
            >
              <Link href="/shop?line=gourmet">
                Explore
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <hr className="border-border" />
      </div>

      {/* Bona Pasta */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:[&>*:first-child]:order-2">
          <Link
            href="/shop?line=everyday"
            className="group relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="/images/bona-pasta-box.jpg"
              alt="Bona Pasta Penne al Pesto alla Genovese meal kit box"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Bona Pasta
            </h2>
            <p className="mt-3 text-lg font-medium text-foreground">
              Italian meals. Made easy.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Bona Pasta brings authentic Italian flavour to your table with
              effortless, everyday pasta meal kits.
            </p>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              Each Bona Pasta box is perfectly portioned and thoughtfully
              curated to help you cook a delicious Italian meal in minutes
              {' \u2014 '}no guesswork, no waste, no compromise on taste.
            </p>

            <p className="mt-6 text-sm font-medium uppercase tracking-[0.15em] text-foreground">
              Every box includes:
            </p>
            <ul className="mt-3 flex flex-col gap-1.5 text-base text-muted-foreground">
              <li>Premium Italian pasta</li>
              <li>A carefully matched sauce or pesto</li>
              <li>An exclusive Bona sea-salt tablet, precisely dosed for perfect seasoning</li>
            </ul>

            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-full border-foreground/30 text-foreground hover:bg-foreground hover:text-white text-sm tracking-widest uppercase"
              asChild
            >
              <Link href="/shop?line=everyday">
                Explore
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

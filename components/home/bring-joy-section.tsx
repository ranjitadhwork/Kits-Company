import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function BringJoySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/woman-eating-pasta.png"
              alt="Woman enjoying a plate of pasta"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="font-serif text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Bring joy back to your table
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Meals should feel meaningful, not stressful. Our Italian meal kits
              are crafted to make cooking a moment of pleasure, simple,
              comforting, and full of flavor. All ingredients you need are
              already measured, balanced, and ready to come together beautifully.
              Whether you{"'"}re looking for a quick, satisfying meal or a gourmet
              experience for special occasions, our kits make every plate feel
              like something to celebrate.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="mt-8 rounded-full border-foreground/30 text-foreground hover:bg-foreground hover:text-white text-sm tracking-widest uppercase"
              asChild
            >
              <Link href="/shop">
                View products
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

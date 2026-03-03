import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getProducts } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'

export async function FeaturedProductsSection() {
  const products = await getProducts()
  // Just show first 3 for featured
  const featured = products.slice(0, 3)

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Our Bestsellers
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            The kits our customers keep coming back for, week after week.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button
            size="lg"
            className="rounded-full bg-foreground px-10 text-background hover:bg-foreground/90 text-sm tracking-widest uppercase"
            asChild
          >
            <Link href="/shop">
              Shop All
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

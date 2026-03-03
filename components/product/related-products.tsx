'use client'

import { ProductCard } from '@/components/product-card'
import type { Product } from '@/lib/products'

export function RelatedProducts({ products }: { products: Product[] }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <h2 className="font-serif text-2xl tracking-wide text-foreground md:text-3xl">
          You might also like
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useSearchParams } from 'next/navigation'
import type { Product } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ShopContent({ products }: { products: Product[] }) {
  const searchParams = useSearchParams()
  const lineFilter = searchParams.get('line') as
    | 'gourmet'
    | 'everyday'
    | 'limited-edition'
    | null

  const filteredProducts = lineFilter
    ? products.filter((p) => p.line === lineFilter)
    : products

  return (
    <>
      {/* Filters */}
      <div className="mt-10 flex items-center justify-center gap-3">
        <Button
          variant={!lineFilter ? 'default' : 'outline'}
          size="sm"
          className="tracking-wide"
          asChild
        >
          <Link href="/shop">All</Link>
        </Button>
        <Button
          variant={lineFilter === 'gourmet' ? 'default' : 'outline'}
          size="sm"
          className="tracking-wide"
          asChild
        >
          <Link href="/shop?line=gourmet">Boccon Divino</Link>
        </Button>
        <Button
          variant={lineFilter === 'everyday' ? 'default' : 'outline'}
          size="sm"
          className="tracking-wide"
          asChild
        >
          <Link href="/shop?line=everyday">Bona Pasta</Link>
        </Button>
        <Button
          variant={lineFilter === 'limited-edition' ? 'default' : 'outline'}
          size="sm"
          className="tracking-wide"
          asChild
        >
          <Link href="/shop?line=limited-edition">Limited Edition</Link>
        </Button>
      </div>

      {/* Line Introduction */}
      {lineFilter && (
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-base leading-relaxed text-muted-foreground">
            {lineFilter === 'gourmet' &&
              'Boccon Divino is a line of premium Italian meal kits, crafted to deliver a gourmet dining experience with refined simplicity. Each box is carefully composed with artisanal pasta, chef-crafted sauces, and an exclusive sea-salt tablet.'}
            {lineFilter === 'everyday' &&
              'Bona Pasta brings authentic Italian flavour to your table with effortless, everyday pasta meal kits. Perfectly portioned and thoughtfully curated to help you cook a delicious Italian meal in minutes.'}
            {lineFilter === 'limited-edition' &&
              'Limited Edition kits are exclusive gourmet creations designed for special occasions. Featuring rare ingredients and unique recipes, these seasonal boxes are available only while stocks last.'}
          </p>
        </div>
      )}

      {/* Product Grid */}
      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-muted-foreground">No products found.</p>
        </div>
      )}
    </>
  )
}

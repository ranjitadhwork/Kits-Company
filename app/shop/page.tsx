import { Suspense } from 'react'
import { getProducts } from '@/lib/products'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ShopContent } from '@/components/shop/shop-content'

export const metadata = {
  title: 'Shop | The Kits Company',
  description:
    'Browse our full collection of Italian pasta meal kits. From Boccon Divino premium dishes to everyday classics.',
}

export default async function ShopPage() {
  const products = await getProducts()
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-24">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
          <Suspense fallback={null}>
            <ShopContent products={products} />
          </Suspense>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

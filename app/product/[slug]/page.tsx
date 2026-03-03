import { notFound } from 'next/navigation'
import { getProducts, getProductBySlug, getProductsByLine } from '@/lib/products'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductDetail } from '@/components/product/product-detail'
import { RelatedProducts } from '@/components/product/related-products'

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: `${product.name} | The Kits Company`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  let related = await getProductsByLine(product.line)
  related = related.filter((p) => p.id !== product.id)


  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-24">
        <ProductDetail product={product} />
        {related.length > 0 && <RelatedProducts products={related} />}
      </main>
      <SiteFooter />
    </>
  )
}

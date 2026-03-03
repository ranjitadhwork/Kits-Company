import { shopifyFetch, getProductsQuery, getProductQuery } from './shopify'

export type Product = {
  id: string
  name: string
  slug: string
  line: 'gourmet' | 'everyday' | 'limited-edition'
  price: number
  description: string
  shortDescription: string
  image: string
  cookTime: string
  servings: number
  ingredients: string[]
  tags: string[]
  soldOut?: boolean
  images?: string[]
  variantId?: string
}

function parseShopifyProduct(node: any): Product {
  const price = parseFloat(node.priceRange?.maxVariantPrice?.amount || '0')
  const variantId = node.variants?.edges[0]?.node?.id
  const isAvailable = node.availableForSale

  let line: 'gourmet' | 'everyday' | 'limited-edition' = 'everyday'
  const tags = node.tags || []
  const type = node.productType?.toLowerCase()

  if (tags.includes('gourmet') || type === 'gourmet') line = 'gourmet'
  if (tags.includes('limited-edition') || type === 'limited-edition') line = 'limited-edition'

  const images = node.images?.edges?.map((img: any) => img.node.url) || []
  const image = images[0] || ''

  return {
    id: node.id,
    variantId,
    name: node.title,
    slug: node.handle,
    line,
    price,
    description: node.descriptionHtml || node.description || '',
    shortDescription: (node.description || '').substring(0, 120) + '...',
    image,
    images: images.length > 0 ? images : undefined,
    cookTime: '10 min',
    servings: 2,
    ingredients: [],
    tags,
    soldOut: !isAvailable,
  }
}

export async function getProducts(): Promise<Product[]> {
  try {
    const { body } = await shopifyFetch<any>({
      query: getProductsQuery,
      variables: { first: 100 },
    })

    return body.data?.products?.edges?.map((edge: any) => parseShopifyProduct(edge.node)) || []
  } catch (error) {
    console.error('Failed to get Shopify products:', error)
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  try {
    const { body } = await shopifyFetch<any>({
      query: getProductQuery,
      variables: { handle: slug },
    })

    if (!body.data?.product) return undefined
    return parseShopifyProduct(body.data.product)
  } catch (error) {
    console.error(`Failed to get Shopify product ${slug}:`, error)
    return undefined
  }
}

export async function getProductsByLine(line: 'gourmet' | 'everyday' | 'limited-edition'): Promise<Product[]> {
  const products = await getProducts()
  return products.filter((p) => p.line === line)
}

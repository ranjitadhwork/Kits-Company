/**
 * Utility for fetching data from the Shopify Storefront API
 */

const domain = process.env.SHOPIFY_STORE_DOMAIN || process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN

if (!domain || !storefrontAccessToken) {
  console.warn('Shopify domain or storefront access token is missing in environment variables.')
}

/**
 * Generic fetch function for Shopify Storefront API GraphQL queries/mutations
 */
export async function shopifyFetch<T>({
  query,
  variables = {},
  cache = 'force-cache',
  tags = [],
}: {
  query: string
  variables?: Record<string, any>
  cache?: RequestCache
  tags?: string[]
}): Promise<{ status: number; body: T }> {
  try {
    const result = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontAccessToken!,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    })

    const body = await result.json()

    if (body.errors) {
      console.error(body.errors[0])
      throw body.errors[0]
    }

    return {
      status: result.status,
      body,
    }
  } catch (error) {
    console.error('Error executing Shopify Fetch:', error)
    throw {
      error,
      query,
    }
  }
}

export const getProductsQuery = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          descriptionHtml
          productType
          tags
          availableForSale
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`

export const getProductQuery = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      productType
      tags
      availableForSale
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            id
            price {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
    }
  }
`

export const createCartMutation = `
  mutation createCart($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`

'use server'

import { redirect } from 'next/navigation'
import { shopifyFetch, createCartMutation } from '@/lib/shopify'

export async function createCheckout(variantId: string, quantity: number) {
    if (!variantId) {
        throw new Error('Product variant is missing')
    }

    let checkoutUrl: string | undefined

    try {
        const { body } = await shopifyFetch<any>({
            query: createCartMutation,
            variables: {
                lines: [
                    {
                        merchandiseId: variantId,
                        quantity,
                    },
                ],
            },
            cache: 'no-store',
        })

        checkoutUrl = body.data?.cartCreate?.cart?.checkoutUrl

        if (!checkoutUrl) {
            console.error('Shopify user errors:', body.data?.cartCreate?.userErrors)
            throw new Error('Failed to create checkout session')
        }
    } catch (err: any) {
        console.error('Checkout error:', err)
        throw new Error('Failed to prepare checkout')
    }

    // Next.js redirect must be called outside try/catch block
    redirect(checkoutUrl)
}

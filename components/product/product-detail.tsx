'use client'

import { useState, useCallback, useTransition } from 'react'
import Image from 'next/image'
import { Clock, Users, Leaf, ChefHat, Minus, Plus, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { createCheckout } from '@/app/actions/checkout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { Product } from '@/lib/products'

export function ProductDetail({ product }: { product: Product }) {
  const [isPending, startTransition] = useTransition()
  const [quantity, setQuantity] = useState(1)
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image]
  const hasMultiple = allImages.length > 1
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }, [allImages.length])

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }, [allImages.length])

  function handleBuyNow() {
    startTransition(async () => {
      try {
        await createCheckout(product.variantId!, quantity)
      } catch (err) {
        console.error('Checkout failed', err)
      }
    })
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image carousel */}
        <div className="relative aspect-square overflow-hidden rounded-md bg-[#f5f5f5] group">
          <button
            onClick={() => setLightboxOpen(true)}
            className="relative block size-full cursor-zoom-in"
            aria-label="Enlarge image"
          >
            <Image
              src={allImages[currentIndex]}
              alt={`${product.name} - image ${currentIndex + 1}`}
              fill
              className="object-contain p-6"
              priority
            />
          </button>
          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="size-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`size-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-foreground' : 'bg-foreground/30'}`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close lightbox"
            >
              <X className="size-5" />
            </button>
            {hasMultiple && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  className="absolute left-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  className="absolute right-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
            <div
              className="relative h-[80vh] w-[90vw] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[currentIndex]}
                alt={`${product.name} - image ${currentIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            {hasMultiple && (
              <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
                {allImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIndex(i)
                    }}
                    className={`size-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Details */}
        <div className="flex flex-col justify-center">
          <Badge
            variant="outline"
            className="w-fit text-xs uppercase tracking-widest"
          >
            {product.line === 'gourmet' ? 'Boccon Divino' : product.line === 'limited-edition' ? 'Limited Edition' : 'Bona Pasta'}
          </Badge>

          <h1 className="mt-4 font-serif text-4xl tracking-wide text-foreground md:text-5xl">
            {product.name}
          </h1>

          {!product.soldOut && product.price > 0 && (
            <p className="mt-2 text-2xl font-medium text-foreground">
              {'\u20AC'}
              {product.price.toFixed(2)}
            </p>
          )}

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Meta */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 text-accent" />
              {product.cookTime}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="size-4 text-accent" />
              {product.servings} servings
            </div>
            {product.tags.includes('vegetarian') && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="size-4 text-accent" />
                Vegetarian
              </div>
            )}
            {product.tags.includes('vegan') && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="size-4 text-accent" />
                Vegan
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="text-base" aria-hidden="true">{'\uD83C\uDDEE\uD83C\uDDF9'}</span>
              Product of Italy
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="size-4 fill-red-500 text-red-500" />
              Made with heart
            </div>
          </div>

          <Separator className="my-8" />

          {/* Ingredients */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <ChefHat className="size-4" />
              {"What's in the kit"}
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {product.ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <span className="size-1 shrink-0 rounded-full bg-accent" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <Separator className="my-8" />

          {/* Add to cart */}
          {product.soldOut ? (
            <div>
              <Button
                size="lg"
                className="w-full bg-muted text-muted-foreground cursor-not-allowed tracking-wide"
                disabled
              >
                Sold Out
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <div className="flex items-center rounded-md border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="flex size-10 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="flex w-10 items-center justify-center text-sm font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="flex size-10 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
                    aria-label="Increase quantity"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
                <Button
                  size="lg"
                  className="flex-1 tracking-wide"
                  onClick={handleBuyNow}
                  disabled={isPending}
                >
                  {isPending ? 'Processing...' : `Buy Now \u2014 \u20AC${(product.price * quantity).toFixed(2)}`}
                </Button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                Free shipping on orders over {'\u20AC'}50
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

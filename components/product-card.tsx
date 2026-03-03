'use client'

import { useState, useCallback, useTransition } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { createCheckout } from '@/app/actions/checkout'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import type { Product } from '@/lib/products'

export function ProductCard({ product }: { product: Product }) {
  const [isPending, startTransition] = useTransition()
  const allImages = product.images && product.images.length > 0 ? product.images : [product.image]
  const hasMultiple = allImages.length > 1
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const goPrev = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1))
  }, [allImages.length])

  const goNext = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1))
  }, [allImages.length])

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setLightboxOpen(true)
  }

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary">
        <button
          onClick={openLightbox}
          className="relative block size-full cursor-zoom-in"
          aria-label="Enlarge image"
        >
          <Image
            src={allImages[currentIndex]}
            alt={`${product.name} - image ${currentIndex + 1}`}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </button>
        <Badge className="absolute top-4 left-4 rounded-full bg-background/90 text-foreground backdrop-blur-sm border-0 text-xs uppercase tracking-wider px-3 py-1 pointer-events-none">
          {product.line === 'gourmet' ? 'Boccon Divino' : product.line === 'limited-edition' ? 'Limited Edition' : 'Bona Pasta'}
        </Badge>
        {hasMultiple && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center rounded-full bg-background/80 text-foreground opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="size-4" />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    goTo(i)
                  }}
                  className={`size-2 rounded-full transition-colors ${i === currentIndex ? 'bg-foreground' : 'bg-foreground/30'}`}
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
                onClick={(e) => { e.stopPropagation(); goPrev(e) }}
                className="absolute left-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(e) }}
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
                    goTo(i)
                  }}
                  className={`size-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                  aria-label={`View image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/product/${product.slug}`}>
            <h3 className="font-serif text-xl leading-tight tracking-tight text-foreground transition-colors group-hover:text-accent">
              {product.name}
            </h3>
          </Link>
          {!product.soldOut && product.price > 0 && (
            <span className="shrink-0 text-base font-medium text-foreground">
              {'\u20AC'}
              {product.price.toFixed(2)}
            </span>
          )}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {product.shortDescription}
        </p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" />
            {product.cookTime}
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5" />
            {product.servings} servings
          </span>
          <span>Product of Italy</span>
          <span>Made with heart</span>
        </div>

        {product.soldOut ? (
          <Button
            className="mt-3 w-full rounded-full bg-muted text-muted-foreground text-xs tracking-widest uppercase cursor-not-allowed"
            disabled
          >
            Sold Out
          </Button>
        ) : (
          <Button
            className="mt-3 w-full rounded-full bg-foreground text-background hover:bg-foreground/90 text-xs tracking-widest uppercase"
            onClick={() => startTransition(async () => await createCheckout(product.variantId!, 1))}
            disabled={isPending}
          >
            {isPending ? 'Processing...' : 'Buy Now'}
          </Button>
        )}
      </div>
    </div>
  )
}

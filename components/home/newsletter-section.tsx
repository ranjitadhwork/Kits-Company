'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Check } from 'lucide-react'


export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <hr className="border-border" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Join the Table
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Get exclusive recipes, early access to new kits, and 10% off your
            first order.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center gap-3 rounded-full bg-[#f5f5f5] px-8 py-4">
              <Check className="size-5 text-foreground" />
              <p className="text-sm font-medium text-foreground">
                Welcome to the family! Check your inbox for your discount code.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex w-full max-w-md gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-full border-border bg-[#f5f5f5] text-foreground placeholder:text-muted-foreground focus-visible:ring-foreground/30"
              />
              <Button
                type="submit"
                className="shrink-0 rounded-full bg-foreground px-8 text-white hover:bg-foreground/90 text-sm tracking-widest uppercase"
              >
                Subscribe
              </Button>
            </form>
          )}


        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, CheckCircle } from 'lucide-react'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xlgwyydn'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isPending, startTransition] = useTransition()

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center text-center gap-3 py-8">
        <CheckCircle className="size-12 text-green-500" />
        <p className="font-serif text-xl text-foreground">
          Thank you for your message!
        </p>
        <p className="text-sm text-muted-foreground">
          {"We'll get back to you as soon as possible."}
        </p>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrorMsg('')

    const form = e.currentTarget
    const formData = new FormData(form)

    startTransition(async () => {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        })

        if (res.ok) {
          setSubmitted(true)
        } else {
          const data = await res.json()
          const errMsg =
            data?.errors?.map((e: { message: string }) => e.message).join(', ') ||
            'Something went wrong. Please try again.'
          setErrorMsg(errMsg)
        }
      } catch {
        setErrorMsg('Network error. Please check your connection and try again.')
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col gap-5"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-firstName"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            First Name
          </label>
          <Input
            id="contact-firstName"
            name="firstName"
            required
            placeholder="Your first name"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="contact-lastName"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Last Name
          </label>
          <Input
            id="contact-lastName"
            name="lastName"
            required
            placeholder="Your last name"
            className="bg-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-email"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Email
        </label>
        <Input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="bg-white"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-subject"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          required
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select a subject
          </option>
          <option value="order">Order inquiry</option>
          <option value="product">Product question</option>
          <option value="shipping">Shipping &amp; delivery</option>
          <option value="returns">Returns &amp; refunds</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="contact-message"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="How can we help you?"
          className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>

      {errorMsg && (
        <p className="text-sm font-medium text-red-500">{errorMsg}</p>
      )}

      <Button type="submit" size="lg" className="mt-2 w-full tracking-wide" disabled={isPending}>
        {isPending ? 'Sending...' : 'Send Message'}
        {!isPending && <Send className="ml-2 size-4" />}
      </Button>
    </form>
  )
}

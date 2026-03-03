'use client'

import { useState, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, CheckCircle } from 'lucide-react'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xlgwyydn'

export function CompanyContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isPending, startTransition] = useTransition()

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center text-center gap-3 py-8">
        <CheckCircle className="size-12 text-green-500" />
        <p className="font-serif text-xl text-foreground">
          Thank you for reaching out!
        </p>
        <p className="text-sm text-muted-foreground">
          {"We'll get back to you within 2 business days."}
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
            htmlFor="firstName"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            required
            placeholder="Your first name"
            className="bg-white"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="lastName"
            className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            required
            placeholder="Your last name"
            className="bg-white"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="bg-white"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="company"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Company Name
        </label>
        <Input
          id="company"
          name="company"
          required
          placeholder="Your company"
          className="bg-white"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="type"
          className="text-xs font-medium uppercase tracking-widest text-muted-foreground"
        >
          Inquiry Type
        </label>
        <select
          id="type"
          name="type"
          required
          className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="distribution">Distribution / Wholesale</option>
          <option value="retail">Retail Partnership</option>
          <option value="corporate-gifting">Corporate Gifting</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-widests text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your needs..."
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

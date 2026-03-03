'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#2c2c2c]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Brand name - left */}
        <Link
          href="/"
          className="font-serif text-base font-bold tracking-[0.15em] text-white uppercase md:text-lg"
        >
          THE KITS COMPANY
        </Link>

        {/* Desktop nav links - right side */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-serif rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors ${isActive
                    ? 'bg-[#c4573a] text-white'
                    : 'text-white/70 hover:text-white'
                  }`}
              >
                {link.label}
              </Link>
            )
          })}

        </div>

        {/* Mobile: menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#2c2c2c] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-serif rounded-full px-5 py-2.5 text-base font-medium tracking-wide transition-colors w-fit ${isActive
                      ? 'bg-[#c4573a] text-white'
                      : 'text-white/70 hover:text-white'
                    }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}

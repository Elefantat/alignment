'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#meet-the-founder', label: 'About Us' },
    { href: '#community', label: 'Community' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-alignment-cream-light/90 backdrop-blur-md border-b border-alignment-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo className="w-10 h-10 text-alignment-teal transition-transform group-hover:scale-105" />
            <span className="text-xl font-display font-semibold text-alignment-navy">
              Alignment
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-alignment-navy/80 hover:text-alignment-teal font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-alignment-teal transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="px-5 py-2.5 text-alignment-navy font-medium hover:text-alignment-teal transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-alignment-navy hover:text-alignment-teal transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-alignment-cream-light border-t border-alignment-sand">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-alignment-navy/80 hover:text-alignment-teal font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-alignment-navy font-medium hover:text-alignment-teal transition-colors text-center mt-4"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full text-center mt-2"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}





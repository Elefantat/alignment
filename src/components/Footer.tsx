import Link from 'next/link'
import Logo from './Logo'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: '#demo' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Press', href: '#press' },
  ],
  resources: [
    { label: 'Community', href: '#community' },
    { label: 'Support', href: '#support' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-alignment-navy text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              Ready to start your journey?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Join thousands of people who are already using Alignment to find clarity and purpose in their lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Your First Conversation
              </button>
              <button className="btn-outline-light text-lg px-8 py-4">
                Watch Jeremy&apos;s Story
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Logo className="w-10 h-10 text-alignment-teal" />
              <span className="text-xl font-display font-semibold">Alignment</span>
            </Link>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              AI supported inner work platform that meets you where you&apos;re at. A stigma free way to get clear on what&apos;s going inside.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-alignment-teal transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-alignment-teal transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-alignment-teal transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-alignment-teal transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/60">
              <a href="mailto:hello@alignment.com" className="flex items-center gap-2 hover:text-alignment-teal transition-colors">
                <Mail size={16} />
                hello@alignment.com
              </a>
              <a href="tel:+1800123456" className="flex items-center gap-2 hover:text-alignment-teal transition-colors">
                <Phone size={16} />
                1800 123 456
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                Australia
              </span>
            </div>
            
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Alignment. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}





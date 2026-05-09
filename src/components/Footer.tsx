'use client'

import { Instagram, Facebook, Twitter, Heart } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-coffee-950 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="footer-top-border" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="Munni Cafe"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-coffee-300/15"
              />
              <span className="text-lg font-bold text-coffee-100">
                Munni <span className="text-coffee-300 font-light italic">Cafe</span>
              </span>
            </div>
            <p className="text-coffee-200/30 text-sm leading-relaxed max-w-xs">
              Artisan coffee roasted with passion, brewed with precision. Where
              every cup tells a story.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-9 h-9 rounded-lg bg-coffee-800/40 border border-coffee-700/10 flex items-center justify-center text-coffee-200/30 hover:text-coffee-300 hover:border-coffee-300/20 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-coffee-100 font-semibold text-xs uppercase tracking-[0.2em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-coffee-200/30 text-sm hover:text-coffee-300 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-coffee-100 font-semibold text-xs uppercase tracking-[0.2em] mb-5">
              Hours
            </h3>
            <div className="space-y-3 text-sm text-coffee-200/30">
              <p>Mon - Fri: <span className="text-coffee-200/50">7AM - 9PM</span></p>
              <p>Saturday: <span className="text-coffee-200/50">8AM - 10PM</span></p>
              <p>Sunday: <span className="text-coffee-200/50">8AM - 10PM</span></p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-coffee-100 font-semibold text-xs uppercase tracking-[0.2em] mb-5">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-coffee-200/30">
              <p>42 Roastery Lane</p>
              <p>Downtown District</p>
              <a href="tel:+15552345678" className="block hover:text-coffee-300 transition-colors">+1 (555) 234-5678</a>
              <a href="mailto:hello@munnicafe.com" className="block hover:text-coffee-300 transition-colors">hello@munnicafe.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-coffee-700/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-coffee-200/15 text-xs">
            &copy; 2026 Munni Cafe. All rights reserved.
          </p>
          <p className="text-coffee-200/10 text-xs flex items-center gap-1">
            Crafted with <Heart className="w-3 h-3 text-coffee-300/30" /> and caffeine
          </p>
        </div>
      </div>
    </footer>
  )
}

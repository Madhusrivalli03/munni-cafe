'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-coffee-950/80 backdrop-blur-xl shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Munni Cafe"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-coffee-300/20 group-hover:ring-coffee-300/50 transition-all"
              />
              <div className="absolute inset-0 rounded-full bg-coffee-300/0 group-hover:bg-coffee-300/10 transition-colors" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-coffee-100 tracking-wide">
              Munni <span className="text-coffee-300 font-light italic">Cafe</span>
            </span>
          </button>

          {/* Desktop Navigation - Pill Style */}
          <div className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-500 ${
            scrolled ? 'bg-coffee-900/60 border border-coffee-700/20' : ''
          }`}>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-5 py-2 text-sm font-medium transition-all rounded-full ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-coffee-950 bg-coffee-300'
                    : 'text-coffee-200/70 hover:text-coffee-100 hover:bg-coffee-800/30'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-coffee-100 hover:bg-coffee-800/50 rounded-full"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-coffee-950/95 backdrop-blur-xl border-coffee-700/20 w-72"
              >
                <div className="flex flex-col gap-2 mt-8">
                  <div className="flex items-center gap-3 mb-6 px-2">
                    <img
                      src="/logo.png"
                      alt="Munni Cafe"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-coffee-300/20"
                    />
                    <span className="text-lg font-bold text-coffee-100">
                      Munni <span className="text-coffee-300 font-light italic">Cafe</span>
                    </span>
                  </div>
                  {navLinks.map((link, i) => (
                    <SheetClose asChild key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className={`flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all ${
                          activeSection === link.href.replace('#', '')
                            ? 'text-coffee-950 bg-coffee-300'
                            : 'text-coffee-200/70 hover:text-coffee-100 hover:bg-coffee-800/30'
                        }`}
                      >
                        {link.name}
                      </button>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

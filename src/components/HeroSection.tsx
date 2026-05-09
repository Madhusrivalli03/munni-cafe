'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden noise-overlay"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Vignette */}
      <div className="absolute inset-0 hero-vignette" />

      {/* Ambient glow blobs */}
      <div className="glow-blob-amber -left-20 top-1/4" />
      <div className="glow-blob-gold right-10 bottom-1/4" />

      {/* Steam particles */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 flex gap-6 pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="steam-particle w-2 h-10 rounded-full bg-gradient-to-t from-coffee-300/20 to-transparent"
            style={{ animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center"
        >
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coffee-300/10 border border-coffee-300/20 mb-8"
          >
            <Coffee className="w-4 h-4 text-coffee-300" />
            <span className="text-coffee-300 text-xs sm:text-sm font-medium tracking-wider uppercase">Est. 2019</span>
          </motion.div>

          <h1 className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-coffee-100 mb-6 max-w-5xl mx-auto">
            Where Every
            <br />
            Cup{' '}
            <span className="text-coffee-300 italic">Tells a Story</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-coffee-200/60 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light"
          >
            Artisan coffee roasted with passion, brewed with precision
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollToSection('#menu')}
              size="lg"
              className="btn-primary-glow bg-coffee-300 hover:bg-coffee-400 text-coffee-950 font-semibold px-10 py-4 text-base rounded-full transition-all hover:scale-105"
            >
              Explore Our Menu
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="border-coffee-300/30 text-coffee-200 hover:bg-coffee-300/10 hover:border-coffee-300/50 font-medium px-10 py-4 text-base rounded-full transition-all backdrop-blur-sm"
            >
              Visit Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <div className="flex flex-col items-center gap-2 scroll-indicator">
            <span className="text-coffee-300/40 text-[10px] tracking-[0.3em] uppercase font-light">
              Scroll
            </span>
            <ChevronDown className="w-4 h-4 text-coffee-300/40" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

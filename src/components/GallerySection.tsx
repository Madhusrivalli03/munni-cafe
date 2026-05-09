'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import ScrollReveal from './ScrollReveal'

const galleryImages = [
  {
    src: '/gallery-1.png',
    alt: 'Espresso drink with beautiful latte art',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/gallery-2.png',
    alt: 'Cozy coffee shop interior with warm lighting',
    span: '',
  },
  {
    src: '/gallery-3.png',
    alt: 'Coffee beans in burlap sack from our roastery',
    span: '',
  },
  {
    src: '/gallery-4.png',
    alt: 'Pastry and coffee flat lay arrangement',
    span: 'md:col-span-2',
  },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section
      id="gallery"
      className="relative py-24 sm:py-32 lg:py-40 section-accent noise-overlay overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="glow-blob-amber left-1/4 top-1/2 -translate-y-1/2 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-coffee-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Gallery
            </p>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-coffee-100">
              A Glimpse <span className="text-coffee-300 italic">Inside</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[220px] lg:auto-rows-[260px]">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`gallery-item relative ${image.span}`}
                onClick={() => setLightbox({ src: image.src, alt: image.alt })}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-coffee-100 text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={!!lightbox}
        onOpenChange={(open) => {
          if (!open) setLightbox(null)
        }}
      >
        <DialogContent className="max-w-4xl w-[95vw] bg-coffee-950/95 backdrop-blur-xl border-coffee-700/15 p-0 overflow-hidden rounded-2xl">
          <DialogTitle className="sr-only">{lightbox?.alt ?? 'Gallery image'}</DialogTitle>
          {lightbox && (
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}

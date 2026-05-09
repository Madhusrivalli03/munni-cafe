'use client'

import { Star, Quote } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    quote:
      'The best coffee I\'ve ever had. The Munni Signature is absolutely divine — rich, smooth, and unforgettable. This is my go-to spot every morning.',
    name: 'Sarah M.',
    rating: 5,
    date: 'December 2025',
  },
  {
    quote:
      'A cozy gem in the heart of downtown. The pastries are always fresh, and the staff makes you feel like family. Wouldn\'t trade this place for anything.',
    name: 'James K.',
    rating: 5,
    date: 'January 2026',
  },
  {
    quote:
      'The coffee tasting experience was incredible. Learned so much about origins and flavors. Now I appreciate every sip so much more. Highly recommend!',
    name: 'Priya R.',
    rating: 5,
    date: 'February 2026',
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <div
      className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col"
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-coffee-100/80 text-sm sm:text-base leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-coffee-700/15">
        <div className="w-10 h-10 rounded-full bg-coffee-300/20 flex items-center justify-center">
          <span className="text-coffee-300 font-bold text-sm">{testimonial.name.charAt(0)}</span>
        </div>
        <div>
          <p className="text-coffee-100 font-semibold text-sm">{testimonial.name}</p>
          <p className="text-coffee-200/30 text-xs">{testimonial.date}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 section-darker noise-overlay overflow-hidden">
      {/* Ambient glow */}
      <div className="glow-blob-amber right-0 bottom-1/4 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-coffee-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-coffee-100">
              What Our <span className="text-coffee-300 italic">Guests</span> Say
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}

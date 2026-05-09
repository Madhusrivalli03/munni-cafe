'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Globe, Coffee, Star, Calendar } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

function AnimatedCounter({ target, suffix = '', decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let current = 0
    const step = target / 40
    const interval = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 15, suffix: '+', label: 'Origins', icon: Globe, decimals: 0 },
  { value: 50, suffix: 'K+', label: 'Cups Served', icon: Coffee, decimals: 0 },
  { value: 4.9, suffix: '', label: 'Rating', icon: Star, decimals: 1 },
  { value: 2019, suffix: '', label: 'Founded', icon: Calendar, decimals: 0 },
]

export default function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 section-darker noise-overlay overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="glow-blob-amber -left-40 top-1/2 -translate-y-1/2 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image with glow */}
          <ScrollReveal direction="left">
            <motion.div
              style={{ y: imageY }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute inset-4 rounded-3xl bg-coffee-300/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
                <img
                  src="/about-image.png"
                  alt="Barista pouring latte art at Munni Cafe"
                  className="w-full h-[400px] sm:h-[480px] lg:h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/50 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-4 sm:right-6 bg-coffee-300 text-coffee-950 px-6 py-4 rounded-2xl shadow-xl shadow-black/30"
              >
                <p className="text-3xl font-bold heading-display">7+</p>
                <p className="text-xs font-medium opacity-70">Years of Craft</p>
              </motion.div>

              {/* Decorative corner */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-coffee-300/20 rounded-tl-3xl" />
            </motion.div>
          </ScrollReveal>

          {/* Text Content */}
          <div>
            <ScrollReveal>
              <p className="text-coffee-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Our Story
              </p>
              <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-coffee-100 mb-8">
                Crafted with
                <br />
                <span className="text-coffee-300 italic">Passion</span>, Served
                <br />
                with Love
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-coffee-200/50 text-base sm:text-lg leading-relaxed mb-5">
                Founded in 2019 in the heart of downtown, Munni Cafe was born
                from a simple belief: that great coffee has the power to bring
                people together. What started as a small roastery with a single
                Probat machine has grown into a beloved community gathering place
                where every cup is a conversation starter.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-coffee-200/50 text-base sm:text-lg leading-relaxed mb-5">
                We source our beans directly from smallholder farmers in
                Ethiopia&apos;s Yirgacheffe region, Colombia&apos;s Huila
                department, and Guatemala&apos;s Antigua valley — building
                relationships that ensure fair prices and exceptional quality.
                Every batch is carefully roasted in small quantities to unlock
                the unique flavor profile of each origin.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-coffee-200/50 text-base sm:text-lg leading-relaxed mb-10">
                Our café is more than just a place to grab a coffee — it&apos;s a
                space where creativity flows, friendships deepen, and the aroma
                of freshly roasted beans fills the air. From our signature Munni
                Blend to seasonal single-origin pours, every drink is crafted
                with the same care and attention that defined our very first cup.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="stat-card text-center p-4 sm:p-5 rounded-2xl bg-coffee-800/40 border border-coffee-700/15 backdrop-blur-sm"
                  >
                    <stat.icon className="w-4 h-4 text-coffee-300/60 mx-auto mb-2" />
                    <div className="text-2xl sm:text-3xl font-bold text-coffee-300 heading-display">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                    </div>
                    <div className="text-coffee-200/40 text-[11px] sm:text-xs mt-1 font-medium tracking-wider uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

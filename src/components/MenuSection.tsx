'use client'

import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ScrollReveal from './ScrollReveal'

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

const coffeeItems: MenuItem[] = [
  { name: 'Classic Espresso', description: 'Rich, bold, single-origin', price: '$3.50', image: '/menu-espresso.png' },
  { name: 'Caramel Latte', description: 'Smooth espresso with caramel drizzle', price: '$5.00', image: '/menu-caramel-latte.png' },
  { name: 'Cold Brew', description: '18-hour steeped, smooth finish', price: '$4.50', image: '/menu-cold-brew.png' },
  { name: 'Matcha Latte', description: 'Premium Japanese matcha', price: '$5.50', image: '/menu-matcha-latte.png' },
  { name: 'Mocha Delight', description: 'Chocolate meets espresso', price: '$5.00', image: '/menu-mocha.png' },
  { name: 'Pour Over', description: 'Hand-poured single cup', price: '$4.00', image: '/menu-pour-over.png' },
]

const pastryItems: MenuItem[] = [
  { name: 'Butter Croissant', description: 'Flaky, golden, freshly baked', price: '$3.00', image: '/menu-croissant.png' },
  { name: 'Cinnamon Roll', description: 'Warm, gooey, with cream cheese', price: '$4.00', image: '/menu-cinnamon-roll.png' },
  { name: 'Blueberry Muffin', description: 'Bursting with fresh blueberries', price: '$3.50', image: '/menu-blueberry-muffin.png' },
  { name: 'Chocolate Danish', description: 'Rich chocolate filling', price: '$3.50', image: '/menu-chocolate-danish.png' },
  { name: 'Banana Bread', description: 'Homemade with walnuts', price: '$3.00', image: '/menu-banana-bread.png' },
  { name: 'Almond Biscotti', description: 'Perfect for dipping', price: '$2.50', image: '/menu-biscotti.png' },
]

const specialItems: MenuItem[] = [
  { name: 'Munni Signature', description: 'Our house blend, smoky & bold', price: '$6.00', image: '/menu-ember-signature.png' },
  { name: 'Seasonal Flight', description: '4 tasting pours of the season', price: '$12.00', image: '/menu-seasonal-flight.png' },
  { name: 'Affogato', description: 'Gelato drowned in espresso', price: '$7.00', image: '/menu-affogato.png' },
  { name: 'Coffee Tasting Experience', description: 'Guided tasting for two', price: '$25.00', image: '/menu-tasting-experience.png' },
]

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="glass-card rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="menu-card-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/80 via-coffee-950/20 to-transparent" />
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-coffee-950/60 backdrop-blur-md text-coffee-300 font-bold text-sm px-4 py-1.5 rounded-full border border-coffee-300/15">
          {item.price}
        </div>
        {/* Name overlay on image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-coffee-100 font-bold text-lg sm:text-xl heading-display">
            {item.name}
          </h3>
        </div>
      </div>
      {/* Description */}
      <div className="px-5 py-4">
        <p className="text-coffee-200/40 text-sm">{item.description}</p>
      </div>
    </motion.div>
  )
}

function MenuGrid({ items }: { items: MenuItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10">
      {items.map((item, i) => (
        <MenuCard key={item.name} item={item} index={i} />
      ))}
    </div>
  )
}

export default function MenuSection() {
  return (
    <section id="menu" className="relative py-24 sm:py-32 lg:py-40 section-dark noise-overlay overflow-hidden">
      {/* Ambient glow */}
      <div className="glow-blob-gold right-0 top-1/3 opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-6">
            <p className="text-coffee-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Our Menu
            </p>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-coffee-100">
              Crafted <span className="text-coffee-300 italic">Perfection</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Tabs defaultValue="coffee" className="w-full">
            <div className="flex justify-center mb-2">
              <TabsList className="bg-coffee-800/40 backdrop-blur-sm border border-coffee-700/15 p-1 rounded-full">
                <TabsTrigger
                  value="coffee"
                  className="data-[state=active]:bg-coffee-300 data-[state=active]:text-coffee-950 text-coffee-200/50 px-8 py-2.5 text-sm font-medium transition-all rounded-full"
                >
                  Coffee
                </TabsTrigger>
                <TabsTrigger
                  value="pastries"
                  className="data-[state=active]:bg-coffee-300 data-[state=active]:text-coffee-950 text-coffee-200/50 px-8 py-2.5 text-sm font-medium transition-all rounded-full"
                >
                  Pastries
                </TabsTrigger>
                <TabsTrigger
                  value="specials"
                  className="data-[state=active]:bg-coffee-300 data-[state=active]:text-coffee-950 text-coffee-200/50 px-8 py-2.5 text-sm font-medium transition-all rounded-full"
                >
                  Specials
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="coffee">
              <MenuGrid items={coffeeItems} />
            </TabsContent>
            <TabsContent value="pastries">
              <MenuGrid items={pastryItems} />
            </TabsContent>
            <TabsContent value="specials">
              <MenuGrid items={specialItems} />
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  )
}

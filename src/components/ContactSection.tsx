'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import ScrollReveal from './ScrollReveal'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: '42 Roastery Lane, Downtown District',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 234-5678',
    href: 'tel:+15552345678',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@munnicafe.com',
    href: 'mailto:hello@munnicafe.com',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon-Fri 7AM-9PM, Sat-Sun 8AM-10PM',
  },
]

export default function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: 'Message Sent!',
      description:
        "Thank you for reaching out. We'll get back to you soon.",
    })

    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 section-dark noise-overlay overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="glow-blob-gold left-1/3 top-1/4 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-coffee-300 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Contact
            </p>
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-coffee-100">
              Get In <span className="text-coffee-300 italic">Touch</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-coffee-100 text-xl font-bold mb-6 heading-display">
                Send Us a Message
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-coffee-200/40 text-xs font-medium tracking-wider uppercase mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="bg-coffee-950/50 border-coffee-700/15 text-coffee-100 placeholder:text-coffee-200/20 focus:border-coffee-300/40 focus:ring-coffee-300/10 rounded-xl h-12"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-coffee-200/40 text-xs font-medium tracking-wider uppercase mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-coffee-950/50 border-coffee-700/15 text-coffee-100 placeholder:text-coffee-200/20 focus:border-coffee-300/40 focus:ring-coffee-300/10 rounded-xl h-12"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-coffee-200/40 text-xs font-medium tracking-wider uppercase mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    className="bg-coffee-950/50 border-coffee-700/15 text-coffee-100 placeholder:text-coffee-200/20 focus:border-coffee-300/40 focus:ring-coffee-300/10 rounded-xl h-12"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-coffee-200/40 text-xs font-medium tracking-wider uppercase mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    className="bg-coffee-950/50 border-coffee-700/15 text-coffee-100 placeholder:text-coffee-200/20 focus:border-coffee-300/40 focus:ring-coffee-300/10 resize-none rounded-xl"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary-glow bg-coffee-300 hover:bg-coffee-400 text-coffee-950 font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] disabled:opacity-50 h-12"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="w-5 h-5 border-2 border-coffee-950/30 border-t-coffee-950 rounded-full"
                    />
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </ScrollReveal>

          {/* Contact Info + Map */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {/* Business Info */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                <h3 className="text-coffee-100 text-xl font-bold mb-6 heading-display">
                  Visit Us
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-coffee-300/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-4 h-4 text-coffee-300" />
                      </div>
                      <div>
                        <p className="text-coffee-200/30 text-[10px] uppercase tracking-[0.2em] font-medium">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-coffee-100/80 text-sm sm:text-base hover:text-coffee-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-coffee-100/80 text-sm sm:text-base">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-coffee-700/15 h-[280px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Munni Cafe Location"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

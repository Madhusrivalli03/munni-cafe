'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Bubble */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="glass-card rounded-2xl p-5 shadow-2xl max-w-[240px]"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <p className="text-coffee-100 text-sm font-medium">
                Chat with us on WhatsApp!
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="text-coffee-200/30 hover:text-coffee-200 transition-colors shrink-0"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <a
              href="https://wa.me/15552345678"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-sm bg-coffee-300 hover:bg-coffee-400 text-coffee-950 font-semibold rounded-xl py-2.5 transition-all hover:scale-[1.02]"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-coffee-300 hover:bg-coffee-400 shadow-lg shadow-coffee-300/20 flex items-center justify-center transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-coffee-950" />
      </motion.button>
    </div>
  )
}

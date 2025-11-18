import React from 'react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <section id="contact" className="relative min-h-[70vh] w-full bg-black text-white overflow-hidden">
      {/* Collapsing vortex illusion */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[900px] w-[900px] rounded-full bg-gradient-to-b from-white/5 to-transparent blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center justify-center"
        >
          <div className="h-24 w-24 rounded-full bg-white shadow-[0_0_60px_rgba(255,255,255,0.9)]" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-3xl sm:text-4xl font-bold"
        >
          Build the future with us.
        </motion.h3>

        <motion.a
          href="#start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 text-white backdrop-blur-md hover:bg-white/10 transition"
        >
          Start a project
        </motion.a>
      </div>
    </section>
  )
}

export default CTA

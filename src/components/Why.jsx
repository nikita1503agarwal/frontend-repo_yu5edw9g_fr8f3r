import React from 'react'
import { motion } from 'framer-motion'

const lines = [
  'We transform ideas into reality.',
  'We merge science, design, and engineering.',
  'We deliver end-to-end tech solutions.'
]

const Why = () => {
  return (
    <section id="why" className="relative min-h-[80vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_30%,rgba(255,255,255,0.05),transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-10 text-center"
        >
          Why Vortex Lab
        </motion.h2>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-white/60 via-white/20 to-transparent" />
          <div className="space-y-14">
            {lines.map((l, i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, delay: i * 0.2 }}
                className="relative pl-10"
              >
                <div className="absolute left-1/2 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.7)]" />
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-gray-100">
                  <span className="block text-lg">{l}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why

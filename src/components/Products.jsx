import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    name: 'CTPatrol',
    desc: 'AI-powered CTPAT inspection system that captures evidence, verifies critical points, and generates compliance reports with precision.'
  },
  {
    name: 'Compliance Vault',
    desc: 'Smart document hub that automatically organizes, classifies, and audits all your compliance files, keeping everything inspection-ready.'
  },
  {
    name: 'NovaPosting',
    desc: 'Autonomous social media engine that creates, schedules, and publishes content with consistent style and 24/7 activity.'
  },
  {
    name: 'LedgerMind',
    desc: 'AI-driven accounting system that categorizes transactions, detects anomalies, and produces real-time financial insights.'
  },
  { name: 'Others', desc: 'Additional experiments orbiting the core ecosystem.' }
]

const Products = () => {
  const circle = 260
  const items = useMemo(() => products.map((p, i) => ({ ...p, angle: (i / products.length) * Math.PI * 2 })), [])

  return (
    <section id="products" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_50%_50%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl sm:text-4xl font-bold mb-12"
        >
          The Products Galaxy
        </motion.h2>

        <div className="relative mx-auto h-[560px] w-full max-w-[900px]">
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 shadow-[0_0_30px_rgba(255,255,255,0.5)]" />

          {items.map((it, idx) => {
            const x = Math.cos(it.angle) * circle
            const y = Math.sin(it.angle) * circle
            return (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="absolute"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              >
                <div className="group relative -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md hover:bg-white/10 transition">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 blur-lg transition" />

                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/20 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform" />

                  <div className="absolute left-1/2 top-[110%] z-10 w-[260px] -translate-x-1/2 opacity-0 pointer-events-none group-hover:opacity-100 transition">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl text-sm text-gray-100">
                      <div className="font-medium text-white mb-1">{it.name}</div>
                      <div className="text-gray-200/90">{it.desc}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products

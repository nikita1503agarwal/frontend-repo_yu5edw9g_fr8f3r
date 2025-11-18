import React from 'react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'AI Systems',
    desc: 'We craft intelligent agents and models that learn, adapt, and scale with your operations.'
  },
  {
    title: 'Product Development',
    desc: 'From concept to launch, we design and build premium digital products with precision.'
  },
  {
    title: 'Automation & Tools',
    desc: 'We engineer pipelines and internal tools that automate the complex and accelerate impact.'
  }
]

const About = () => {
  return (
    <section id="about" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_20%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_80%,rgba(207,207,207,0.05),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-8"
        >
          We build AI systems, digital products, and advanced automation for the next generation of businesses.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.04)] hover:shadow-[0_0_80px_rgba(255,255,255,0.12)] transition"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

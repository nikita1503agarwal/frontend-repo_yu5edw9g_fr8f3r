import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = () => {
  const containerRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotX = useTransform(my, [-0.5, 0.5], [8, -8])
  const rotY = useTransform(mx, [-0.5, 0.5], [-8, 8])
  const parallax = useTransform(my, [-0.5, 0.5], [-20, 20])

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mx.set(x)
    my.set(y)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      id="home"
    >
      {/* Cosmic background with Spline 3D vortex */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle nebula overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_80%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_20%,rgba(207,207,207,0.05),transparent_60%)]" />
      </div>

      {/* Floating logo and titles */}
      <motion.div
        style={{ rotateX: rotX, rotateY: rotY }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Logo */}
        <motion.div
          style={{ y: parallax }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-8"
        >
          <div className="mx-auto h-20 w-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.35)]">
            <div className="h-10 w-10 rounded-full bg-white/80 shadow-[0_0_40px_rgba(255,255,255,0.9)]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]"
        >
          Vortex Lab
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-lg sm:text-xl text-gray-300"
        >
          Where ideas take shape.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="group mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur-md hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          <span className="relative">
            Enter the Lab
            <span className="absolute inset-0 -z-10 rounded-full blur-lg opacity-40 bg-white/20" />
          </span>
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </motion.a>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          <div className="h-10 w-[2px] mx-auto bg-gradient-to-b from-white/60 to-transparent rounded-full animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero

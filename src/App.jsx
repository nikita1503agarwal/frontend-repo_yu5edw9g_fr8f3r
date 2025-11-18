import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Why from './components/Why'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Smooth scroll behavior */}
      <div className="fixed inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" />

      <Hero />
      <About />
      <Products />
      <Why />
      <CTA />
    </div>
  )
}

export default App

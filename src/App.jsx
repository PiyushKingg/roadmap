import React from 'react'
import Navbar from './components/Navbar'
import RoadmapCard from './components/RoadmapCard'
import ROADMAP from './data/roadmap'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated star layers background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/assets/stars-bg.png')] bg-cover bg-center opacity-35 animate-bg-pan" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020217]/60 via-transparent to-[#000000]/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <Navbar />
        <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8">
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight">
            Roadmap — <span className="bg-clip-text text-transparent bg-gradient-to-r from-aurora1 to-aurora2">Aurora</span>
          </h1>
          <p className="mt-3 text-lg opacity-85 max-w-2xl">
            Follow the journey — planned features, current work, and long-term goals. Click any card for details.
          </p>
        </motion.header>

        <section className="mt-10 space-y-6">
          {ROADMAP.map((item) => (
            <RoadmapCard key={item.id} item={item} />
          ))}
        </section>

        <footer className="mt-12 text-center opacity-80">
          © {new Date().getFullYear()} — Your Project • Built with care
        </footer>
      </div>
    </div>
  )
}

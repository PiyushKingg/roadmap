// src/App.jsx
import React from 'react'
import Navbar from './components/Navbar'
import RoadmapCard from './components/RoadmapCard'
import ROADMAP from './data/roadmap'
import { motion } from 'framer-motion'

function BackgroundExternal() {
  // using the external gif URL directly (no local file)
  const url = 'https://i.ibb.co/LhJVmMKP/love-stars.gif'
  return (
    <div aria-hidden className="fixed inset-0 -z-20 overflow-hidden">
      {/* animated GIF as full-screen background */}
      <img
        src={url}
        alt=""
        className="w-full h-full object-cover bg-external-img bg-float"
        style={{ display: 'block' }}
      />

      {/* dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundExternal />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
        <Navbar />

        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Roadmap —{' '}
            <span style={{ background: 'linear-gradient(90deg,#5AC8FA,#A66BFF)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Aurora
            </span>
          </h1>
          <p className="mt-3 text-lg" style={{ color: 'rgba(255,255,255,0.86)' }}>
            Follow the journey — planned features, current work, and long-term goals.
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

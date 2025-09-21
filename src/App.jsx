// src/App.jsx
import React from 'react'
import Navbar from './components/Navbar'
import RoadmapCard from './components/RoadmapCard'
import ROADMAP from './data/roadmap'
import { motion } from 'framer-motion'

function BackgroundExternal() {
  const url = 'https://i.ibb.co/LhJVmMKP/love-stars.gif'
  return (
    <div aria-hidden className="fixed inset-0 -z-20 overflow-hidden">
      <img
        src={url}
        alt=""
        className="w-full h-full object-cover bg-external-img bg-float"
        style={{ display: 'block' }}
      />
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundExternal />
      <Navbar />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header — centered "Roadmap." with gradient text */}
        <motion.header
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h1
            className="h1"
            style={{
              fontSize: '3rem',
              lineHeight: 1.02,
              margin: 0,
              background:
                'linear-gradient(90deg, #072B61 0%, #2A6FB0 40%, #5AC8FA 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontWeight: 800
            }}
          >
            Roadmap.
          </h1>

          <p className="lead mt-3 max-w-2xl mx-auto">
            This is a living plan of ideas and planned features — a place to
            show what we’re considering building and improving. These are not
            strict release dates or guarantees; they represent goals, concepts,
            and community-driven possibilities.
          </p>
        </motion.header>

        {/* Roadmap list — minimal, click to reveal */}
        <section className="timeline">
          {ROADMAP.map((item) => (
            <RoadmapCard key={item.id} item={item} />
          ))}
        </section>
      </main>
      {/* Footer intentionally removed for a minimal look */}
    </div>
  )
}

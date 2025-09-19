import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar(){
  return (
    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aurora1 to-aurora2 shadow-lg flex items-center justify-center">
            <img src="/assets/planet.svg" alt="logo" className="w-6 h-6" />
          </div>
          <div className="text-sm font-semibold">Aurora — Roadmap</div>
        </div>

        <div className="space-x-3">
          <a href="#roadmap" className="text-sm opacity-90 hover:underline">Roadmap</a>
          <a href="https://discord.gg" target="_blank" rel="noreferrer" className="text-sm opacity-90 hover:underline">Join</a>
        </div>
      </div>
    </motion.nav>
  )
}

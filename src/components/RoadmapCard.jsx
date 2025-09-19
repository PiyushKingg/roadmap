import React, { useState } from 'react'
import { motion } from 'framer-motion'

const statusColor = {
  'completed': 'bg-green-500/30 text-green-200',
  'in-progress': 'bg-yellow-400/20 text-yellow-200',
  'planned': 'bg-violet-500/10 text-violet-200'
}

export default function RoadmapCard({ item }){
  const [open, setOpen] = useState(false)

  return (
    <motion.div layout className="card p-6 rounded-2xl cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-start gap-5">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#5AC8FA,#A66BFF)' }}>
            <div className="text-black font-semibold">{item.phase[0]}</div>
          </div>
          <div className="w-px bg-white/6 h-full mt-4" />
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-80">{item.phase} • <span className="opacity-70">{item.date}</span></div>
              <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
            </div>
            <div className={`px-3 py-1 rounded-lg text-xs font-medium ${statusColor[item.status] || 'bg-white/5'}`}>
              {item.status.replace('-', ' ')}
            </div>
          </div>

          <motion.ul initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} className="mt-4 ml-4 list-disc overflow-hidden">
            {item.bullets.map((b, i) => <li key={i} className="py-1">{b}</li>)}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  )
}

// src/components/RoadmapCard.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RoadmapCard({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="card p-5 rounded-2xl cursor-pointer"
      onClick={() => setOpen((s) => !s)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setOpen((s) => !s)
      }}
      aria-expanded={open}
      aria-controls={`desc-${item.id}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="node" aria-hidden>
            <img
              src={item.icon}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <div className="small text-muted">{open ? 'Hide' : 'View'}</div>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={`desc-${item.id}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="mt-3 text-sm text-muted"
              >
                <p style={{ margin: 0 }}>{item.description}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  )
}

// src/components/RoadmapCard.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function RoadmapCard({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="card cursor-pointer"
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
        {/* circular small icon */}
        <div className="flex-shrink-0">
          <div className="node-small" aria-hidden>
            <img src={item.icon} alt="" className="node-img" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">{item.title}</h3>

            {/* chevron */}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.22 }}
              className="chev"
              aria-hidden
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.span>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={`desc-${item.id}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.24 }}
                className="mt-3 text-sm text-muted"
              >
                <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                  {item.bullets.map((b, i) => {
                    if (typeof b === 'string') {
                      return (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>
                          {b}
                        </li>
                      )
                    }
                    // object with sublist
                    return (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>
                        <div>{b.text}</div>
                        {b.sub && (
                          <ul style={{ marginTop: '0.5rem', paddingLeft: '1rem', listStyleType: 'disc' }}>
                            {b.sub.map((s, idx) => (
                              <li key={idx} style={{ marginBottom: '0.25rem' }}>
                                {s}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  )
}

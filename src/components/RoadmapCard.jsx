// src/components/RoadmapCard.jsx
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function RoadmapCard({ item }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const [maxH, setMaxH] = useState(0)

  // measure content height for smoother max-height transitions
  useEffect(() => {
    if (contentRef.current) {
      setMaxH(contentRef.current.scrollHeight)
    }
  }, [open])

  return (
    <article
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
        <div className="flex-shrink-0">
          <div className="node-small" aria-hidden>
            <img src={item.icon} alt="" className="node-img" />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              <span className="title-fancy">{item.title}</span>
            </h3>

            <motion.span
              className="chev"
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.28, ease: [0.2, 0.9, 0.2, 1] }}
              aria-hidden
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.span>
          </div>

          {/* Smooth dropdown using CSS max-height transition; measure height dynamically */}
          <div
            id={`desc-${item.id}`}
            className={`dropdown ${open ? '' : 'collapsed'}`}
            style={{
              maxHeight: open ? `${maxH}px` : 0,
            }}
            aria-hidden={!open}
          >
            <div ref={contentRef} style={{ paddingTop: open ? 12 : 0, paddingBottom: open ? 8 : 0 }}>
              <ul>
                {item.bullets.map((b, i) => {
                  if (typeof b === 'string') {
                    return <li key={i}>{b}</li>
                  }
                  // object with text + sublist
                  return (
                    <li key={i}>
                      <div>{b.text}</div>
                      {b.sub && (
                        <ul className="sublist" aria-hidden={!open}>
                          {b.sub.map((s, idx) => (
                            <li key={idx}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

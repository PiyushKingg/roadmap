// src/components/Navbar.jsx
import React from 'react'

export default function Navbar() {
  // Minimal fixed navbar for spacing only (no left icon, no right links)
  return (
    <header
      aria-hidden="true"
      style={{ height: 72 }}
      className="fixed inset-x-0 top-0 z-20 bg-transparent"
    />
  )
}

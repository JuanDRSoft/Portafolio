'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold text-black cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          JuanDRSoft
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {['experiencia', 'proyectos', 'skills', 'testimonios', 'contacto'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-600 hover:text-gray-900 transition-colors capitalize cursor-pointer"
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          {['experiencia', 'proyectos', 'skills', 'testimonios', 'contacto'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left px-6 py-3 text-gray-600 hover:bg-gray-50 capitalize"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Header

'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Code, Briefcase, MessageSquare, FolderGit2, Send } from 'lucide-react'
import Hero from './Hero'
import { VisibleSections } from '@/interface/interfaces'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Testimonials from './Testimonials'
import Contact from './Contact'

export default function Portfolio() {
  const [visibleSections, setVisibleSections] = useState<VisibleSections>({})

  // Intersection Observer para animaciones de entrada
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true
            }))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <Experience visibleSections={visibleSections} />

      {/* Projects Section */}
      <Projects visibleSections={visibleSections} />

      {/* Skills Section */}
      <Skills visibleSections={visibleSections} />

      {/* Testimonials Section */}
      <Testimonials visibleSections={visibleSections} />

      {/* Contact Section */}
      <Contact visibleSections={visibleSections} />
    </div>
  )
}

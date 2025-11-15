/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Project {
  $id: string
  name: string
  description: string
  skills: string[]
  images: any[]
}

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  icon: string
}

export interface VisibleSections {
  experiencia?: boolean
  proyectos?: boolean
  skills?: boolean
  testimonios?: boolean
  contacto?: boolean
}

export interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
}

export interface Skill {
  name: string
  level: number
}

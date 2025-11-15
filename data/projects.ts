import { Project } from '@/types'
import IMAGE from '../public/profile.jpg'

export const projects: Project[] = [
  {
    $id: '1',
    name: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
    images: [IMAGE]
  },
  {
    $id: '2',
    name: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
    images: [IMAGE]
  },
  {
    $id: '3',
    name: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
    images: [IMAGE]
  }
]

import { Project } from '@/types'
import GLE from '../public/projects/gle.png'
import PRO from '../public/projects/proclinica.png'
import TUMBUST from '../public/projects/tumbust.png'
import BYRON from '../public/projects/byron.png'
import GOL from '../public/projects/gol.png'
import CW from '../public/projects/cw.png'
import CW2 from '../public/projects/cw2.png'
import CW3 from '../public/projects/cw3.png'
import NBASES from '../public/projects/nbases.png'

export const projects: Project[] = [
  {
    name: 'Podo Pro',
    description:
      'Colaboración en la costrucción de este proyecto SaaS para el sector de la salud. Manejo de clientes, facturación y gestión de citas.',
    skills: ['React', 'Redux', 'Tailwind CSS', 'CSS', 'HTML', 'TypeScript'],
    images: [PRO]
  },
  {
    name: 'GLE Smartsales',
    description:
      'Creación de aplicación web para GLE Smartsales, gestion comercial y estadisticas.',
    skills: [
      'React',
      'Tailwind CSS',
      'Redux',
      'CSS',
      'HTML',
      'TypeScript',
      'Docker',
      'Node.js',
      'PostgreSQL'
    ],
    images: [GLE]
  },
  {
    name: 'Tumbust',
    description: 'Creación de un Ecommerce de tumbust en suecia',
    skills: ['php', 'WordPress', 'woocommerce', 'CSS', 'HTML'],
    images: [TUMBUST]
  },
  {
    name: 'Celuweb 2.0 Mapa de servicios',
    description: 'Creación de mapa para la gestion de servicios en instantaneo',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Here'],
    images: [CW]
  },

  {
    name: 'Celuweb 2.0 Mapa de entregas',
    description: 'Creación de mapa para la gestion de entregas, seguimiento y rastreo',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Here'],
    images: [CW2]
  },
  {
    name: 'Celuweb 2.0 Mapa de zenzo',
    description: 'Creación de mapa para la gestion del zenzo de empresas en la base de datos',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Google Maps'],
    images: [CW3]
  },
  {
    name: 'Gol Manager',
    description:
      'Creación de app web y apoyo en la app movil, para el manejo de equipos y escuelas de futbol',
    skills: ['React', 'React Native', 'Tailwind CSS', 'redux', 'CSS', 'HTML', 'TypeScript'],
    images: [GOL]
  },
  {
    name: 'App de Recaudos',
    description: 'Creacion de app movil para la gestion de recaudos de dinero',
    skills: ['React Native', 'Firebase', 'TypeScript'],
    images: [BYRON]
  },
  {
    name: 'Nbases Extensión para Google Chrome',
    description:
      'Creación de extensión para Google Chrome, scrapping enviado a una base de datos para procesar con IA y generar reportes de AirBnb',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
    images: [NBASES]
  }
]

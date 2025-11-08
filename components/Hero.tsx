import { scrollToSection } from '@/utils/functions'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import PROFILE from '../public/profile.jpg'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <Image
          src={PROFILE}
          alt="Logo"
          width={100}
          height={100}
          className="w-32 h-32 shadow-xl border border-gray-200  bg-gradient-to-br from-gray-800 to-gray-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold opacity-0 animate-fadeIn"
        />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeInUp delay-200">
          Software Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 opacity-0 animate-fadeInUp delay-300">
          Creando experiencias web excepcionales con código limpio y diseño moderno
        </p>
        <div className="flex gap-4 justify-center opacity-0 animate-fadeInUp delay-400">
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Contáctame
          </button>
          <button
            onClick={() => scrollToSection('proyectos')}
            className="border-2 border-gray-900 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            Ver Proyectos
          </button>
        </div>
        <div className="flex gap-6 justify-center mt-12 opacity-0 animate-fadeInUp delay-500">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

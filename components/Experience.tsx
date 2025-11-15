import { experiences } from '@/data/experience'
import { VisibleSections } from '@/types'
import { Briefcase } from 'lucide-react'
import Image from 'next/image'

const Experience = ({ visibleSections }: { visibleSections: VisibleSections }) => {
  return (
    <section id="experiencia" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-16 opacity-0 ${
            visibleSections.experiencia ? 'animate-fadeInUp' : ''
          }`}
        >
          <Briefcase className="text-gray-900" size={32} />
          <h2 className="text-4xl font-bold">Experiencia</h2>
        </div>
        <div className="relative">
          {/* Línea vertical de la timeline */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative md:pl-20 opacity-0 ${
                  visibleSections.experiencia ? 'animate-slideInLeft' : ''
                }`}
                style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
              >
                {/* Punto de la timeline */}
                <div className="absolute left-3 top-1 overflow-hidden w-10 h-10 bg-gray-900 rounded-full border-4 border-gray-50 z-10 hidden md:block">
                  <Image src={exp.icon} alt={exp.role} width={100} height={100} />
                </div>

                {/* Contenido de la experiencia */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <span className="inline-block bg-gray-900 text-white text-xs px-3 py-1 rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                  <div
                    className="list-none"
                    dangerouslySetInnerHTML={{ __html: exp.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

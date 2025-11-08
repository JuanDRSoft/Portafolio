import { VisibleSections } from '@/interface/interfaces'
import { Briefcase } from 'lucide-react'

const Experience = ({ visibleSections }: { visibleSections: VisibleSections }) => {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Presente',
      description: 'Desarrollo de aplicaciones web escalables y liderazgo de equipo de desarrollo.',
      icon: 'code'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Creación de interfaces modernas y responsive para diversos clientes.',
      icon: 'briefcase'
    },
    {
      role: 'Junior Developer',
      company: 'Startup',
      period: '2019 - 2020',
      description: 'Desarrollo de features y mantenimiento de aplicaciones web.',
      icon: 'user'
    }
  ]

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
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative pl-20 opacity-0 ${
                  visibleSections.experiencia ? 'animate-slideInLeft' : ''
                }`}
                style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
              >
                {/* Punto de la timeline */}
                <div className="absolute left-5 top-1 w-7 h-7 bg-gray-900 rounded-full border-4 border-gray-50 z-10" />

                {/* Contenido de la experiencia */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <span className="inline-block bg-gray-900 text-white text-xs px-3 py-1 rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-700">{exp.description}</p>
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

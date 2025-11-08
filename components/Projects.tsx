import { VisibleSections } from '@/interface/interfaces'
import { ExternalLink, FolderGit2 } from 'lucide-react'

const Projects = ({ visibleSections }: { visibleSections: VisibleSections }) => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de comercio electrónico con pasarela de pagos y panel administrativo.',
      tech: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop'
    },
    {
      title: 'Task Management App',
      description:
        'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.',
      tech: ['React', 'Firebase', 'Tailwind'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Dashboard interactivo con visualización de datos y reportes personalizables.',
      tech: ['Next.js', 'Chart.js', 'API REST'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
    }
  ]

  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-12 opacity-0 ${
            visibleSections.proyectos ? 'animate-fadeInUp' : ''
          }`}
        >
          <FolderGit2 className="text-gray-900" size={32} />
          <h2 className="text-4xl font-bold">Proyectos</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 ${
                visibleSections.proyectos ? 'animate-fadeInUp' : ''
              }`}
              style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
            >
              <div className="relative h-48 bg-gray-100 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-gray-900 hover:underline"
                >
                  Ver proyecto <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

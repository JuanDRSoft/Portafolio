import { projects } from '@/data/projects'
import { Project, VisibleSections } from '@/types'
import { FolderGit2 } from 'lucide-react'
import Image from 'next/image'

const Projects = ({ visibleSections }: { visibleSections: VisibleSections }) => {
  return (
    <section id="proyectos" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-12 opacity-0 ${
            visibleSections.proyectos ? 'animate-fadeInUp' : ''
          }`}
        >
          <FolderGit2 className="text-gray-900" size={32} />
          <h2 className="text-4xl font-bold">Proyectos Destacados</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project, idx) => (
            <div
              key={idx}
              className={`border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 opacity-0 ${
                visibleSections.proyectos ? 'animate-fadeInUp' : ''
              }`}
              style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
            >
              <div className="relative h-48 bg-gray-100 overflow-hidden group">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  width={1000}
                  height={100}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <a
                  href={project.url}
                  className="inline-flex items-center gap-2 text-gray-900 hover:underline"
                >
                  Ver proyecto <ExternalLink size={16} />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

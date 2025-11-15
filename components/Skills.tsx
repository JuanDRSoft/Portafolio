import { skills } from '@/data/skills'
import { VisibleSections } from '@/types'
import { Code } from 'lucide-react'

const Skills = ({ visibleSections }: { visibleSections: VisibleSections }) => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-12 opacity-0 ${
            visibleSections.skills ? 'animate-fadeInUp' : ''
          }`}
        >
          <Code className="text-gray-900" size={32} />
          <h2 className="text-4xl font-bold">Habilidades</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`opacity-0 ${visibleSections.skills ? 'animate-slideInRight' : ''}`}
              style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gray-900 h-2 rounded-full transition-all duration-1000"
                  style={{ width: visibleSections.skills ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

import { testimonials } from '@/data/testimonials'
import { VisibleSections } from '@/types'
import { MessageSquare } from 'lucide-react'

const Testimonials = ({ visibleSections }: { visibleSections: VisibleSections }) => {
  return (
    <section id="testimonios" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-12 opacity-0 ${
            visibleSections.testimonios ? 'animate-fadeInUp' : ''
          }`}
        >
          <MessageSquare className="text-gray-900" size={32} />
          <h2 className="text-4xl font-bold">Testimonios</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`bg-gray-50 p-6 rounded-lg border border-gray-200 opacity-0 ${
                visibleSections.testimonios ? 'animate-fadeInUp' : ''
              }`}
              style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          target="_blank"
          href="https://es.fiverr.com/juandiegoriossa"
          // onClick={() => scrollToSection('contacto')}
          className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Ver más testimonios
        </a>
      </div>
    </section>
  )
}

export default Testimonials

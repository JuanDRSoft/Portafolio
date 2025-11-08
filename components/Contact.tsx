import { VisibleSections } from '@/interface/interfaces'
import { Send } from 'lucide-react'
import { useState } from 'react'

const Contact = ({ visibleSections }: { visibleSections: VisibleSections }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa todos los campos')
      return
    }
    console.log('Form submitted:', formData)
    alert('¡Mensaje enviado! Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contacto" className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div
          className={`flex items-center gap-3 mb-12 opacity-0 ${
            visibleSections.contacto ? 'animate-fadeInUp' : ''
          }`}
        >
          <Send className="text-gray-900" size={32} />
          <h2 className="text-4xl font-bold">Contacto</h2>
        </div>
        <div
          className={`space-y-6 opacity-0 ${
            visibleSections.contacto ? 'animate-fadeInUp delay-200' : ''
          }`}
        >
          <div>
            <label className="block text-sm font-medium mb-2">Nombre</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Mensaje</label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Enviar Mensaje
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact

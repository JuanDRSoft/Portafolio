import { VisibleSections } from '@/types'
import { Linkedin, Mail, Phone, Send } from 'lucide-react'
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
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex justify-center items-center gap-3 mb-14 opacity-0 ${
            visibleSections.contacto ? 'animate-fadeInUp' : ''
          }`}
        >
          <Send className="text-gray-900" size={32} />
          <h2 className="text-4xl font-bold">Datos De Contacto</h2>
        </div>

        <div className="flex md:flex-row flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center gap-2 w-full">
            <div className="bg-black w-20 h-20 rounded-full flex justify-center items-center">
              <Phone className="text-white" size={32} />
            </div>

            <a target="_blank" href="tel:+573103782458" className="font-semibold text-2xl">
              +57 310 378 2458
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 w-full">
            <div className="bg-black w-20 h-20 rounded-full flex justify-center items-center">
              <Mail className="text-white" size={32} />
            </div>

            <a target="_blank" href="mailto:juandrsoft@gmail" className="font-semibold text-2xl">
              juandrsoft@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 w-full">
            <div className="bg-black w-20 h-20 rounded-full flex justify-center items-center">
              <Linkedin className="text-white" size={32} />
            </div>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/juan-diego-rios-saenz/"
              className="font-semibold text-2xl"
            >
              Juan Diego Ríos Sáenz
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

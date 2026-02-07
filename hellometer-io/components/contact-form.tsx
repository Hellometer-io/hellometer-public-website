'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-dm-sans text-slate-100">Get in Touch</h2>
            <p className="text-xl text-slate-400 mt-4">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="form-textarea w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500"
                  placeholder="Your message..."
                  required
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group"
                >
                  Send Message <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

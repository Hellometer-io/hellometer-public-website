'use client'

import { useActionState, useRef } from 'react'
import { submitContactForm, type ContactFormState } from '@/app/actions/contact'

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    null
  )
  const formRef = useRef<HTMLFormElement>(null)

  if (state?.success) {
    formRef.current?.reset()
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

          {state?.success ? (
            <div className="max-w-xl mx-auto text-center">
              <div className="bg-green-900/30 border border-green-700 rounded-lg p-6">
                <p className="text-green-400 text-lg font-medium">Message sent successfully!</p>
                <p className="text-slate-400 mt-2">We'll get back to you as soon as possible.</p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} action={formAction} className="max-w-xl mx-auto">
              <div className="space-y-4">

                {state?.error && (
                  <div className="bg-red-900/30 border border-red-700 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{state.error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    rows={6}
                    className="form-textarea w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500"
                    placeholder="Your message..."
                    required
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? 'Sending...' : 'Send Message'}{' '}
                    {!isPending && (
                      <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  )
}

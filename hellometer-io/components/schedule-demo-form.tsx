'use client'

import { useActionState, useRef } from 'react'
import { submitDemoRequest, type DemoFormState } from '@/app/actions/schedule-demo'

export default function ScheduleDemoForm() {
  const [state, formAction, isPending] = useActionState<DemoFormState, FormData>(
    submitDemoRequest,
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
            <h2 className="h2 font-dm-sans text-slate-100">Schedule a Demo</h2>
            <p className="text-xl text-slate-400 mt-4">
              See how Hellometer can transform your operations. Fill out the form below and we'll set up a personalized demo for your team.
            </p>
          </div>

          {state?.success ? (
            <div className="max-w-xl mx-auto text-center">
              <div className="bg-green-900/30 border border-green-700 rounded-lg p-6">
                <p className="text-green-400 text-lg font-medium">Demo request submitted!</p>
                <p className="text-slate-400 mt-2">We'll be in touch shortly to schedule your demo.</p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-4 text-blue-400 hover:text-blue-300 underline text-sm"
                >
                  Submit another request
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

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name <span className="text-red-400">*</span>
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
                      Email <span className="text-red-400">*</span>
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
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="form-input w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500"
                      placeholder="Your company"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="locations" className="block text-sm font-medium text-slate-300 mb-2">
                    Number of Locations
                  </label>
                  <select
                    id="locations"
                    name="locations"
                    className="form-select w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white"
                  >
                    <option value="">Select...</option>
                    <option value="1-5">1–5</option>
                    <option value="6-20">6–20</option>
                    <option value="21-50">21–50</option>
                    <option value="51-100">51–100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-textarea w-full bg-slate-800 border border-slate-700 focus:border-blue-500 text-white placeholder-slate-500"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isPending ? 'Submitting...' : 'Request a Demo'}{' '}
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

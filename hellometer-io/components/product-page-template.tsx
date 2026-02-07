import Image from 'next/image'
import Link from 'next/link'
import type { ProductData } from '@/app/products/product-data'

export default function ProductPageTemplate({ data }: { data: ProductData }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-20 md:pt-40 md:pb-44">
            {/* Headline — full width, centered */}
            <h1 className="h1 font-inter text-slate-100 mb-12 font-bold text-center">{data.headline}</h1>

            {/* Two-column: description + CTA | media */}
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Left — description & CTA */}
              <div className="md:w-1/2 text-center md:text-left">
                <p className="text-xl text-slate-400 mb-8">
                  {data.description}
                </p>
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 group" href="/schedule-demo">
                    Schedule a Demo <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
                  </Link>
                </div>
              </div>

              {/* Right — hero media */}
              <div className="md:w-1/2">
                <div className="rounded-lg shadow-2xl overflow-hidden">
                  {data.heroMedia.type === 'video' ? (
                    <video
                      className="w-full block"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={data.heroMedia.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={data.heroMedia.src}
                      alt={data.headline}
                      width={896}
                      height={504}
                      className="w-full block"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-dm-sans">How It Works</h2>
            </div>

            <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-3 md:max-w-none">
              {data.howItWorks.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white text-lg font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="h4 font-dm-sans mb-2">{step.title}</h3>
                  <p className="text-lg text-slate-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Sections */}
      {data.sections.map((section, index) => (
        <section key={section.heading} className={index % 2 === 1 ? 'bg-slate-50' : ''}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-12 md:py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="h2 font-dm-sans mb-6">{section.heading}</h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i} className="text-lg text-slate-500 mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Benefits Section */}
      <section className="bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="grid gap-8 md:grid-cols-4 text-center">
              {data.benefits.map((benefit) => (
                <div key={benefit.description}>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="h2 font-dm-sans mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-slate-500 mb-8">
                {data.ctaText}
              </p>
              <div>
                <Link className="btn text-white bg-blue-600 hover:bg-blue-700" href="/schedule-demo">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

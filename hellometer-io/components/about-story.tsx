import Link from 'next/link'

export default function AboutStory() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-lg text-slate-500">

              <h2 className="h3 font-dm-sans text-slate-800 mb-4" data-aos="fade-up">Our Story</h2>

              <p className="mb-8" data-aos="fade-up" data-aos-delay="100">
                Hellometer was founded by <strong className="font-medium text-slate-800">Alex Popper</strong> and <strong className="font-medium text-slate-800">Alberto Rivera</strong> with a simple observation: the best-run restaurant locations have something in common — engaged management. But no one can be everywhere at once.
              </p>

              <p className="mb-8" data-aos="fade-up" data-aos-delay="200">
                We built Hellometer to solve that problem. Using AI-powered computer vision, we give operators real-time visibility into what's happening at every location — from drive-thru speed to kitchen efficiency to loss prevention — without adding any burden to the crew.
              </p>

              <p className="mb-8" data-aos="fade-up" data-aos-delay="300">
                In 2020, Hellometer was backed by <strong className="font-medium text-slate-800">Y Combinator (S20)</strong>, joining a community of founders building category-defining companies. That support helped us accelerate our technology and expand to restaurants across the country.
              </p>

              <p data-aos="fade-up" data-aos-delay="400">
                Today, Hellometer helps quick-service restaurants and retailers measure what matters, improve operations, and run every location like the owner is always onsite. What started in drive-thrus has expanded into retail, bringing the same AI-powered visibility to a new set of challenges.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

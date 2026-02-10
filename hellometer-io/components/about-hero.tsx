export default function AboutHero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 h-[28rem]" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40 pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-dm-sans text-slate-100 mb-4" data-aos="fade-up">
              About Hellometer
            </h1>
            <p className="text-xl text-slate-400" data-aos="fade-up" data-aos-delay="100">
              We're on a mission to make every quick-service restaurant run like the best one in the chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

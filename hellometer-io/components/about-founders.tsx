export default function AboutFounders() {
  const founders = [
    {
      name: 'Alex Popper',
      role: 'Founder, CEO',
    },
    {
      name: 'Alberto Rivera',
      role: 'Co-Founder, CTO',
    },
  ]

  return (
    <section className="bg-silver-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-dm-sans" data-aos="fade-up">Meet the Founders</h2>
          </div>

          <div className="max-w-sm mx-auto sm:max-w-none grid sm:grid-cols-2 gap-12 items-start" data-aos-id-founders>
            {founders.map((founder, i) => (
              <div
                key={founder.name}
                className="text-center"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-founders]"
                {...(i > 0 ? { 'data-aos-delay': String(i * 100) } : {})}
              >
                <div className="inline-flex w-24 h-24 rounded-full bg-slate-200 items-center justify-center mb-4">
                  <span className="text-2xl font-bold font-dm-sans text-slate-500">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-xl font-dm-sans font-bold text-slate-800 mb-1">{founder.name}</h4>
                <div className="font-medium text-blue-500">{founder.role}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

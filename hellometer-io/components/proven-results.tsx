export default function ProvenResults() {
  const stats = [
    {
      value: '47s',
      label: 'Faster Wait Times',
      description:
        'Improved service times lead to increased guest satisfaction and give employees more time to focus on other duties.',
    },
    {
      value: '1%',
      label: 'Revenue per 7s Saved',
      description:
        'For every 7 seconds off wait times, owners see a 1% increase in revenue. For some customers, that\'s about $30k/year.',
    },
    {
      value: 'Easy',
      label: 'Setup & Effective',
      description:
        'Installation is as easy as putting up a camera. AI helps each location run like the owner is always onsite.',
    },
  ]

  return (
    <section className="bg-silver-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-dm-sans">Proven Results</h2>
            <p className="text-xl text-slate-500 mt-4">
              Real numbers from real restaurants using Hellometer every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
                data-aos="fade-up"
              >
                <div className="text-5xl md:text-6xl font-bold text-blue-500 font-dm-sans mb-2">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{stat.label}</h3>
                <p className="text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

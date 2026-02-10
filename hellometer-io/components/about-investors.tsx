import Image from 'next/image'

const investors = [
  { name: 'Y Combinator', href: 'https://www.ycombinator.com', logo: '/images/investors/y-combinator.png' },
  { name: 'Bling Capital', href: 'https://www.blingcap.com' },
  { name: 'The Syndicate', href: 'https://www.launchsyndicate.com' },
]

export default function AboutInvestors() {
  return (
    <section className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16">

          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Backed By</h3>
          </div>

          <div className="flex items-center justify-center gap-12 md:gap-20">
            {investors.map((investor) => (
              <a
                key={investor.name}
                href={investor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                {investor.logo ? (
                  <Image
                    src={investor.logo}
                    alt={investor.name}
                    width={180}
                    height={48}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="text-2xl md:text-3xl font-bold font-dm-sans text-slate-500 hover:text-slate-300 transition-colors duration-200">
                    {investor.name}
                  </span>
                )}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

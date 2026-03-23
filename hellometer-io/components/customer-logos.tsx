import Image from 'next/image'

const customers = [
  { name: "Carl's Jr.", logo: '/images/customer_logos/Carl\'s_Jr._logo_(2022).svg.png' },
  { name: "Miguel's Jr.", logo: '/images/customer_logos/logo-miguels-jr.svg' },
  { name: 'S&L Companies', logo: '/images/customer_logos/s&lcompanies.webp' },
  { name: 'TC Restaurants', logo: '/images/customer_logos/TC-Logo_Knockout_simple_AO_360x120.png' },
  { name: 'Cabecera Areas', logo: '/images/customer_logos/CabeceraAreas.jpg' },
  { name: 'Mighty Fine', logo: '/images/customer_logos/Website-MightyFineLogo_vector.webp' },
  { name: "Church's Chicken", logo: '/images/customer_logos/Churchs-logo.svg.png' },
  { name: 'Subway', logo: '/images/customer_logos/subway_logo.svg' },
]

export default function CustomerLogos() {
  return (
    <section className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-16">

          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400">Trusted By</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {customers.map((customer) => (
              <div key={customer.name} className="flex items-center">
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

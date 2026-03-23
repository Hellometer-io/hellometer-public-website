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

export default function CustomerLogosCarousel() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-4 md:py-5">

          <div className="text-center mb-3">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">Trusted By</h3>
          </div>

        </div>
      </div>

      {/* Constrained marquee */}
      <div className="overflow-hidden pb-4 md:pb-5 max-w-6xl mx-auto">
        <div
          className="flex w-max"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {/* Duplicate the list so the loop is seamless */}
          {[...customers, ...customers].map((customer, i) => (
            <div key={i} className="flex items-center justify-center mx-10">
              <Image
                src={customer.logo}
                alt={customer.name}
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

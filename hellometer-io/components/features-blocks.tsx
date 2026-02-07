import Link from 'next/link'
import { products } from '@/app/products/product-data'

const productTiles = [
  { slug: 'drive-thru-timer', title: 'Drive-Thru Timer', delay: undefined },
  { slug: 'lobby-timer', title: 'Lobby Timer', delay: '100' },
  { slug: 'loss-prevention', title: 'Loss Prevention', delay: '200' },
  { slug: 'kitchen-monitoring', title: 'Kitchen Monitoring', delay: '300' },
] as const

export default function FeaturesBlocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-dm-sans">Our Products</h2>
            <p className="text-xl text-slate-500">Comprehensive solutions to optimize every aspect of your quick-service restaurant operations.</p>
          </div>

          {/* Items */}
          <div className="relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:gap-y-20 items-start md:max-w-none" data-aos-id-blocks>

            {/* Lines decoration */}
            <div className="absolute inset-0 -my-8 md:-my-12 pointer-events-none hidden md:flex" aria-hidden="true">
              <div className="h-full w-full border-l last:border-r border-slate-100"></div>
              <div className="h-full w-full border-l last:border-r border-slate-100"></div>
            </div>

            {productTiles.map((tile) => {
              const data = products[tile.slug]
              return (
                <div
                  key={tile.slug}
                  className="relative"
                  data-aos="fade-up"
                  data-aos-anchor="[data-aos-id-blocks]"
                  {...(tile.delay ? { 'data-aos-delay': tile.delay } : {})}
                >
                  {/* Video preview — cropped top slice */}
                  <div className="h-40 mb-4 rounded-lg overflow-hidden">
                    {data.heroMedia.type === 'video' ? (
                      <video
                        className="w-full h-full object-cover object-top"
                        muted
                        playsInline
                        preload="metadata"
                      >
                        <source src={data.heroMedia.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={data.heroMedia.src}
                        alt={tile.title}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                  <h3 className="h4 font-dm-sans mb-2">{tile.title}</h3>
                  <p className="text-lg text-slate-500 mb-3">{data.description}</p>
                  <Link href={`/products/${tile.slug}`} className="font-medium text-blue-600 hover:text-blue-700 inline-flex items-center transition duration-150 ease-in-out group">
                    Learn More <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
                  </Link>
                </div>
              )
            })}

          </div>

        </div>
      </div>
    </section>
  )
}

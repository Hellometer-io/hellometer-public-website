/**
 * Drive-Thru Timer Product Page
 *
 * This page showcases the Drive-Thru Timer product with:
 * - Hero section with product headline and CTA
 * - Key features section (3 main features)
 * - Bottom CTA to encourage demo scheduling
 *
 * Page structure follows the standard product page template.
 * All content uses placeholder text that can be customized later.
 */

// SEO metadata for this page
export const metadata = {
  title: 'Drive-Thru Timer - Hellometer',
  description: 'Optimize your drive-thru operations with real-time vehicle tracking and performance analytics.',
}

import Link from 'next/link'

export default function DriveThruTimerPage() {
  return (
    <>
      {/*
        Hero Section
        - Dark slate background with diagonal clip-path for visual interest
        - Centered layout with product headline and description
        - Primary CTA: Schedule a Demo button
       */}
      <section className="relative">
        {/* Dark background with decorative diagonal bottom edge */}
        <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* Extra padding top to account for fixed header */}
          <div className="pt-32 pb-20 md:pt-40 md:pb-44">
            <div className="text-center">
              {/* Product headline */}
              <h1 className="h1 font-inter text-slate-100 mb-4 font-bold">Optimize Your Drive-Thru Operations</h1>

              {/* Product description */}
              <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
                Real-time vehicle tracking and performance analytics to reduce wait times and improve customer satisfaction at every touchpoint.
              </p>

              {/* CTA button */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group" href="/schedule-demo">
                    Schedule a Demo <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        Features Section
        - Displays 3 key product features in a grid
        - Layout: 1 column on mobile, 2 columns on tablet, 3 columns on desktop
        - Each feature has a blue dot bullet point and description
       */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-playfair-display">Key Features</h2>
              <p className="text-xl text-slate-500">Everything you need to maximize drive-thru efficiency and customer experience.</p>
            </div>

            {/* Feature grid - responsive columns */}
            <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
              {/* Feature 1 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
                  <h3 className="h4 font-playfair-display">Real-Time Tracking</h3>
                </div>
                <p className="text-lg text-slate-500">Monitor vehicle progress through each stage of your drive-thru with precision timing.</p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
                  <h3 className="h4 font-playfair-display">Performance Analytics</h3>
                </div>
                <p className="text-lg text-slate-500">Gain insights into peak hours, bottlenecks, and service time trends to optimize operations.</p>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
                  <h3 className="h4 font-playfair-display">Multi-Location Support</h3>
                </div>
                <p className="text-lg text-slate-500">Manage and compare performance across all your restaurant locations from one dashboard.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        Bottom CTA Section
        - Final call-to-action to encourage demo scheduling
        - Centered layout with compelling copy
        - Blue button matches brand colors
       */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="relative max-w-3xl mx-auto text-center">
              {/* CTA headline */}
              <h2 className="h2 font-playfair-display mb-4">Ready to Get Started?</h2>

              {/* Supporting text */}
              <p className="text-xl text-slate-500 mb-8">
                See how Drive-Thru Timer can transform your operations and boost customer satisfaction.
              </p>

              {/* CTA button */}
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

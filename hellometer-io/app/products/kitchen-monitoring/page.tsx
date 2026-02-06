/**
 * Kitchen Monitoring Product Page
 *
 * Showcases the Back of House / Kitchen Monitoring product.
 * Focuses on food preparation monitoring, safety compliance, and efficiency.
 */

// SEO metadata for this page
export const metadata = {
  title: 'Kitchen Monitoring - Hellometer',
  description: 'Monitor food preparation, ensure quality and safety standards, and maintain peak efficiency in your back of house.',
}

import Link from 'next/link'

export default function KitchenMonitoringPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Dark background */}
        <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-20 md:pt-40 md:pb-44">
            <div className="text-center">
              <h1 className="h1 font-inter text-slate-100 mb-4 font-bold">Real-Time Visibility into Kitchen Operations</h1>
              <p className="text-xl text-slate-400 mb-8 max-w-3xl mx-auto">
                Monitor food preparation, ensure quality and safety standards, and maintain peak efficiency in your back of house operations.
              </p>
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

      {/* Features/Benefits Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 font-playfair-display">Key Features</h2>
              <p className="text-xl text-slate-500">Complete visibility and control over your kitchen operations for consistent quality.</p>
            </div>

            {/* Feature grid */}
            <div className="max-w-sm mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3 md:max-w-none">
              {/* Feature 1 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
                  <h3 className="h4 font-playfair-display">Food Prep Monitoring</h3>
                </div>
                <p className="text-lg text-slate-500">Track food preparation processes to ensure consistency and maintain quality standards.</p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
                  <h3 className="h4 font-playfair-display">Safety Compliance</h3>
                </div>
                <p className="text-lg text-slate-500">Ensure food safety protocols and health standards are consistently followed.</p>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-3 w-3 rounded-full bg-blue-600 mr-2"></div>
                  <h3 className="h4 font-playfair-display">Efficiency Insights</h3>
                </div>
                <p className="text-lg text-slate-500">Identify bottlenecks and optimize workflows to maximize kitchen productivity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="h2 font-playfair-display mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-slate-500 mb-8">
                See how Kitchen Monitoring can transform your back of house operations.
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

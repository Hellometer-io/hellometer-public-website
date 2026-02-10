import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-almost-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          {/* Logo & tagline */}
          <div className="sm:col-span-12 lg:col-span-4 lg:max-w-xs">
            <div className="mb-2">
              <Link href="/" className="inline-block" aria-label="Hellometer">
                <Image
                  src="/images/logos/hellometerCV_whitelogo.svg"
                  alt="Hellometer"
                  width={160}
                  height={42}
                />
              </Link>
            </div>
            <div className="text-sm text-silver mt-4">
              Real-time measurement and insights for quick-service restaurant operations.
            </div>
          </div>

          {/* Products */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-semibold mb-2">Products</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link href="/products/drive-thru-timer" className="text-silver hover:text-blue-600 transition duration-150 ease-in-out">Drive-Thru Timer</Link>
              </li>
              <li>
                <Link href="/products/lobby-timer" className="text-silver hover:text-blue-600 transition duration-150 ease-in-out">Lobby Timer</Link>
              </li>
              <li>
                <Link href="/products/loss-prevention" className="text-silver hover:text-blue-600 transition duration-150 ease-in-out">Loss Prevention</Link>
              </li>
              <li>
                <Link href="/products/kitchen-monitoring" className="text-silver hover:text-blue-600 transition duration-150 ease-in-out">Kitchen Monitoring</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-100 font-semibold mb-2">Company</h6>
            <ul className="text-sm font-medium space-y-2">
              <li>
                <Link href="/about" className="text-silver hover:text-blue-600 transition duration-150 ease-in-out">About</Link>
              </li>
              <li>
                <Link href="/blog" className="text-silver hover:text-blue-600 transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li>
                <Link href="/schedule-demo" className="text-silver hover:text-blue-600 transition duration-150 ease-in-out">Schedule a Demo</Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-4">
            <h6 className="text-sm text-slate-100 font-semibold mb-2">Contact</h6>
            <address className="text-sm text-silver not-italic leading-relaxed">
              401 Wilshire Boulevard,<br />
              12th Floor,<br />
              Santa Monica, CA 90401
            </address>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-700">

          {/* Copyrights note */}
          <div className="text-sm text-silver">&copy; {new Date().getFullYear()} Hellometer. All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}

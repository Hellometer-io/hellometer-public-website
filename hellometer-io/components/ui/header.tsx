'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header({ mode = 'dark' }: {
  mode?: string
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Full-width background bar styles
  const headerBgStyles = [
    // Frosted glass effect
    "backdrop-blur-sm hover:backdrop-blur-xl",
    // Background colors
    "bg-white/80 hover:bg-slate-100/95",
    "dark:bg-slate-900/80 dark:hover:bg-slate-800/95",
    // Border & Shadow (bottom border only)
    "shadow-sm hover:shadow-lg",
    "border-b border-silver/30 hover:border-silver/80",
    "dark:border-slate-700/30 dark:hover:border-slate-600/80",
    // Animation
    "transition-all duration-300"
  ].join(" ")

  return (
    <header className={`fixed top-0 w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <div className={headerBgStyles}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo scrolled={scrolled} />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              {/* Products dropdown */}
              <Dropdown title="Products">
                <li>
                  <Link href="/products/drive-thru-timer" className="font-medium text-sm text-navy hover:text-blue-600 flex py-2 px-5 leading-tight">Drive-Thru Timer</Link>
                </li>
                <li>
                  <Link href="/products/lobby-timer" className="font-medium text-sm text-navy hover:text-blue-600 flex py-2 px-5 leading-tight">Lobby Timer</Link>
                </li>
                <li>
                  <Link href="/products/loss-prevention" className="font-medium text-sm text-navy hover:text-blue-600 flex py-2 px-5 leading-tight">Loss Prevention</Link>
                </li>
                <li>
                  <Link href="/products/kitchen-monitoring" className="font-medium text-sm text-navy hover:text-blue-600 flex py-2 px-5 leading-tight">Kitchen Monitoring</Link>
                </li>
              </Dropdown>
              <li>
                <Link href="/blog" className="font-medium text-navy hover:text-blue-600 dark:text-silver dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li>
                <Link href="/about" className="font-medium text-navy hover:text-blue-600 dark:text-silver dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
            </ul>

            {/* Desktop CTA */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/schedule-demo" className="font-medium text-blue-600 hover:text-white hover:bg-blue-600 border-2 border-blue-600 rounded-md px-4 py-2 flex items-center transition duration-150 ease-in-out group">
                  Schedule a Demo <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}

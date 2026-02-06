'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import VideoThumb from '@/public/images/in-store-monitor.jpg'
import ModalVideo01 from '@/components/modal-video-01'

/**
 * Home Page Hero Section
 *
 * Features:
 * - Animated headline with cycling adjectives (Quicker, More Efficient, More Productive)
 * - Adjectives change every 5 seconds with smooth fade transition
 * - Dark background with diagonal clip-path
 * - Video modal for product demo
 * - Responsive layout: stacked on mobile, side-by-side on desktop
 *
 * The cycling text creates visual interest and highlights multiple product benefits
 */
export default function HeroHome() {
  // Array of adjectives to cycle through in the headline
  const adjectives = ['Quicker', 'More Efficient', 'More Productive']

  // Track current adjective index and fade state
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)

  // Cycle through adjectives every 5 seconds with fade animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // Start fade out
      setTimeout(() => {
        // Change to next adjective after fade out
        setCurrentIndex((prevIndex) => (prevIndex + 1) % adjectives.length)
        setFade(true) // Fade in new adjective
      }, 300) // 300ms matches half of the CSS transition duration
    }, 5000) // Full cycle time: 5 seconds

    return () => clearInterval(interval) // Cleanup on unmount
  }, [adjectives.length])

  return (
    <section className="relative">

      {/* Dark background */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none -z-10 [clip-path:polygon(0_0,_5760px_0,_5760px_calc(100%_-_352px),_0_100%)]" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-20 md:pt-40 md:pb-44">

          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0">

            {/* Content */}
            <div className="text-center md:text-left md:min-w-[30rem]" data-aos="fade-right">
              <h1 className="h1 font-inter text-slate-100 mb-4 font-bold min-h-[9rem] md:min-h-0">
                Making Quick Service{' '}
                <span className={`italic transition-opacity duration-600 ${fade ? 'opacity-100' : 'opacity-0'}`} style={{ color: '#2897EC' }}>
                  {adjectives[currentIndex]}
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8">Improve your restaurant's efficiency and guest experience with real-time measurement and insights that drive performance.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full group" href="#learn-more">
                    Learn More <span className="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Hero image */}
            <ModalVideo01
              thumb={VideoThumb}
              thumbWidth={540}
              thumbHeight={405}
              thumbAlt="Modal video thumbnail"
              video="/videos/MONITOR_252.mp4"
              videoWidth={1920}
              videoHeight={1080} />            

          </div>

        </div>
      </div>
    </section>
  )
}
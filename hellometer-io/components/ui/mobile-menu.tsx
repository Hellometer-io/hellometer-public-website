'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`group inline-flex w-8 h-8 text-navy dark:text-slate-300 hover:text-blue-600 dark:hover:text-white text-center items-center justify-center transition`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg className="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <rect 
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] -translate-y-[5px] group-aria-expanded:rotate-[315deg] group-aria-expanded:translate-y-0"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
          <rect 
            className="origin-center group-aria-expanded:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
          <rect 
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] translate-y-[5px] group-aria-expanded:rotate-[135deg] group-aria-expanded:translate-y-0"
            y="7" 
            width="16" 
            height="2" 
            rx="1"
          />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div
        ref={mobileNav}
      >
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white transform transition ease-out duration-200 data-enter:data-closed:-translate-y-2 data-closed:opacity-0"
        >        
          <ul className="px-5 py-2">
            {/* Products section */}
            <li className="py-2 my-2 border-b border-silver">
              <span className="flex font-medium text-navy py-2">Products</span>
              <ul className="pl-4">
                <li>
                  <Link href="/products/drive-thru-timer" className="text-sm flex font-medium text-navy/70 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Drive-Thru Timer</Link>
                </li>
                <li>
                  <Link href="/products/lobby-timer" className="text-sm flex font-medium text-navy/70 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Lobby Timer</Link>
                </li>
                <li>
                  <Link href="/products/loss-prevention" className="text-sm flex font-medium text-navy/70 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Loss Prevention</Link>
                </li>
                <li>
                  <Link href="/products/kitchen-monitoring" className="text-sm flex font-medium text-navy/70 hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Kitchen Monitoring</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog" className="flex font-medium text-navy hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="/about" className="flex font-medium text-navy hover:text-blue-600 py-2" onClick={() => setMobileNavOpen(false)}>About</Link>
            </li>
            <li className="pt-4 mt-2 border-t border-silver">
              <Link href="/schedule-demo" className="flex font-medium text-blue-600 hover:text-white hover:bg-blue-600 border-2 border-blue-600 rounded-md px-4 py-2 justify-center transition duration-150 ease-in-out group" onClick={() => setMobileNavOpen(false)}>
                Schedule a Demo <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">→</span>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}

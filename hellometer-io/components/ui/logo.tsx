import Link from 'next/link'
import Image from 'next/image'

export default function Logo({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <Link href="/" className="block" aria-label="Hellometer">
      {/* Fixed width container to prevent layout shift */}
      <div className="w-[200px] flex items-center justify-center relative">
        {/* Glyph - shown when scrolled or on mobile */}
        <Image
          src="/images/hellometer_glyph.svg"
          alt="Hellometer"
          width={32}
          height={32}
          className={`transition-all duration-300 ease-in-out ${
            scrolled
              ? "opacity-100 scale-100"
              : "md:opacity-0 md:scale-95 md:absolute"
          }`}
        />
        {/* Full logo - shown at top on desktop */}
        <Image
          src="/images/hellometer_darkgreylogo.svg"
          alt="Hellometer"
          width={200}
          height={53}
          className={`transition-all duration-300 ease-in-out ${
            scrolled
              ? "md:opacity-0 md:scale-95 md:absolute"
              : "md:opacity-100 md:scale-100"
          } hidden md:block`}
        />
      </div>
    </Link>
  )
}

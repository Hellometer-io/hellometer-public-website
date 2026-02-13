import './css/style.css'
import 'aos/dist/aos.css'

import { Inter, DM_Sans } from 'next/font/google'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import AOSInit from '@/components/aos-init'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap'
})

export const metadata = {
  title: {
    default: 'Hellometer',
    template: '%s | Hellometer',
  },
  description: 'AI-powered operations platform for quick-service restaurants. Real-time drive-thru timing, kitchen monitoring, and loss prevention.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} font-inter antialiased bg-white text-navy tracking-tight`}>
        <AOSInit />
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />

          <main className="grow">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}

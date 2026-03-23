export const metadata = {
  title: 'Hellometer | AI-Powered Restaurant Operations',
  description: 'AI-powered operations platform for quick-service restaurants. Real-time drive-thru timing, kitchen monitoring, and loss prevention.',
}

import Hero from '@/components/hero-home'
import CustomerLogos from '@/components/customer-logos-carousel'
import FeaturesBlocks from '@/components/features-blocks'
import ProvenResults from '@/components/proven-results'
import LatestBlog from '@/components/latest-blog'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <>
      <Hero />
      <CustomerLogos />
      <FeaturesBlocks />
      <ProvenResults />
      <LatestBlog />
      <ContactForm />
    </>
  )
}

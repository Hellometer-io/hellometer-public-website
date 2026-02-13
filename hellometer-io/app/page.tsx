export const metadata = {
  title: 'Hellometer | AI-Powered Restaurant Operations',
  description: 'AI-powered operations platform for quick-service restaurants. Real-time drive-thru timing, kitchen monitoring, and loss prevention.',
}

import Hero from '@/components/hero-home'
import FeaturesBlocks from '@/components/features-blocks'
import ProvenResults from '@/components/proven-results'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <ProvenResults />
      <ContactForm />
    </>
  )
}

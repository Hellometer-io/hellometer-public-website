export const metadata = {
  title: 'Hellometer - Your Tagline Here',
  description: 'Hellometer description',
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

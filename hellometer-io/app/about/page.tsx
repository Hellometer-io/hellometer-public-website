export const metadata = {
  title: 'About',
  description: 'Learn about Hellometer, our story, and the team behind AI-powered restaurant operations.',
}

import AboutHero from '@/components/about-hero'
import AboutStory from '@/components/about-story'
import AboutFounders from '@/components/about-founders'
import AboutInvestors from '@/components/about-investors'

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutFounders />
      <AboutInvestors />
    </>
  )
}

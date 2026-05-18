import type { Metadata } from 'next'

import FeaturedUniversities from '@/components/home/FeaturedUniversities'
import FoundationSection from '@/components/home/FoundationSection'
import DeferredStudyPathways from '@/components/home/DeferredStudyPathways'
import HeroSection from '@/components/home/HeroSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import WhyNepalSection from '@/components/home/WhyNepalSection'

export const metadata: Metadata = {
  title: 'Home | Study in Nepal',
  description: 'Discover universities, colleges, and study opportunities in Nepal with a premium education portal built for international students.',
  openGraph: {
    title: 'Home | Study in Nepal',
    description: 'Discover universities, colleges, and study opportunities in Nepal with a premium education portal built for international students.',
    images: ['/og/home.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/',
  },
}

export const dynamic = 'force-static'

export default function HomePage(): JSX.Element {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <WhyNepalSection />
      <DeferredStudyPathways />
      <FeaturedUniversities />
      <FoundationSection />
      <TestimonialsSection />
    </main>
  )
}

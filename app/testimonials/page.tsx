import type { Metadata } from 'next'
import Link from 'next/link'

import TestimonialsCarousel from '@/components/testimonials/TestimonialsCarousel'

export const metadata: Metadata = {
  title: 'Testimonials | Study in Nepal',
  description: 'Read how students think about studying in Nepal and the kind of guidance that helps them move forward.',
  openGraph: {
    title: 'Testimonials | Study in Nepal',
    description: 'Read how students think about studying in Nepal and the kind of guidance that helps them move forward.',
    images: ['/og/testimonials.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/testimonials',
  },
}

export const dynamic = 'force-static'

export default function TestimonialsPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Testimonials</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Student voices, simplified and organized for decision-making.</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
          The desktop experience auto-scrolls for quick scanning, while mobile users get stacked cards with the same content and share actions.
        </p>
        <div className="mt-8">
          <TestimonialsCarousel />
        </div>
        <div className="mt-8">
          <Link href="/contact" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            Share your goals
          </Link>
        </div>
      </section>
    </main>
  )
}

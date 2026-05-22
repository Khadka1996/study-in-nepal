import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Study in Nepal',
  description: 'Learn how Study in Nepal helps international students make informed decisions about studying in Nepal.',
  openGraph: {
    title: 'About | Study in Nepal',
    description: 'Learn how Study in Nepal helps international students make informed decisions about studying in Nepal.',
    images: ['/og/about.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/about',
  },
}

export const dynamic = 'force-static'

export default function AboutPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">About</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Designed for students who want clarity, not clutter.</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
          Study in Nepal brings together institutional discovery, admissions guidance, and career-oriented context so international students can evaluate their choices with confidence.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            'Clear pathways for undergraduate, postgraduate, and diploma study.',
            'Practical context for admissions, scholarship planning, and living costs.',
            'A calm, premium interface that keeps decision-making focused.',
          ].map((point) => (
            <article key={point} className="rounded-3xl bg-[var(--color-light)] p-6 text-sm leading-6 text-slate-700">
              {point}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/universities" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            Explore universities
          </Link>
          <Link href="/contact" className="rounded-full border border-[var(--color-secondary)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-accent)] focus-ring">
            Contact the team
          </Link>
        </div>
      </section>
    </main>
  )
}

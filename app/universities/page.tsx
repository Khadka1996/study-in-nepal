import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Universities | Study in Nepal',
  description: 'Compare universities in Nepal with a focus on quality, recognition, and international student fit.',
  openGraph: {
    title: 'Universities | Study in Nepal',
    description: 'Compare universities in Nepal with a focus on quality, recognition, and international student fit.',
    images: ['/og/universities.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/universities',
  },
}

export const dynamic = 'force-static'

export default function UniversitiesPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Universities</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Choose institutions with strong academic fit and student support.</h1>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            { name: 'Research-focused institutions', detail: 'Ideal for learners seeking deeper academic pathways and postgraduate planning.' },
            { name: 'Professionally oriented campuses', detail: 'Strong for practical programs and career-directed education.' },
            { name: 'Student-friendly environments', detail: 'Useful for international students who want support and predictable onboarding.' },
          ].map((item) => (
            <article key={item.name} className="rounded-3xl bg-[var(--color-light)] p-6">
              <h2 className="text-xl font-semibold text-[var(--color-dark)]">{item.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/booking" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            Ask for a shortlist
          </Link>
        </div>
      </section>
    </main>
  )
}

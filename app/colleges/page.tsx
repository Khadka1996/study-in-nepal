import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Colleges | Study in Nepal',
  description: 'Explore colleges in Nepal with a clear focus on affordability, specialization, and student experience.',
  openGraph: {
    title: 'Colleges | Study in Nepal',
    description: 'Explore colleges in Nepal with a clear focus on affordability, specialization, and student experience.',
    images: ['/og/colleges.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/colleges',
  },
}

export const dynamic = 'force-static'

export default function CollegesPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Colleges</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Affordability and specialization matter. Start here.</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
          Colleges can be the right fit for students who want a targeted program, manageable budget, and a simpler admissions workflow.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/courses" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            Compare courses
          </Link>
          <Link href="/contact" className="rounded-full border border-[var(--color-secondary)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-accent)] focus-ring">
            Get advice
          </Link>
        </div>
      </section>
    </main>
  )
}

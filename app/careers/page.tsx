import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers | Study in Nepal',
  description: 'Understand how study choices in Nepal can connect to internships, jobs, and long-term career development.',
  openGraph: {
    title: 'Careers | Study in Nepal',
    description: 'Understand how study choices in Nepal can connect to internships, jobs, and long-term career development.',
    images: ['/og/careers.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/careers',
  },
}

export const dynamic = 'force-static'

export default function CareersPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Careers</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Study with the end goal already in mind.</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
          We frame each study path around employability, practical skills, and the opportunities that matter after graduation.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/testimonials" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            Read student stories
          </Link>
          <Link href="/booking" className="rounded-full border border-[var(--color-secondary)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-accent)] focus-ring">
            Build a plan
          </Link>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'

import { schoolsData } from '@/lib/data/schools'
import SchoolDirectory from '@/components/school/SchoolDirectory'

export const metadata: Metadata = {
  title: 'School | Study in Nepal',
  description: 'Learn about school pathways in Nepal, including secondary education and preparation for +2 and university.',
  keywords: ['school in nepal', 'secondary school nepal', 'nepal school pathways', 'pre +2 school nepal'],
  openGraph: {
    title: 'School | Study in Nepal',
    description: 'Learn about school pathways in Nepal, including secondary education and preparation for +2 and university.',
    images: ['https://studyinnepal.com/og/school.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/school',
  },
}

export const dynamic = 'force-static'

export default function SchoolPage(): JSX.Element {
  const schoolCount = schoolsData.length

  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-16 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--color-light)] bg-white shadow-soft">
        <div className="bg-[linear-gradient(135deg,rgba(8,26,58,1),rgba(19,47,104,1))] px-4 py-10 text-white sm:px-10 lg:px-12 lg:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.72)]">School</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Discover school pathways that build the right foundation for +2 and beyond.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/78">
            The right school program helps you choose the best stream, strengthens your grades, and prepares you for confident university entry.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
              <div className="text-3xl font-semibold">Secondary</div>
              <p className="mt-1 text-sm text-white/72">Grade 11 and 12 readiness</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
              <div className="text-3xl font-semibold">Prep</div>
              <p className="mt-1 text-sm text-white/72">Stream guidance and exam support</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
              <div className="text-3xl font-semibold">Smooth</div>
              <p className="mt-1 text-sm text-white/72">Transition into +2 or university</p>
            </article>
          </div>
        </div>

        <div className="px-4 py-8 sm:px-10 lg:px-12 lg:py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">School pathways</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">Choose the right school program for your next step.</h2>
            </div>
            <Link href="/contact" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
              Talk to a school advisor
            </Link>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Top schools</p>
                <h3 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">Explore Nepal’s best schools</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">Browse a curated list of 20 leading schools from Kathmandu, Pokhara, Chitwan, and more, shown 12 schools per page.</p>
              </div>
              <div className="rounded-3xl bg-[var(--color-accent-faint)] px-4 py-4 text-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-secondary)]">School profiles</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--color-dark)]">{schoolCount}</p>
              </div>
            </div>

            <SchoolDirectory schools={schoolsData} perPage={12} />
          </div>

          <div className="mt-10 rounded-[2rem] border border-[var(--color-light)] bg-white p-7 shadow-[0_18px_35px_rgba(15,42,95,0.08)] sm:p-10">
            <h3 className="text-2xl font-semibold text-[var(--color-dark)]">Ready for the next school step?</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">Find school programs that align with your ambition, keep your results steady, and keep your university options open.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/courses" className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white">
                Browse courses
              </Link>
              <Link href="/collages" className="inline-flex items-center justify-center rounded-full border border-[var(--color-secondary)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)]">
                Explore collages
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { collagesData } from '@/lib/data/collages'

export const metadata: Metadata = {
  title: 'Collages | Study in Nepal',
  description: 'Explore top +2 and higher secondary collages in Nepal with a clearer view of programs, streams, and student fit.',
  keywords: ['collages in nepal', 'nepal collage list', '+2 collage nepal', 'study collages nepal'],
  openGraph: {
    title: 'Collages | Study in Nepal',
    description: 'Explore top +2 and higher secondary collages in Nepal with a clearer view of programs, streams, and student fit.',
    images: ['https://studyinnepal.com/og/collages.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/collages',
  },
}

export const dynamic = 'force-static'

export default function CollagesPage(): JSX.Element {
  const collageCount = collagesData.length
  const totalCourses = collagesData.reduce((count, collage) => count + collage.popularCourses.length, 0)

  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-16 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--color-light)] bg-white shadow-soft">
        <div className="bg-[linear-gradient(135deg,rgba(8,26,58,1),rgba(19,47,104,1))] px-4 py-10 text-white sm:px-10 lg:px-12 lg:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.7)]">Collages</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Explore Nepal's top +2 collages through a cleaner, more complete directory.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/78">
            Compare higher secondary collages, find your stream fit, and discover programs that prepare you for university study.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
              <div className="text-3xl font-semibold">{collageCount}</div>
              <p className="mt-1 text-sm text-white/72">Collage profiles listed</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
              <div className="text-3xl font-semibold">{totalCourses}+</div>
              <p className="mt-1 text-sm text-white/72">Popular courses offered</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
              <div className="text-3xl font-semibold">1 click</div>
              <p className="mt-1 text-sm text-white/72">To a detailed profile</p>
            </article>
          </div>
        </div>

        <div className="px-4 py-8 sm:px-10 lg:px-12 lg:py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Collage directory</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">Every collage, with the essentials shown up front.</h2>
            </div>
            <Link href="/contact" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
              Ask for a shortlist
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {collagesData.map((collage) => {
              return (
                <article key={collage.id} className="flex h-full min-h-[380px] flex-col overflow-hidden rounded-[1.9rem] border border-[rgba(15,42,95,0.12)] bg-white shadow-[0_18px_45px_rgba(8,26,58,0.08)]">
                  <div className="flex items-center gap-3 border-b border-[var(--color-light)] bg-[var(--color-light)]/35 px-4 py-4 sm:gap-4 sm:px-6 sm:py-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white p-2.5 shadow-sm sm:h-20 sm:w-20 sm:p-3">
                      <Image src={collage.logo} alt={`${collage.name} logo`} width={72} height={72} className="h-14 w-14 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-semibold text-[var(--color-dark)]">{collage.name}</h3>
                      <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">{collage.location}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
                    <p className="text-sm leading-6 text-slate-600">{collage.description}</p>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">Popular courses</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {collage.popularCourses.slice(0, 6).map((course) => (
                          <span key={course} className="rounded-full bg-[var(--color-light)] px-3 py-1.5 text-xs font-medium text-[var(--color-dark)]">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-5 sm:pt-6">
                      <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
                        <Link
                          href="/contact"
                          className="inline-flex rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring"
                        >
                          Get details
                        </Link>
                        <Link
                          href={`/collages/${collage.id}`}
                          className="inline-flex rounded-full border border-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-[rgba(200,16,46,0.06)] focus-ring"
                        >
                          View full profile
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}


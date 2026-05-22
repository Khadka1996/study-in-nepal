import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { universitiesMenuData } from '@/lib/data/universities-menu'
import { buildUniversityWhatsAppMessage, buildWhatsAppLink } from '@/lib/whatsapp'

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
  const universityCount = universitiesMenuData.length
  const totalPrograms = universitiesMenuData.reduce((count, university) => count + university.programs.length, 0)

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--color-light)] bg-white shadow-soft">
        <div className="bg-[linear-gradient(135deg,rgba(8,26,58,1),rgba(19,47,104,1))] px-6 py-12 text-white sm:px-10 lg:px-12 lg:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.7)]">Universities</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Explore every university with a fast path to logos, programs, and detail pages.</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/78">
            This directory surfaces the full list in one place so students can compare options without jumping between pages.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/8 px-5 py-4 backdrop-blur">
              <div className="text-3xl font-semibold">{universityCount}</div>
              <p className="mt-1 text-sm text-white/72">Universities listed</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/8 px-5 py-4 backdrop-blur">
              <div className="text-3xl font-semibold">{totalPrograms}+</div>
              <p className="mt-1 text-sm text-white/72">Programs highlighted</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/8 px-5 py-4 backdrop-blur">
              <div className="text-3xl font-semibold">1 click</div>
              <p className="mt-1 text-sm text-white/72">To a detailed profile</p>
            </article>
          </div>
        </div>

        <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">University directory</p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">Every university, with the essentials shown up front.</h2>
            </div>
            <Link href="/booking" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
              Ask for a shortlist
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {universitiesMenuData.map((university) => {
              const logoSrc = university.logo ?? university.image
              const whatsappLink = buildWhatsAppLink(buildUniversityWhatsAppMessage(university.name))

              return (
                <article key={university.id} className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-[1.9rem] border border-[rgba(15,42,95,0.12)] bg-white shadow-[0_18px_45px_rgba(8,26,58,0.08)]">
                  <div className="flex items-center gap-4 border-b border-[var(--color-light)] bg-[var(--color-light)]/35 px-6 py-6">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white p-3 shadow-sm">
                      <Image src={logoSrc} alt={`${university.name} logo`} width={72} height={72} className="h-14 w-14 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-semibold text-[var(--color-dark)]">{university.name}</h3>
                      <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">{university.location}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-6 text-slate-600">{university.description}</p>

                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-secondary)]">Popular programs</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {university.programs.slice(0, 6).map((program) => (
                          <span key={program} className="rounded-full bg-[var(--color-light)] px-3 py-1.5 text-xs font-medium text-[var(--color-dark)]">
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap md:flex-nowrap items-center gap-3">
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring"
                        >
                          Get details
                        </a>
                        <Link
                          href={`/universities/${university.id}#colleges`}
                          className="inline-flex rounded-full border border-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-[rgba(200,16,46,0.06)] focus-ring"
                        >
                          View colleges
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

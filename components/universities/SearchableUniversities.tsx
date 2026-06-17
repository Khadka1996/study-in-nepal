'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { universitiesMenuData } from '@/lib/data/universities-menu'
import { buildUniversityWhatsAppMessage, buildWhatsAppLink } from '@/lib/whatsapp'

export default function SearchableUniversities(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredUniversities = useMemo(() => {
    if (!searchQuery.trim()) return universitiesMenuData

    const query = searchQuery.toLowerCase()
    return universitiesMenuData.filter(
      (university) =>
        university.name.toLowerCase().includes(query) ||
        university.location.toLowerCase().includes(query) ||
        university.description.toLowerCase().includes(query) ||
        university.programs.some((program) => program.toLowerCase().includes(query))
    )
  }, [searchQuery])

  const universityCount = universitiesMenuData.length
  const totalPrograms = universitiesMenuData.reduce((count, university) => count + university.programs.length, 0)

  return (
    <section className="overflow-hidden rounded-[2rem] border border-[var(--color-light)] bg-white shadow-soft">
      <div className="bg-[linear-gradient(135deg,rgba(8,26,58,1),rgba(19,47,104,1))] px-4 py-10 text-white sm:px-10 lg:px-12 lg:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.7)]">Universities</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">Explore Nepal's universities through a cleaner, more complete directory.</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-white/78">
          Compare public universities, specialist institutions, and flexible study options without jumping between pages.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
            <div className="text-3xl font-semibold">{universityCount}</div>
            <p className="mt-1 text-sm text-white/72">University profiles listed</p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
            <div className="text-3xl font-semibold">{totalPrograms}+</div>
            <p className="mt-1 text-sm text-white/72">Programs highlighted</p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur sm:px-5">
            <div className="text-3xl font-semibold">1 click</div>
            <p className="mt-1 text-sm text-white/72">To a detailed profile</p>
          </article>
        </div>
      </div>

      <div className="px-4 py-8 sm:px-10 lg:px-12 lg:py-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">University directory</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">Every university, with the essentials shown up front.</h2>
          </div>
          <Link href="/booking" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            Ask for a shortlist
          </Link>
        </div>

        <div className="mb-6">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search universities by name, location, or program..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-[rgba(15,42,95,0.12)] bg-white pl-12 pr-4 py-3 text-sm font-medium text-[var(--color-dark)] placeholder-slate-400 shadow-sm transition focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
            />
          </div>
          {filteredUniversities.length !== universitiesMenuData.length && (
            <p className="mt-2 text-sm text-slate-600">
              Found <strong>{filteredUniversities.length}</strong> out of <strong>{universitiesMenuData.length}</strong> universities
            </p>
          )}
        </div>

        {filteredUniversities.length === 0 ? (
          <div className="rounded-[2rem] border border-[rgba(15,42,95,0.08)] bg-[rgba(15,42,95,0.02)] p-8 text-center">
            <p className="text-lg font-semibold text-[var(--color-dark)]">No universities found</p>
            <p className="mt-2 text-sm text-slate-600">Try adjusting your search terms to find what you're looking for.</p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredUniversities.map((university) => {
              const logoSrc = university.logo ?? university.image
              const whatsappLink = buildWhatsAppLink(buildUniversityWhatsAppMessage(university.name))

              return (
                <article key={university.id} className="flex h-full min-h-[380px] flex-col overflow-hidden rounded-[1.9rem] border border-[rgba(15,42,95,0.12)] bg-white shadow-[0_18px_45px_rgba(8,26,58,0.08)] transition hover:shadow-[0_24px_60px_rgba(8,26,58,0.12)] hover:border-[rgba(200,16,46,0.25)] cursor-pointer">
                  <div className="flex items-center gap-3 border-b border-[var(--color-light)] bg-[var(--color-light)]/35 px-4 py-4 sm:gap-4 sm:px-6 sm:py-6">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-white p-2.5 shadow-sm sm:h-20 sm:w-20 sm:p-3">
                      <Image src={logoSrc} alt={`${university.name} logo`} width={72} height={72} className="h-14 w-14 object-contain" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-xl font-semibold text-[var(--color-dark)]">{university.name}</h3>
                      <p className="mt-1 text-sm font-medium text-[var(--color-primary)]">{university.location}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-6">
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

                    <div className="mt-auto pt-5 sm:pt-6">
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
                          href={`/universities/${university.id}`}
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
        )}
      </div>
    </section>
  )
}

"use client"

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { SchoolItem } from '@/lib/data/schools'

type SchoolDirectoryProps = {
  schools: SchoolItem[]
  perPage?: number
}

export default function SchoolDirectory({ schools, perPage = 12 }: SchoolDirectoryProps): JSX.Element {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(schools.length / perPage))

  const pageSchools = useMemo(() => {
    const start = (page - 1) * perPage
    return schools.slice(start, start + perPage)
  }, [page, perPage, schools])

  return (
    <div className="mt-10">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {pageSchools.map((school) => (
          <article key={school.id} className="flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[rgba(15,42,95,0.12)] bg-white p-6 shadow-[0_14px_30px_rgba(8,26,58,0.08)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-secondary)]">{school.location}</p>
              <h4 className="mt-3 text-xl font-semibold text-[var(--color-dark)]">{school.name}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">{school.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {school.programs.map((program) => (
                  <span key={program} className="rounded-full bg-[var(--color-accent-faint)] px-3 py-1.5 text-xs font-medium text-[var(--color-dark)]">
                    {program}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring"
            >
              Ask about this school
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          disabled={page === 1}
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          className="inline-flex h-11 items-center justify-center rounded-full border border-[rgba(15,42,95,0.12)] bg-white px-5 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-slate-600">Page {page} of {totalPages}</span>
        <button
          type="button"
          disabled={page === totalPages}
          onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
          className="inline-flex h-11 items-center justify-center rounded-full border border-[rgba(15,42,95,0.12)] bg-white px-5 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

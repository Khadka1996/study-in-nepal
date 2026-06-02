'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'

import { collagesData } from '@/lib/data/collages'

const PAGE_SIZE = 4

export default function CollageGallery(): JSX.Element {
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(collagesData.length / PAGE_SIZE)

  const pageItems = useMemo(
    () => collagesData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE),
    [page]
  )

  return (
    <div className="mt-10">
      <div className="grid gap-6 lg:grid-cols-2">
        {pageItems.map((item) => (
          <article key={item.name} className="overflow-hidden rounded-[2rem] border border-[rgba(15,42,95,0.12)] bg-white shadow-[0_20px_45px_rgba(15,42,95,0.08)]">
            <div className="relative h-52 overflow-hidden sm:h-56">
              <Image src={item.image} alt={`${item.name} photo`} fill className="object-cover" priority={false} />
              <div className="absolute left-4 top-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/90 p-2 shadow-md backdrop-blur sm:h-20 sm:w-20">
                <Image src={item.logo} alt={`${item.name} logo`} width={64} height={64} className="h-14 w-14 object-contain" />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-dark)]">{item.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.city} · {item.university}</p>
                </div>
                <span className="rounded-full bg-[var(--color-accent-faint)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">+2</span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-5 space-y-2 rounded-3xl bg-[var(--color-accent-faint)] p-4 text-sm text-slate-700">
                <p className="font-semibold text-[var(--color-dark)]">Popular courses</p>
                <div className="flex flex-wrap gap-2">
                  {item.popularCourses.map((course) => (
                    <span key={course} className="rounded-full bg-[var(--color-light)] px-3 py-1.5 text-xs font-semibold text-[var(--color-dark)]">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white">
                  Ask for help
                </Link>
                <Link href="/courses" className="inline-flex items-center rounded-full border border-[var(--color-secondary)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-dark)]">
                  View relevant courses
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-[var(--color-light)] bg-[var(--color-accent-faint)] p-5">
        <p className="text-sm text-slate-600">Showing {pageItems.length} of {collagesData.length} +2 collages.</p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(1, current - 1))}
            disabled={page === 1}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-secondary)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-dark)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(pageCount, current + 1))}
            disabled={page === pageCount}
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-secondary)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-dark)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

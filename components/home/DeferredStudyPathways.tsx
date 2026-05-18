'use client'

import { lazy, Suspense } from 'react'

const StudyPathways = lazy(async () => import('./StudyPathways'))

export default function DeferredStudyPathways(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="grid gap-6 rounded-[2rem] border border-[var(--color-light)] bg-white p-6 shadow-soft lg:grid-cols-3 lg:p-8">
          <div className="h-36 animate-pulse rounded-3xl bg-slate-100" />
          <div className="h-36 animate-pulse rounded-3xl bg-slate-100" />
          <div className="h-36 animate-pulse rounded-3xl bg-slate-100" />
        </div>
      }
    >
      <StudyPathways />
    </Suspense>
  )
}

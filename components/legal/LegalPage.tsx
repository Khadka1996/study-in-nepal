import type { ReactNode } from 'react'
import Link from 'next/link'

export type LegalSection = {
  title: string
  paragraphs: string[]
  items?: string[]
}

type LegalPageProps = {
  eyebrow: string
  title: string
  intro: string
  sections: LegalSection[]
  lastUpdated: string
}

export default function LegalPage({ eyebrow, title, intro, sections, lastUpdated }: LegalPageProps): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-5xl px-2 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">{intro}</p>
        <p className="mt-4 text-sm font-medium text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl bg-[var(--color-light)] p-6 sm:p-7">
              <h2 className="text-xl font-semibold text-[var(--color-dark)]">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items?.length ? (
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-100">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            Contact us
          </Link>
          <Link href="/" className="rounded-full border border-[var(--color-secondary)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-accent)] focus-ring">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Courses | Study in Nepal',
  description: 'Discover course categories and study fields that align with your academic background and career goals.',
  keywords: ['courses in nepal', 'study courses nepal', 'nepal degree programs', 'study abroad courses'],
  openGraph: {
    title: 'Courses | Study in Nepal',
    description: 'Discover course categories and study fields that align with your academic background and career goals.',
    images: ['https://studyinnepal.com/og/courses.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/courses',
  },
}

export const dynamic = 'force-static'

export default function CoursesPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-16 sm:px-6 lg:px-8">
      <Script id="breadcrumb-courses" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studyinnepal.com' },
            { '@type': 'ListItem', position: 2, name: 'Courses', item: 'https://studyinnepal.com/courses' },
          ],
        })}
      </Script>
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Courses</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Track courses by outcome, not just by name.</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Different courses belong to different study levels in Nepal. Use this page to understand which pathways fit your current qualification and the type of institution that offers them.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {['Business', 'IT', 'Hospitality', 'Health', 'Education', 'Engineering', 'Arts', 'Languages'].map((course) => (
            <div key={course} className="rounded-3xl bg-[var(--color-light)] p-5 text-sm font-medium text-[var(--color-dark)]">
              {course}
            </div>
          ))}
        </div>
        {/* pathway cards moved outside the main card for better mobile layout */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/careers" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            See career paths
          </Link>
          <Link href="/contact" className="rounded-full border border-[var(--color-secondary)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:border-[var(--color-accent)] focus-ring">
            Ask for pathway advice
          </Link>
        </div>
      </section>
      <section className="mx-auto w-full max-w-7xl px-2 py-8 sm:px-6 lg:px-8">
        <div className="w-full">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Pathways</p>
          <h2 className="mt-2 max-w-5xl text-2xl font-semibold text-[var(--color-dark)]">We offer courses from school and +2 through to university</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Whether you're planning early, preparing for +2, or choosing a university degree, these pathways explain the typical progression and common course options.</p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 items-stretch">
          <article className="flex min-h-full flex-col justify-between rounded-[2rem] border border-[rgba(15,42,95,0.08)] bg-white p-7 shadow-[0_24px_48px_rgba(15,42,95,0.08)]">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" /> University
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--color-dark)]">Degree study</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Bachelor’s, master’s and professional degrees are offered by universities and their affiliated colleges. These programs are designed for students who have completed +2 or equivalent.</p>
              <div className="mt-5 space-y-2 rounded-3xl bg-[var(--color-accent-faint)] p-4 text-sm text-slate-700">
                <p className="font-semibold text-[var(--color-dark)]">Common courses</p>
                <p>Engineering, Business, Medicine, Computer Science</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/universities" className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white">Learn more</Link>
            </div>
          </article>

          <article className="flex min-h-full flex-col justify-between rounded-[2rem] border border-[rgba(15,42,95,0.08)] bg-white p-7 shadow-[0_24px_48px_rgba(15,42,95,0.08)]">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" /> +2 / Higher Secondary
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--color-dark)]">College-level foundation</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">+2 colleges are higher secondary programs after grade 10. They help students prepare for university entry with science, management, humanities and computer streams.</p>
              <div className="mt-5 space-y-2 rounded-3xl bg-[var(--color-accent-faint)] p-4 text-sm text-slate-700">
                <p className="font-semibold text-[var(--color-dark)]">Common streams</p>
                <p>Science, Management, Humanities, Computer Science</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/collages" className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white">Learn more</Link>
            </div>
          </article>

          <article className="flex min-h-full flex-col justify-between rounded-[2rem] border border-[rgba(15,42,95,0.08)] bg-white p-7 shadow-[0_24px_48px_rgba(15,42,95,0.08)]">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-primary)]" /> School
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--color-dark)]">Pre-+2 preparation</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">Schools provide lower and upper secondary education plus preparatory programs that feed into +2 and later university study.</p>
              <div className="mt-5 space-y-2 rounded-3xl bg-[var(--color-accent-faint)] p-4 text-sm text-slate-700">
                <p className="font-semibold text-[var(--color-dark)]">Helpful tracks</p>
                <p>Foundation English, Maths revision, bridging support for international learners</p>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/school" className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white">Learn more</Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}

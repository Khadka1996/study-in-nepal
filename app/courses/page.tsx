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
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {['Business', 'IT', 'Hospitality', 'Health', 'Education', 'Engineering', 'Arts', 'Languages'].map((course) => (
            <div key={course} className="rounded-3xl bg-[var(--color-light)] p-5 text-sm font-medium text-[var(--color-dark)]">
              {course}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/careers" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
            See career paths
          </Link>
        </div>
      </section>
    </main>
  )
}

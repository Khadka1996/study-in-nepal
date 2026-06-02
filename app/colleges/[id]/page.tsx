import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import Link from 'next/link'

import { collagesData } from '@/lib/data/collages'

export const dynamic = 'force-static'

type College = (typeof collagesData)[number]

export function generateStaticParams(): Array<{ id: string }> {
  return collagesData.map((college) => ({ id: college.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const college = collagesData.find((item) => item.id === params.id)

  if (!college) {
    return {
      title: 'College | Study in Nepal',
      keywords: ['college nepal', 'study in nepal', 'college profile'],
    }
  }

  return {
    title: `${college.name} | Study in Nepal`,
    description: college.description,
    keywords: [college.name, 'study in nepal', 'colleges in nepal', ...college.popularCourses].slice(0, 12),
    openGraph: {
      title: `${college.name} | Study in Nepal`,
      description: college.description,
      images: college.logo ? [college.logo] : undefined,
    },
    alternates: {
      canonical: `https://studyinnepal.com/colleges/${college.id}`,
    },
  }
}

export default function CollegePage({ params }: { params: { id: string } }): JSX.Element {
  const college = collagesData.find((item) => item.id === params.id)

  if (!college) {
    notFound()
  }

  const logoSrc = college.logo
  const buildingSrc = college.buildingImage ?? college.logo

  return (
    <main className="w-full">
      <Script id={`college-breadcrumb-${college.id}`} type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://studyinnepal.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Colleges',
              item: 'https://studyinnepal.com/colleges',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: college.name,
              item: `https://studyinnepal.com/colleges/${college.id}`,
            },
          ],
        })}
      </Script>

      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white">
        <div className="relative isolate min-h-[36rem] overflow-hidden bg-[linear-gradient(135deg,#081a3a_0%,#0f2a5f_48%,#143b7c_100%)] text-white sm:min-h-[40rem]">
          {buildingSrc ? (
            <Image
              src={buildingSrc}
              alt={`${college.name} campus building`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-[0.88] sm:scale-[0.92]"
            />
          ) : null}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.22),transparent_28%),linear-gradient(180deg,rgba(8,26,58,0.10)_0%,rgba(8,26,58,0.72)_58%,rgba(8,26,58,0.94)_100%)]" />

          <div className="relative mx-auto flex min-h-[36rem] w-full max-w-7xl items-end px-4 pb-8 sm:min-h-[40rem] sm:px-8 sm:pb-12 lg:items-center lg:px-10 lg:pb-12">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/78">
                <span className="rounded-full border border-white/18 bg-white/10 px-4 py-1.5 backdrop-blur-sm">+2 College profile</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">{college.name}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-white/86 sm:text-base">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current text-[var(--color-secondary)]">
                    <path d="M12 2c-3.31 0-6 2.69-6 6 0 4.5 6 14 6 14s6-9.5 6-14c0-3.31-2.69-6-6-6Zm0 8.25A2.25 2.25 0 1 1 12 5.5a2.25 2.25 0 0 1 0 4.5Z" />
                  </svg>
                  <span>{college.location}</span>
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">{college.university}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {college.popularCourses.slice(0, 5).map((course) => (
                  <span key={course} className="rounded-full border border-white/18 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-4 sm:text-sm">
                    {course}
                  </span>
                ))}
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-white/86 sm:text-lg">{college.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-[rgba(255,255,255,0.88)] focus-ring">
                  Ask for admission help
                </Link>
                <Link href="/colleges" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-ring">
                  Back to colleges
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-light)] py-10 sm:py-12 lg:py-14">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white bg-white p-4 shadow-sm sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">All available courses</p>
                <p className="mt-3 text-sm font-medium text-slate-600">University: {college.university}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {college.popularCourses.map((course) => (
                    <span key={course} className="rounded-full bg-[var(--color-light)] px-4 py-2 text-sm font-medium text-[var(--color-dark)]">
                      {course}
                    </span>
                  ))}
                </div>
                {college.bachelorCourses?.length ? (
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-[var(--color-dark)]">Bachelor's courses</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {college.bachelorCourses.map((course) => (
                        <span key={course} className="rounded-full bg-[var(--color-secondary)]/10 px-4 py-2 text-sm font-medium text-[var(--color-dark)]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
                {college.masterCourses?.length ? (
                  <div className="mt-5">
                    <p className="text-sm font-semibold text-[var(--color-dark)]">Master's courses</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {college.masterCourses.map((course) => (
                        <span key={course} className="rounded-full bg-[var(--color-accent-faint)] px-4 py-2 text-sm font-medium text-[var(--color-dark)]">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="rounded-[1.75rem] border border-white bg-white p-4 shadow-sm sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">What you get</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>• Complete overview of the college and its streams</li>
                  <li>• Popular courses grouped by field and level</li>
                  <li>• Clear admission pathways and contact information</li>
                  <li>• Direct support for shortlisting and applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-light)] bg-white py-10 sm:py-12 lg:py-14">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Next steps</p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-dark)]">Ready to apply?</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Connect with our advisors to discuss your stream selection, application requirements, and admission timelines. We'll help guide you through the entire process.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white">
                  Contact our team
                </Link>
                <Link href="/courses" className="inline-flex items-center rounded-full border border-[var(--color-secondary)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)]">
                  Explore other pathways
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

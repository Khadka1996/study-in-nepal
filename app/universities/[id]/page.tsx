import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { universitiesMenuData } from '@/lib/data/universities-menu'
import { buildCollegeWhatsAppMessage, buildWhatsAppLink } from '@/lib/whatsapp'
import universityColleges from '@/lib/data/university-colleges'
import universityFAQs from '@/lib/data/university-faqs'

export const dynamic = 'force-static'

type University = (typeof universitiesMenuData)[number]

export function generateStaticParams(): Array<{ id: string }> {
  return universitiesMenuData.map((university) => ({ id: university.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const university = universitiesMenuData.find((item) => item.id === params.id)

  if (!university) {
    return {
      title: 'University | Study in Nepal',
      keywords: ['university nepal', 'study in nepal', 'university profile'],
    }
  }

  return {
    title: `${university.name} | Study in Nepal`,
    description: university.description,
    keywords: [university.name, 'study in nepal', 'universities in nepal', ...(university.programs || [])].slice(0, 12),
    openGraph: {
      title: `${university.name} | Study in Nepal`,
      description: university.description,
      images: university.logo ? [university.logo] : undefined,
    },
    alternates: {
      canonical: `https://studyinnepal.com/universities/${university.id}`,
    },
  }
}

export default function UniversityPage({ params }: { params: { id: string } }): JSX.Element {
  const university = universitiesMenuData.find((item) => item.id === params.id)

  if (!university) {
    notFound()
  }

  const logoSrc = university.logo
  const buildingSrc = university.buildingImage ?? university.logo
  const colleges = universityColleges[university.id] ?? []
  const faqs = universityFAQs[university.id] ?? []

  return (
    <main className="w-full py-16">
      <Script id={`university-breadcrumb-${university.id}`} type="application/ld+json">
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
              name: 'Universities',
              item: 'https://studyinnepal.com/universities',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: university.name,
              item: `https://studyinnepal.com/universities/${university.id}`,
            },
          ],
        })}
      </Script>
      {faqs.length > 0 ? (
        <Script id={`faq-schema-${university.id}`} type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          })}
        </Script>
      ) : null}
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white">
        <div className="relative isolate min-h-[36rem] overflow-hidden bg-[linear-gradient(135deg,#081a3a_0%,#0f2a5f_48%,#143b7c_100%)] text-white sm:min-h-[40rem]">
          {buildingSrc ? (
            <Image
              src={buildingSrc}
              alt={`${university.name} campus building`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-[0.88] sm:scale-[0.92]"
            />
          ) : null}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.22),transparent_28%),linear-gradient(180deg,rgba(8,26,58,0.10)_0%,rgba(8,26,58,0.72)_58%,rgba(8,26,58,0.94)_100%)]" />

          <div className="relative mx-auto flex min-h-[36rem] w-full max-w-7xl items-end px-6 pb-10 sm:min-h-[40rem] sm:px-8 sm:pb-12 lg:items-center lg:px-10 lg:pb-12">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/78">
                <span className="rounded-full border border-white/18 bg-white/10 px-4 py-1.5 backdrop-blur-sm">University profile</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">{university.name}</h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-white/86 sm:text-base">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current text-[var(--color-secondary)]">
                    <path d="M12 2c-3.31 0-6 2.69-6 6 0 4.5 6 14 6 14s6-9.5 6-14c0-3.31-2.69-6-6-6Zm0 8.25A2.25 2.25 0 1 1 12 5.5a2.25 2.25 0 0 1 0 4.5Z" />
                  </svg>
                  <span>{university.location}</span>
                </span>
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">{university.id.replace('-', ' ')}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {university.programs.slice(0, 5).map((program) => (
                  <span key={program} className="rounded-full border border-white/18 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-4 sm:text-sm">
                    {program}
                  </span>
                ))}
              </div>

              <p className="mt-4 max-w-3xl text-base leading-7 text-white/86 sm:text-lg">{university.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/booking" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-[rgba(255,255,255,0.88)] focus-ring">
                  Book consultation
                </a>
                <a href="/universities" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-ring">
                  Back to universities
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-light)] py-10 sm:py-12 lg:py-14">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-1">
              <div className="rounded-[1.75rem] border border-white bg-white p-6 shadow-sm sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">Programs</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {university.programs.map((program) => (
                    <span key={program} className="rounded-full bg-[var(--color-light)] px-4 py-2 text-sm font-medium text-[var(--color-dark)]">
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white bg-white p-6 shadow-sm sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">What you get</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  <li>• Overview of the university and its study focus</li>
                  <li>• Core programs grouped for faster comparison</li>
                  <li>• Contact path for shortlisting and admission help</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {faqs.length > 0 && (
          <div className="border-t border-[var(--color-light)] bg-white py-10 sm:py-12 lg:py-14">
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Frequently asked questions</p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--color-dark)]">FAQs about {university.name}</h2>

                <div className="mt-6 space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="rounded-lg border border-[var(--color-light)] bg-white p-4">
                      <p className="font-semibold text-[var(--color-dark)]">{faq.question}</p>
                      <p className="mt-2 text-sm text-slate-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="colleges" className="border-t border-[var(--color-light)] bg-white py-10 sm:py-12 lg:py-14">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Colleges</p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--color-dark)]">Colleges connected to {university.name}</h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                These are the campuses, schools, or study centers most closely associated with this university profile.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {colleges.map((college) => (
                <article
                  key={college.name}
                  className="group rounded-[1.75rem] border border-[rgba(15,42,95,0.10)] bg-white p-5 shadow-[0_12px_30px_rgba(8,26,58,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(8,26,58,0.10)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-light)] ring-1 ring-[rgba(15,42,95,0.08)]">
                      {logoSrc ? (
                        <Image src={logoSrc} alt={`${university.name} logo`} width={32} height={32} className="h-8 w-8 object-contain" />
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-primary)] text-xs font-bold text-white">
                          {university.name
                            .split(' ')
                            .slice(0, 2)
                            .map((word) => word[0])
                            .join('')}
                        </div>
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-primary)] sm:text-lg">{college.name}</h3>
                        <span className="rounded-full bg-[var(--color-light)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)] sm:text-xs">
                          {university.name}
                        </span>
                      </div>
                      {college.location && <p className="mt-1 text-sm text-slate-600">{college.location}</p>}
                    </div>
                  </div>

                  {college.note && <p className="mt-4 text-sm leading-6 text-slate-700">{college.note}</p>}

                  <div className="mt-5 flex items-center gap-3">
                    <a
                      href={buildWhatsAppLink(buildCollegeWhatsAppMessage(college.name, university.name))}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-[var(--color-primary)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring"
                    >
                      Inquiry
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

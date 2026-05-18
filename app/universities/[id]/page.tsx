import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { universitiesMenuData } from '@/lib/data/universities-menu'

export const dynamic = 'force-static'

type University = (typeof universitiesMenuData)[number]

const universityLogos: Partial<Record<string, string>> = {
  tribhuvan: '/images/university-tribhuvan.svg',
  kathmandu: '/images/university-kathmandu.svg',
  pokhara: '/images/university-pokhara.svg',
}

const affiliatedColleges: Record<string, Array<{ name: string; location: string; note: string }>> = {
  tribhuvan: [
    { name: 'Maharajgunj Medical Campus', location: 'Kathmandu', note: 'Medical education and clinical training' },
    { name: 'Pulchowk Campus', location: 'Lalitpur', note: 'Engineering and applied sciences' },
    { name: 'Ratna Rajyalaxmi Campus', location: 'Kathmandu', note: 'Humanities, management, and social sciences' },
  ],
  kathmandu: [
    { name: 'School of Engineering', location: 'Dhulikhel', note: 'Core engineering and technology programs' },
    { name: 'School of Medical Sciences', location: 'Dhulikhel', note: 'Health sciences and professional training' },
    { name: 'School of Arts', location: 'Dhulikhel', note: 'Liberal arts and interdisciplinary study' },
  ],
  pokhara: [
    { name: 'Pokhara University School of Engineering', location: 'Pokhara', note: 'Practical engineering pathways' },
    { name: 'College of Business', location: 'Pokhara', note: 'Management and commerce studies' },
    { name: 'School of Health Sciences', location: 'Pokhara', note: 'Nursing and allied health' },
  ],
  purbanchal: [
    { name: 'BPKIHS-linked teaching centers', location: 'Biratnagar', note: 'Clinical and medical support pathways' },
    { name: 'Engineering colleges in the eastern region', location: 'Biratnagar', note: 'Technical and applied programs' },
    { name: 'Management campuses', location: 'Biratnagar', note: 'Business and administration studies' },
  ],
  lumbini: [
    { name: 'Lumbini International College', location: 'Rupandehi', note: 'Management and liberal studies' },
    { name: 'Buddhist Studies Institute', location: 'Rupandehi', note: 'Heritage and philosophy programs' },
    { name: 'Tourism and hospitality partners', location: 'Butwal', note: 'Applied professional training' },
  ],
  midwestern: [
    { name: 'Birendranagar Campus Network', location: 'Surkhet', note: 'Regional academic support' },
    { name: 'School of Engineering and Technology', location: 'Surkhet', note: 'Applied STEM programs' },
    { name: 'College of Education', location: 'Surkhet', note: 'Teacher training and pedagogy' },
  ],
  'nepal-sanskrit': [
    { name: 'Sanskrit College Network', location: 'Dang', note: 'Traditional language and text study' },
    { name: 'Philosophy campuses', location: 'Dang', note: 'Classical and cultural studies' },
    { name: 'Education partners', location: 'Dang', note: 'Teacher preparation pathways' },
  ],
  'nepal-open': [
    { name: 'Regional study centers', location: 'Kathmandu', note: 'Distance learning support hubs' },
    { name: 'Online learning partners', location: 'Nationwide', note: 'Flexible delivery and mentoring' },
    { name: 'Assessment centers', location: 'Nationwide', note: 'Exam and evaluation access' },
  ],
  'agriculture-forestry': [
    { name: 'Institute of Agriculture', location: 'Rampur', note: 'Agronomy and crop science' },
    { name: 'Institute of Forestry', location: 'Rampur', note: 'Forestry and environmental study' },
    { name: 'Veterinary colleges', location: 'Rampur', note: 'Animal health and husbandry' },
  ],
  'far-western': [
    { name: 'Far-West regional colleges', location: 'Dhangadhi', note: 'Multidisciplinary study options' },
    { name: 'Education campuses', location: 'Dhangadhi', note: 'Teaching and research support' },
    { name: 'Science and management colleges', location: 'Dhangadhi', note: 'Professional programs' },
  ],
  'nepal-med': [
    { name: 'Teaching hospital wing', location: 'Kathmandu', note: 'Clinical rotations and bedside learning' },
    { name: 'Allied health institute', location: 'Kathmandu', note: 'Nursing and public health training' },
    { name: 'Research and diagnostics unit', location: 'Kathmandu', note: 'Healthcare research support' },
  ],
}

export function generateStaticParams(): Array<{ id: string }> {
  return universitiesMenuData.map((university) => ({ id: university.id }))
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const university = universitiesMenuData.find((item) => item.id === params.id)

  if (!university) {
    return {
      title: 'University | Study in Nepal',
    }
  }

  return {
    title: `${university.name} | Study in Nepal`,
    description: university.description,
    openGraph: {
      title: `${university.name} | Study in Nepal`,
      description: university.description,
      images: [university.image],
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

  const logoSrc = universityLogos[university.id]
  const colleges = affiliatedColleges[university.id] ?? []

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[var(--color-light)] bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-[var(--color-light)] px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">University profile</p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white bg-white shadow-sm">
                {logoSrc ? (
                  <Image src={logoSrc} alt={`${university.name} logo`} width={56} height={56} className="h-14 w-14 object-contain" />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-dark)] text-lg font-bold text-white">
                    {university.name
                      .split(' ')
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join('')}
                  </div>
                )}
              </div>

              <div className="min-w-0">
                <h1 className="text-4xl font-semibold leading-tight text-[var(--color-dark)] sm:text-5xl">{university.name}</h1>
                <p className="mt-2 max-w-2xl text-base leading-7 text-slate-700">{university.description}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-700">
              <span className="rounded-full bg-white px-4 py-2 font-medium text-[var(--color-dark)]">{university.location}</span>
              <span className="rounded-full bg-white px-4 py-2 font-medium text-[var(--color-dark)]">{university.id.replace('-', ' ')}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/booking" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] focus-ring">
                Book consultation
              </a>
              <a href="/universities" className="rounded-full border border-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-white focus-ring">
                Back to universities
              </a>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-white bg-white/85 p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">Programs</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {university.programs.map((program) => (
                  <span key={program} className="rounded-full bg-[var(--color-light)] px-4 py-2 text-sm font-medium text-[var(--color-dark)]">
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white px-6 py-10 sm:px-10 lg:px-12 lg:py-14">
            <div className="flex h-full flex-col gap-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-[var(--color-light)] bg-[linear-gradient(135deg,rgba(26,95,122,0.08),rgba(87,197,182,0.08))] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">Campus / building</p>
                <div className="mt-5 flex items-center justify-center rounded-[1.5rem] border border-white bg-white/80 p-6">
                  {logoSrc ? (
                    <Image
                      src={logoSrc}
                      alt={`${university.name} building or campus mark`}
                      width={320}
                      height={180}
                      className="h-44 w-full object-contain"
                    />
                  ) : (
                    <div className="flex h-44 w-full items-center justify-center rounded-[1.25rem] bg-white text-center text-sm font-medium text-slate-600">
                      Campus view coming soon
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-[var(--color-light)] bg-[linear-gradient(135deg,rgba(26,95,122,0.04),rgba(87,197,182,0.08))] p-6">
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

        <div className="border-t border-[var(--color-light)] bg-white px-6 py-10 sm:px-10 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Affiliated colleges</p>
              <h2 className="mt-3 text-2xl font-semibold text-[var(--color-dark)]">Colleges connected to {university.name}</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600">
              These are the campuses, schools, or study centers most closely associated with this university profile.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {colleges.map((college) => (
              <article key={college.name} className="rounded-3xl border border-[var(--color-light)] bg-[var(--color-light)]/50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-dark)]">{college.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{college.location}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">Affiliated</span>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">{college.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

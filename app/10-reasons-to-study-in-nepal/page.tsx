import type { Metadata } from 'next'
import Link from 'next/link'

const reasons = [
  {
    title: 'Quality education beyond the classroom',
    description:
      'Institutes increasingly mix classroom teaching with practical learning, field visits, seminars, and direct student support.',
    image: '/images/Renovation-and-Expansion-of-Tri-Chandra-Campus.jpg',
  },
  {
    title: 'Diversity in courses offered',
    description:
      'Students can explore fields such as engineering, technology, business, health sciences, humanities, and emerging niche courses.',
    image: '/images/pulchowk-engineering.jpeg',
  },
  {
    title: 'Go global in Nepal',
    description:
      'Nepal offers a stable education path inside a culturally rich country with a strong sense of identity and regional exposure.',
    image: '/images/pashupatinath-temple-kathmandu.jpg',
  },
  {
    title: 'Holistic and explorative learning',
    description:
      'Student life often includes clubs, fests, city walks, heritage visits, and activities that build confidence beyond academics.',
    image: '/images/cultural heritages of nepal boudhanath.jpg',
  },
  {
    title: 'English as the primary language',
    description:
      'English is commonly used in higher education, helping students adjust while improving communication and career readiness.',
    image: '/images/student-life-in-nepal.jpg',
  },
  {
    title: 'Affordable quality education',
    description:
      'Nepal remains budget-friendly for students who want good academic value without the high cost of some overseas destinations.',
    image: '/images/Gundu-Bhaktapur-1.webp',
  },
  {
    title: 'Thrive in a multicultural society',
    description:
      'The country offers festivals, languages, cuisines, and traditions that create a welcoming and memorable student experience.',
    image: '/images/lumbini.jpg',
  },
  {
    title: 'An active academic community',
    description:
      'Universities and colleges continue building stronger networks, faculty support, and visible graduate pathways for students.',
    image: '/images/kathmandu-university-building.avif',
  },
  {
    title: 'Economical lifestyle',
    description:
      'Daily student life can stay practical thanks to affordable food, transport, accommodation, and local services.',
    image: '/images/pokhara image .jpg',
  },
  {
    title: 'Student-friendly procedures',
    description:
      'The course selection and admission journey can stay simple and manageable when students have the right guidance.',
    image: '/images/woman-looking-at-view-on-himalayas.webp',
  },
]

export const metadata: Metadata = {
  title: '10 Reasons to Study in Nepal | Study in Nepal',
  description: 'A simple list of 10 practical reasons students choose Nepal for higher education.',
  alternates: {
    canonical: 'https://studyinnepal.com/10-reasons-to-study-in-nepal',
  },
}

export const dynamic = 'force-static'

export default function TenReasonsToStudyInNepalPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-12 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[rgba(15,42,95,0.12)] bg-[linear-gradient(135deg,#07162f_0%,#0f2a5f_52%,#173f85_100%)] px-5 py-6 text-white shadow-[0_28px_90px_rgba(8,26,58,0.24)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur">
          Why Nepal
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
          10 Reasons to Study in Nepal
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
          A simple and polished list of the main reasons students consider Nepal for education, city life, and long-term academic growth.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/why-study-nepal" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] focus-ring">
            Main Nepal guide
          </Link>
          <Link href="/10-things-to-do-in-nepal" className="inline-flex rounded-full border border-white/20 bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white focus-ring">
            10 Things to Do
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-4 shadow-soft sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">10 reasons</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">What makes Nepal a strong study destination</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          A clear point-by-point overview with no images, designed to be easy to scan and easy to trust.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="rounded-[1.35rem] border border-[rgba(15,42,95,0.1)] bg-[rgba(15,42,95,0.02)] p-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-dark)]">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{reason.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/why-study-nepal" className="inline-flex rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)]">
            Back to Why Nepal?
          </Link>
          <Link href="/10-things-to-do-in-nepal" className="inline-flex rounded-full border border-[var(--color-secondary)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-[rgba(15,42,95,0.04)]">
            See 10 Things to Do
          </Link>
        </div>
      </section>
    </main>
  )
}
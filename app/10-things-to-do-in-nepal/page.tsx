import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const thingsToDo = [
  {
    title: 'Walk around cultural heritages of Nepal',
    description:
      'Start with Kathmandu Durbar Square, Boudhanath, and nearby heritage streets to see temples, squares, architecture, and living traditions in one walk.',
    image: '/images/cultural heritages of nepal boudhanath.jpg',
  },
  {
    title: 'Visit Pokhara lakeside',
    description:
      'Spend time at the lakeside, enjoy the calm atmosphere, and take an easy student break with views that make Pokhara one of the most loved cities in Nepal.',
    image: '/images/pokhara image .jpg',
  },
  {
    title: 'Go hiking in the hills',
    description:
      'Try short hikes around the valley, foothills, and nearby trails where students can enjoy fresh air, nature, and mountain scenery without leaving the country for long trips.',
    image: '/images/kathmandu-hike-1.webp',
  },
  {
    title: 'Try boating and river activities',
    description:
      'Balance study with light adventure by planning boating, rafting, and river-side travel experiences that add energy to the student routine.',
    image: '/images/seti-river-rafting.webp',
  },
  {
    title: 'Explore Pashupatinath and sacred spaces',
    description:
      'Visit iconic spiritual and cultural landmarks to understand Nepalese identity, faith, and the deep connection between daily life and tradition.',
    image: '/images/pashupatinath-temple-kathmandu.jpg',
  },
  {
    title: 'Travel to Lumbini',
    description:
      'Plan a meaningful visit to Lumbini, one of Nepal’s most important cultural and spiritual destinations, and experience a quieter side of the country.',
    image: '/images/lumbini.jpg',
  },
  {
    title: 'See the Himalayas',
    description:
      'Take scenic trips to view the Himalayas and enjoy the dramatic landscapes that Nepal is known for across the world.',
    image: '/images/woman-looking-at-view-on-himalayas.webp',
  },
  {
    title: 'Visit mountains and lakes',
    description:
      'Plan a longer trip to Dolpa Lake, Pokhara, and mountain viewpoints where hiking, boating, and scenic travel show a different side of Nepal’s natural beauty.',
    image: '/images/dolpa lake .webp',
  },
  {
    title: 'Enjoy local food and markets',
    description:
      'Taste momo, dal bhat, and Newari food while exploring busy markets, local streets, and student-friendly neighborhoods that feel active and welcoming.',
    image: '/images/place of nepal.webp',
  },
  {
    title: 'Plan a nature weekend',
    description:
      'Take a break from study with lakes, hills, mountain views, and quiet places across Nepal that help you reset and travel more slowly.',
    image: '/images/bg-nature of nepal.jpg',
  },
]

export const metadata: Metadata = {
  title: '10 Things to Do in Nepal | Study in Nepal',
  description: 'A simple guide to 10 student-friendly things to do in Nepal outside the classroom.',
  alternates: {
    canonical: 'https://studyinnepal.com/10-things-to-do-in-nepal',
  },
}

export const dynamic = 'force-static'

export default function TenThingsToDoInNepalPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-12 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[rgba(15,42,95,0.12)] bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-5 py-6 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <p className="inline-flex rounded-full border border-[rgba(15,42,95,0.12)] bg-[rgba(15,42,95,0.05)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Explore Nepal
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] text-[var(--color-dark)] sm:text-5xl lg:text-6xl">
              10 Things to Do in Nepal
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A simple guide to culture, nature, travel, and student-friendly experiences across Nepal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/why-study-nepal" className="inline-flex rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white focus-ring">
                Back to Why Nepal?
              </Link>
              <Link href="/10-reasons-to-study-in-nepal" className="inline-flex rounded-full border border-[var(--color-secondary)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-dark)] focus-ring">
                See 10 Reasons
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: '10', label: 'Things to explore' },
                { value: '4+', label: 'Culture and nature stops' },
                { value: '1', label: 'Easy guide' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.4rem] border border-[rgba(15,42,95,0.1)] bg-[rgba(15,42,95,0.03)] px-4 py-4">
                  <div className="text-3xl font-semibold text-[var(--color-primary)]">{item.value}</div>
                  <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[rgba(15,42,95,0.03)] p-3 sm:p-5 lg:p-6">
            <div className="overflow-hidden rounded-[1.6rem]">
              <Image src="/images/student-life-in-nepal.jpg" alt="Student life and travel in Nepal" width={1100} height={900} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-3 shadow-soft sm:p-6 lg:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Student guide</p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">Ten simple ways to enjoy Nepal as a student</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          These ideas focus on culture, nature, travel, food, and places worth seeing while studying in Nepal.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {thingsToDo.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-[1.5rem] border border-[rgba(15,42,95,0.1)] bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-[rgba(15,42,95,0.04)]">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(8,26,58,0.55))]" />
                <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-semibold text-[var(--color-secondary)] backdrop-blur">
                  {index + 1}
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-lg font-semibold text-[var(--color-dark)]">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/why-study-nepal" className="inline-flex rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white focus-ring">
            Back to Why Nepal?
          </Link>
          <Link href="/10-reasons-to-study-in-nepal" className="inline-flex rounded-full border border-[var(--color-secondary)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-dark)] focus-ring">
            See 10 Reasons
          </Link>
        </div>
      </section>
    </main>
  )
}

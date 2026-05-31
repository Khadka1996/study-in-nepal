import UniversityCard from '@/components/shared/UniversityCard'
import Link from 'next/link'
import { homeUniversities } from '@/lib/data/home'

export default function FeaturedUniversities(): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">Featured universities</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">A stronger first look at Nepal’s most visible institutions.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            Use these highlighted profiles to compare public universities, research-led campuses, and flexible study options before you go deeper.
          </p>
        </div>
        <Link href="/universities" className="inline-flex self-start rounded-full border border-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-[var(--color-dark)] transition hover:bg-[rgba(200,16,46,0.06)] focus-ring">
          Browse all universities
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {homeUniversities.map((university) => (
          <UniversityCard
            key={university.name}
            name={university.name}
            location={university.location}
            description={university.description}
            imageSrc={university.imageSrc}
            shareUrl="https://studyinnepal.com/universities"
          />
        ))}
      </div>
    </section>
  )
}

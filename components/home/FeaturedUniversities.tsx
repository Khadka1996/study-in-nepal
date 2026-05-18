import UniversityCard from '@/components/shared/UniversityCard'
import { homeUniversities } from '@/lib/data/home'

export default function FeaturedUniversities(): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">Featured universities</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">A shortlist that feels curated, not crowded.</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
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

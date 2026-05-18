'use client'

const pathways = [
  {
    title: 'Find the right level',
    description: 'Compare undergraduate, postgraduate, diploma, and language-focused pathways for your academic profile.',
  },
  {
    title: 'Explore institutions',
    description: 'Review trusted universities and colleges with practical information for international applications.',
  },
  {
    title: 'Plan your future',
    description: 'Map studies to careers, internships, and long-term migration-friendly opportunities.',
  },
]

export default function StudyPathways(): JSX.Element {
  return (
    <section className="grid gap-6 rounded-[2rem] border border-[var(--color-light)] bg-white p-6 shadow-soft lg:grid-cols-3 lg:p-8">
      {pathways.map((pathway, index) => (
        <article key={pathway.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-sm font-semibold text-white">
            0{index + 1}
          </span>
          <h3 className="mt-4 text-xl font-semibold text-[var(--color-dark)]">{pathway.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">{pathway.description}</p>
        </article>
      ))}
    </section>
  )
}

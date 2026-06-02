'use client'

const pathways = [
  {
    title: 'University',
    description:
      'Bachelor’s, master’s and professional degrees are offered by universities and their affiliated colleges. These programs are designed for students who have completed +2 or equivalent.',
    details: 'Common courses',
    highlights: 'Engineering, Business, Medicine, Computer Science',
    href: '/universities',
  },
  {
    title: '+2 / Higher Secondary',
    description:
      '+2 colleges are higher secondary programs after grade 10. They help students prepare for university entry with science, management, humanities and computer streams.',
    details: 'Common streams',
    highlights: 'Science, Management, Humanities, Computer Science',
    href: '/colleges',
  },
  {
    title: 'School',
    description:
      'Schools provide lower and upper secondary education plus preparatory programs that feed into +2 and later university study.',
    details: 'Helpful tracks',
    highlights: 'Foundation English, Maths revision, bridging support for international learners',
    href: '/school',
  },
]

export default function StudyPathways(): JSX.Element {
  return (
    <section className="grid gap-6 rounded-[2rem] border border-[var(--color-light)] bg-white p-6 shadow-soft lg:grid-cols-3 lg:p-8">
      {pathways.map((pathway) => (
        <article key={pathway.title} className="flex h-full flex-col justify-between rounded-[1.75rem] border border-[var(--color-light)] bg-white p-6 shadow-soft">
          <div>
            <h3 className="text-2xl font-semibold text-[var(--color-dark)]">{pathway.title}</h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">{pathway.description}</p>
          </div>

          <div className="mt-6 rounded-3xl border border-[var(--color-light)] bg-[var(--color-accent-faint)] p-5 text-sm">
            <p className="font-semibold text-[var(--color-dark)]">{pathway.details}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{pathway.highlights}</p>
          </div>

          <a
            href={pathway.href}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)]"
          >
            Learn more
          </a>
        </article>
      ))}
    </section>
  )
}

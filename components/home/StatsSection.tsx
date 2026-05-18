import type { HomeStat } from '@/lib/data/home'
import { homeStats } from '@/lib/data/home'

interface StatsSectionProps {
  stats?: HomeStat[]
}

export default function StatsSection({ stats = homeStats }: StatsSectionProps): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-3xl border border-[var(--color-light)] bg-white p-6 shadow-soft">
            <div className="text-3xl font-semibold text-[var(--color-dark)]">{stat.value}</div>
            <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

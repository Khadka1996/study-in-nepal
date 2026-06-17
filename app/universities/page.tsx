import type { Metadata } from 'next'
import SearchableUniversities from '@/components/universities/SearchableUniversities'

export const metadata: Metadata = {
  title: 'Universities | Study in Nepal',
  description: 'Compare universities in Nepal with a clearer view of public institutions, specialist colleges, and student fit.',
  keywords: ['universities in nepal', 'nepal university list', 'study in nepal universities', 'higher education nepal'],
  openGraph: {
    title: 'Universities | Study in Nepal',
    description: 'Compare universities in Nepal with a clearer view of public institutions, specialist colleges, and student fit.',
    images: ['https://studyinnepal.com/og/universities.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/universities',
  },
}

export const dynamic = 'force-static'

export default function UniversitiesPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-16 sm:px-6 lg:px-8">
      <SearchableUniversities />
    </main>
  )
}

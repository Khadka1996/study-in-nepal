import type { Metadata } from 'next'
import Link from 'next/link'

import FAQSection from '@/components/shared/FAQSection'
import { studyInfoFaqs } from '@/lib/data/faqs'

const benefits = [
  {
    title: 'Education Quality',
    description: 'Explore Nepal\'s leading universities with a variety of programs and established institutions.',
  },
  {
    title: 'Cultural Experience',
    description: 'Discover Nepal\'s rich culture through festivals, languages, traditions, and everyday student life.',
  },
  {
    title: 'Cost-effective',
    description: 'Affordable tuition and living expenses make Nepal an attractive choice for international students.',
  },
]

const destinations = [
  {
    name: 'Kathmandu',
    description:
      'Kathmandu is Nepal\'s main academic center with major institutions, diverse programs, and strong student support services.',
  },
  {
    name: 'Pokhara',
    description:
      'Pokhara offers quality universities in a peaceful city environment and is popular for business, hospitality, and management studies.',
  },
  {
    name: 'Lalitpur',
    description:
      'Lalitpur combines academic opportunities, design and technical education, and easy access to Kathmandu-based resources.',
  },
  {
    name: 'Bharatpur',
    description:
      'Bharatpur is growing as a practical destination for health sciences and applied programs with lower living costs.',
  },
  {
    name: 'Biratnagar',
    description:
      'Biratnagar is a key eastern city with expanding colleges and career-focused study pathways for regional students.',
  },
  {
    name: 'Butwal',
    description:
      'Butwal is a developing education hub with affordable campuses and good connectivity for students from different regions.',
  },
]

const reasons = [
  'Affordable tuition compared to many international destinations.',
  'Reasonable living costs for accommodation, food, and transport.',
  'Growing number of recognized universities and colleges.',
  'Supportive learning environment with accessible faculty guidance.',
  'Wide course options in business, IT, health, engineering, and management.',
  'English-friendly teaching in many higher education programs.',
  'Culturally rich and welcoming society for international students.',
  'Safe and student-friendly city life in major education centers.',
  'Strong academic foundation for careers and future higher studies.',
  'Simple pathway from inquiry to admission with proper guidance.',
]

const journeySteps = [
  'Shortlist your course and preferred city.',
  'Prepare your documents and application profile.',
  'Submit your inquiry and start admission support.',
  'Plan your budget, visa process, and arrival.',
]

export const metadata: Metadata = {
  title: 'Why Study in Nepal | Study in Nepal',
  description: 'Explore 10 strong reasons to study in Nepal, including affordability, quality institutions, student support, and career pathways.',
  openGraph: {
    title: 'Why Study in Nepal | Study in Nepal',
    description: 'Explore 10 strong reasons to study in Nepal, including affordability, quality institutions, student support, and career pathways.',
    images: ['/images/hero-study-nepal.png'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/why-study-nepal',
  },
}

export const dynamic = 'force-static'

export default function WhyStudyNepalPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-[rgba(15,42,95,0.12)] bg-[linear-gradient(140deg,#081a3a_0%,#0f2a5f_50%,#143b7c_100%)] p-7 text-white shadow-[0_24px_70px_rgba(8,26,58,0.2)] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">Why Study in Nepal</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">Experience top-notch education, vibrant culture, and limitless possibilities in one of South Asia\'s fastest-growing education destinations.</h1>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
          Start with clear information, trusted institutions, and practical planning support for your next academic step in Nepal.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/booking" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(255,255,255,0.92)] focus-ring">
            Student Inquiry
          </Link>
          <Link href="/booking" className="inline-flex rounded-full border border-white/20 bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">
            Institutional Inquiry
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">Benefits of Studying in Nepal</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-[1.25rem] border border-[rgba(15,42,95,0.1)] bg-[rgba(15,42,95,0.02)] p-5">
              <h3 className="text-lg font-semibold text-[var(--color-dark)]">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">Popular Destinations in Nepal</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Explore the most preferred student cities and what makes each destination unique.</p>

        <div className="mt-6 space-y-3">
          {destinations.map((city, index) => (
            <details
              key={city.name}
              open={index === 0}
              className="group rounded-[1.2rem] border border-[rgba(15,42,95,0.1)] bg-[rgba(15,42,95,0.02)] px-4 py-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[var(--color-dark)]">
                {city.name}
                <span className="text-[var(--color-secondary)] transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{city.description}</p>
            </details>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((city) => (
            <article key={`card-${city.name}`} className="rounded-[1.2rem] border border-[rgba(15,42,95,0.1)] bg-white p-4">
              <h3 className="text-base font-semibold text-[var(--color-dark)]">{city.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{city.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">Ready to Start Your Journey?</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Begin your application process today and take the first step toward studying in Nepal.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {journeySteps.map((step) => (
            <div key={step} className="rounded-[1rem] border border-[rgba(15,42,95,0.1)] bg-[rgba(15,42,95,0.02)] px-4 py-3 text-sm font-medium text-[var(--color-dark)]">
              {step}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/booking" className="inline-flex rounded-full bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">
            Begin Application
          </Link>
          <Link href="/contact" className="inline-flex rounded-full border border-[rgba(15,42,95,0.18)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(15,42,95,0.04)] focus-ring">
            Contact Advisor
          </Link>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-6 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">10 Reasons to Study in Nepal</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">A clear point-wise summary without images, as requested.</p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <li key={reason} className="flex items-start gap-3 rounded-[1rem] border border-[rgba(15,42,95,0.1)] bg-[rgba(15,42,95,0.02)] px-4 py-3 text-sm leading-6 text-slate-700 transition hover:border-[rgba(200,16,46,0.25)] hover:bg-white">
              <span className="inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-10">
        <FAQSection
          title="Frequently asked questions for international students"
          description="These are the most common questions students ask before selecting Nepal as their study destination."
          faqs={studyInfoFaqs}
          canonicalUrl="https://studyinnepal.com/why-study-nepal"
        />
      </div>
    </main>
  )
}

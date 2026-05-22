import type { Metadata } from 'next'

import ContactForm from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Study in Nepal',
  description: 'Contact Study in Nepal for guidance on university selection, course planning, and admissions support.',
  openGraph: {
    title: 'Contact | Study in Nepal',
    description: 'Contact Study in Nepal for guidance on university selection, course planning, and admissions support.',
    images: ['/og/contact.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/contact',
  },
}

export const dynamic = 'force-static'

export default function ContactPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
        <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Reach out for a precise answer, not a generic reply.</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">
          This frontend-only contact page uses validated form handling, EmailJS submission, and a retry-friendly toast experience.
        </p>
        <div className="mt-8 grid gap-4 rounded-[1.75rem] bg-[var(--color-light)] p-6 text-sm text-[var(--color-dark)]">
          <p className="font-semibold">Typical response time</p>
          <p>Within 24 hours, with a clear next-step recommendation for your study pathway.</p>
        </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

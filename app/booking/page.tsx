import type { Metadata } from 'next'

import BookingForm from '@/components/shared/BookingForm'

export const metadata: Metadata = {
  title: 'Booking | Study in Nepal',
  description: 'Book a consultation to receive a focused plan for study options, admissions, and next steps in Nepal.',
  openGraph: {
    title: 'Booking | Study in Nepal',
    description: 'Book a consultation to receive a focused plan for study options, admissions, and next steps in Nepal.',
    images: ['https://studyinnepal.com/og/booking.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/booking',
  },
}

export const dynamic = 'force-static'

export default function BookingPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Booking</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Choose an inquiry type</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">Select whether you're enquiring as an individual student or on behalf of an institution.</p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a href="/booking/student" className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm text-left hover:shadow-md">
            <p className="text-sm font-semibold text-[var(--color-accent)]">Student Inquiry</p>
            <p className="mt-2 text-sm text-slate-700">Personal guidance, application help and pathway planning.</p>
          </a>

          <a href="/booking/institutional" className="rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm text-left hover:shadow-md">
            <p className="text-sm font-semibold text-[var(--color-accent)]">Institutional Inquiry</p>
            <p className="mt-2 text-sm text-slate-700">Partnerships, bulk admissions, and institutional consultations.</p>
          </a>
        </div>
      </section>
    </main>
  )
}

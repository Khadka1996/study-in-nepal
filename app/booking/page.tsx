import type { Metadata } from 'next'

import BookingForm from '@/components/shared/BookingForm'

export const metadata: Metadata = {
  title: 'Booking | Study in Nepal',
  description: 'Book a consultation to receive a focused plan for study options, admissions, and next steps in Nepal.',
  openGraph: {
    title: 'Booking | Study in Nepal',
    description: 'Book a consultation to receive a focused plan for study options, admissions, and next steps in Nepal.',
    images: ['/og/booking.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/booking',
  },
}

export const dynamic = 'force-static'

export default function BookingPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <section className="grid gap-8 rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Booking</p>
        <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Schedule a consultation before you commit to a path.</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">
          This booking experience generates a reference number and sends an EmailJS confirmation, while keeping the frontend responsive and simple.
        </p>
        <div className="mt-8 rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(26,95,122,0.08),rgba(244,162,97,0.14))] p-6">
          <p className="text-sm font-semibold text-[var(--color-dark)]">What happens next</p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            <li>We receive your request and generate a booking reference.</li>
            <li>You get a confirmation email through EmailJS.</li>
            <li>We follow up with your consultation details.</li>
          </ul>
        </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
          <BookingForm />
        </div>
      </section>
    </main>
  )
}

import type { Metadata } from 'next'

import BookingForm from '@/components/shared/BookingForm'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Institutional Inquiry | Study in Nepal',
  description: 'Institutional inquiry — request consultations or partnerships on behalf of an institution.',
  keywords: ['institutional inquiry', 'partnership requests nepal', 'institutional consultation'],
  alternates: { canonical: 'https://studyinnepal.com/booking/institutional' },
}

export default function InstitutionalBookingPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-12 sm:px-6 lg:px-8">
      <Script id="breadcrumb-booking-institutional" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studyinnepal.com' },
            { '@type': 'ListItem', position: 2, name: 'Booking', item: 'https://studyinnepal.com/booking' },
            { '@type': 'ListItem', position: 3, name: 'Institutional Inquiry', item: 'https://studyinnepal.com/booking/institutional' },
          ],
        })}
      </Script>
      <section className="grid gap-6 rounded-[2rem] border border-[var(--color-light)] bg-white p-5 shadow-soft sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Institutional Inquiry</p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Institutional partnership and inquiry requests.</h1>
          <p className="mt-6 text-base leading-7 text-slate-600">
            Use this form to request institutional consultations, bulk admissions partnerships, or formal collaborations. Your request is sent to directorbusiness@icecollege.edu.np.
          </p>
          <div className="mt-8 rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(26,95,122,0.08),rgba(244,162,97,0.14))] p-6">
            <p className="text-sm font-semibold text-[var(--color-dark)]">What happens next</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>We receive your request and generate a booking reference.</li>
              <li>Your inquiry is delivered by EmailJS or opened as a Gmail draft.</li>
              <li>We follow up with institutional contact and next steps.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 sm:p-6">
          <BookingForm inquiryType="institutional" />
        </div>
      </section>
      <div className="mt-8">
        <Link href="/booking/student" className="text-sm text-[var(--color-primary)]">Switch to student inquiry</Link>
      </div>
    </main>
  )
}

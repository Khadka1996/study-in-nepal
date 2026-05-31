import type { Metadata } from 'next'

import BookingForm from '@/components/shared/BookingForm'
import Link from 'next/link'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Student Inquiry | Study in Nepal',
  description: 'Student inquiry — request guidance for individual study pathways and admissions.',
  keywords: ['student inquiry', 'study guidance nepal', 'student consultation'],
  alternates: { canonical: 'https://studyinnepal.com/booking/student' },
}

export default function StudentBookingPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Script id="breadcrumb-booking-student" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studyinnepal.com' },
            { '@type': 'ListItem', position: 2, name: 'Booking', item: 'https://studyinnepal.com/booking' },
            { '@type': 'ListItem', position: 3, name: 'Student Inquiry', item: 'https://studyinnepal.com/booking/student' },
          ],
        })}
      </Script>
      <section className="grid gap-8 rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Student Inquiry</p>
          <h1 className="mt-4 text-4xl font-semibold text-[var(--color-dark)]">Personal study guidance and application support.</h1>
          <p className="mt-6 text-base leading-7 text-slate-600">
            Use this form to request individual advice, application support, or pathway planning for studying in Nepal. Your request is sent to directorbusiness@icecollege.edu.np.
          </p>
          <div className="mt-8 rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(26,95,122,0.08),rgba(244,162,97,0.14))] p-6">
            <p className="text-sm font-semibold text-[var(--color-dark)]">What happens next</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
              <li>We receive your request and generate a booking reference.</li>
              <li>Your inquiry is delivered by EmailJS or opened as a Gmail draft.</li>
              <li>We follow up with personalized next steps.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
          <BookingForm inquiryType="student" />
        </div>
      </section>
      <div className="mt-8">
        <Link href="/booking/institutional" className="text-sm text-[var(--color-primary)]">Switch to institutional inquiry</Link>
      </div>
    </main>
  )
}

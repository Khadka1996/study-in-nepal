import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Study in Nepal',
  description: 'Learn how Study in Nepal helps international students make informed decisions about studying in Nepal.',
  openGraph: {
    title: 'About | Study in Nepal',
    description: 'Learn how Study in Nepal helps international students make informed decisions about studying in Nepal.',
      images: ['https://studyinnepal.com/og/about.jpg'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/about',
  },
}

export const dynamic = 'force-static'

export default function AboutPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="rounded-[2rem] border border-[var(--color-light)] bg-gradient-to-br from-[var(--color-primary)]/5 via-white to-[var(--color-secondary)]/5 p-5 shadow-soft sm:p-8 lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">About Study in Nepal</p>
        <h1 className="mt-4 text-4xl font-bold text-[var(--color-dark)] lg:text-5xl">Designed for students who want clarity, not clutter.</h1>
        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 lg:text-lg">
          Study in Nepal brings together institutional discovery, admissions guidance, and career-oriented context so international students can evaluate their choices with confidence.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            'Clear pathways for undergraduate, postgraduate, and diploma study.',
            'Practical context for admissions, scholarship planning, and living costs.',
            'A calm, premium interface that keeps decision-making focused.',
          ].map((point) => (
            <article key={point} className="rounded-2xl border border-white/40 bg-white/60 p-5 text-sm leading-6 text-slate-700 backdrop-blur-sm transition hover:bg-white sm:p-6 hover:shadow-md">
              {point}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/universities" className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-dark)] hover:shadow-lg focus-ring">
            Explore universities
          </Link>
          <Link href="/contact" className="rounded-full border border-[var(--color-secondary)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-dark)] shadow-md transition hover:border-[var(--color-accent)] hover:shadow-lg focus-ring">
            Contact the team
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="rounded-[2rem] border border-[var(--color-light)] bg-white p-5 shadow-soft sm:p-8">
          <h2 className="text-2xl font-bold text-[var(--color-dark)]">Our Mission</h2>
          <p className="mt-4 leading-7 text-slate-600">
            We believe studying abroad should be empowering, not overwhelming. Our platform eliminates the guesswork by providing transparent information about universities, colleges, and educational pathways in Nepal.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Whether you're looking to pursue a degree, gain international experience, or explore affordable quality education, we're here to guide you every step of the way.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[var(--color-light)] bg-white p-5 shadow-soft sm:p-8">
          <h2 className="text-2xl font-bold text-[var(--color-dark)]">Why Nepal?</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <span>Affordable, high-quality education compared to Western countries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <span>Welcoming culture and diverse international community</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <span>Ancient heritage combined with modern academic excellence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <span>Gateway to South Asia with unique geographical advantages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--color-secondary)] font-bold">✓</span>
              <span>Growing opportunities for internships and career development</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="mt-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">What We Offer</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-dark)] lg:text-4xl">Comprehensive Support for Your Journey</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'University Discovery',
              description: 'Browse and compare universities across Nepal with detailed programs, rankings, and admissions requirements.',
              icon: '🎓'
            },
            {
              title: 'Institutional Booking',
              description: 'Direct institutional inquiry system to connect with universities and colleges for personalized guidance.',
              icon: '📚'
            },
            {
              title: 'Course Information',
              description: 'Explore diverse courses from undergraduate degrees to specialized postgraduate programs.',
              icon: '📖'
            },
            {
              title: 'Student Testimonials',
              description: 'Read real experiences from students studying in Nepal to make informed decisions.',
              icon: '⭐'
            },
            {
              title: 'Admission Support',
              description: 'Get guidance on application processes, scholarships, and financial planning.',
              icon: '💼'
            },
            {
              title: 'Career Pathways',
              description: 'Understand career opportunities and how Nepalese education leads to global prospects.',
              icon: '🚀'
            },
          ].map((service) => (
            <div key={service.title} className="rounded-2xl border border-[var(--color-light)] bg-white p-6 shadow-soft transition hover:shadow-md hover:border-[var(--color-secondary)]">
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-4 font-bold text-[var(--color-dark)]">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section with Map */}
      <section className="mt-16">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Visit Us</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-dark)] lg:text-4xl">Our Location in Kathmandu</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Find us in the heart of Kathmandu. We're conveniently located to serve international students and institutional partners.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[var(--color-light)] bg-white p-6 shadow-soft sm:p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[var(--color-dark)]">Get in Touch</h3>
            
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="font-semibold text-[var(--color-dark)]">Address</p>
                  <p className="text-sm text-slate-600">Miteripul, Mandikatar, Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">📞</div>
                <div>
                  <p className="font-semibold text-[var(--color-dark)]">Phone</p>
                  <a href="tel:9860540054" className="text-sm text-[var(--color-primary)] hover:underline">
                    +977 9860540054
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✉️</div>
                <div>
                  <p className="font-semibold text-[var(--color-dark)]">Email</p>
                  <a href="mailto:inquire@studyinnepal.info" className="text-sm text-[var(--color-primary)] hover:underline">
                    inquire@studyinnepal.info
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="inline-block rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-dark)] hover:shadow-lg focus-ring">
                Send us a message
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-[var(--color-light)] bg-white shadow-soft">
            <iframe
              src="https://maps.google.com/maps?q=Miteripul,%20Mandikatar,%20Kathmandu,%20Nepal&output=embed"
              width="600"
              height="500"
              className="w-full h-full min-h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Study in Nepal location map"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-16 rounded-[2rem] border border-[var(--color-light)] bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 p-8 text-center sm:p-12">
        <h2 className="text-3xl font-bold text-[var(--color-dark)] lg:text-4xl">Ready to Start Your Journey?</h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Explore our comprehensive database of universities and begin your path to quality education in Nepal today.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/universities" className="rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[var(--color-dark)] hover:shadow-lg focus-ring">
            Explore Universities
          </Link>
          <Link href="/booking" className="rounded-full border border-[var(--color-primary)] bg-white px-8 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-md transition hover:bg-[var(--color-primary)] hover:text-white focus-ring">
            Make Inquiry
          </Link>
        </div>
      </section>
    </main>
  )
}

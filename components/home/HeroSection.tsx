 'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection(): JSX.Element {
  const pngImages = useMemo(
    () => [
      '/images/hero/fa.jpg',
      '/images/hero/fa.jpg',
      '/images/hero/fa.jpg',
      '/images/hero/fa.jpg',
    ],
    []
  )

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % pngImages.length), 5000)
    return () => clearInterval(t)
  }, [pngImages.length])

  const currentSrc = pngImages[index]

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#081a3a_0%,#0f2a5f_48%,#143b7c_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-secondary)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl pt-4">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur">
            A Global Education Destination
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
            Clear guidance for students choosing Nepal with confidence.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
            Compare universities, understand admissions, and move into a consultation path that feels calm, direct, and easy to trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/why-study-nepal" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] shadow-[0_14px_30px_rgba(8,26,58,0.22)] transition hover:-translate-y-0.5 hover:bg-[rgba(255,255,255,0.92)] focus-ring">
              Why Study in Nepal
            </Link>
            <Link href="/booking" className="rounded-full border border-white/20 bg-[var(--color-secondary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(200,16,46,0.24)] transition hover:-translate-y-0.5 hover:bg-[#ab0d26] focus-ring">
              Institutional Inquiry
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/78">
            {['Universities', 'Colleges', 'Courses', 'Admissions'].map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                <span>{item}</span>
                {index < 3 ? <span className="text-white/30">•</span> : null}
              </span>
            ))}
          </div>
        </div>

        <div className="relative pt-2 lg:pt-0">
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />
          <div className="absolute bottom-6 right-0 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

          <div className="animate-fade-up-delay relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-3 shadow-[0_30px_80px_rgba(8,26,58,0.32)] backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[rgba(255,255,255,0.06)]">
              <img
                key={currentSrc}
                src={currentSrc}
                alt="Student hero"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  if (!img.dataset.fallback) {
                    img.src = '/images/hero-study-nepal.png'
                    img.dataset.fallback = '1'
                  }
                }}
                className="h-[28rem] w-full object-cover sm:h-[31rem] transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(8,26,58,0.95))] p-6 pt-20">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.82)]">Focused pathway</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/76">
                  A cleaner route for international students who need clarity before they apply.
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-[1.25rem] border border-white/10 bg-[rgba(255,255,255,0.08)] px-4 py-3 text-sm text-white/82">
              Universities, colleges, and admissions support in one calm, well-structured place.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

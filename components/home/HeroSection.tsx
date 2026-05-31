 'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const heroImages = ['/images/student-female.png', '/images/student-male.png']
const heroHeadings = [
  'Clear guidance for students choosing NEPAL.',
  'Clear guidance for students choosing the right path.',
]

export default function HeroSection(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0)
  const [displayHeading, setDisplayHeading] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [headingIndex, setHeadingIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveIndex((i) => (i + 1) % heroImages.length), 4500)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const typingSpeed = isDeleting ? 28 : 44
    const currentHeading = heroHeadings[headingIndex]
    const pauseBeforeDelete = !isDeleting && displayHeading.length === currentHeading.length
    const pauseBeforeRestart = isDeleting && displayHeading.length === 0

    if (pauseBeforeDelete || pauseBeforeRestart) {
      const pauseTimer = setTimeout(() => setIsDeleting((value) => !value), 700)
      return () => clearTimeout(pauseTimer)
    }

    const timer = setTimeout(() => {
      setDisplayHeading((current) => {
        const nextLength = isDeleting ? current.length - 1 : current.length + 1
        return currentHeading.slice(0, Math.max(0, Math.min(currentHeading.length, nextLength)))
      })
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayHeading, headingIndex, isDeleting])

  useEffect(() => {
    if (displayHeading.length === 0 && isDeleting) {
      setHeadingIndex((index) => (index + 1) % heroHeadings.length)
      setIsDeleting(false)
    }
  }, [displayHeading, isDeleting])

  const currentHeading = heroHeadings[headingIndex]
  const typedPrefix = currentHeading === heroHeadings[0] ? displayHeading.slice(0, 'Clear guidance for students choosing '.length) : displayHeading
  const typedKeyword = currentHeading === heroHeadings[0] ? displayHeading.slice('Clear guidance for students choosing '.length, 'Clear guidance for students choosing '.length + 'NEPAL'.length) : ''
  const typedSuffix = currentHeading === heroHeadings[0] ? displayHeading.slice('Clear guidance for students choosing '.length + 'NEPAL'.length) : ''

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#081a3a_0%,#0f2a5f_48%,#143b7c_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/bg-mapofworld.png')] bg-[center_20%] bg-no-repeat bg-[length:min(72vw,58rem)_auto] opacity-36 lg:opacity-40"
      />
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-secondary)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/90 backdrop-blur">
            A Global Education Destination
          </p>
          <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl min-h-[6.75rem] sm:min-h-[8.5rem] lg:min-h-[10.25rem] relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full">
                {currentHeading === heroHeadings[0] ? (
                  <>
                    <span>{typedPrefix}</span>
                    <span className="text-[var(--color-secondary)]">{typedKeyword}</span>
                    <span>{typedSuffix}</span>
                  </>
                ) : (
                  <span>{displayHeading}</span>
                )}
                <span aria-hidden="true" className="ml-1 inline-block h-[0.9em] w-[2px] bg-white align-middle animate-pulse" />
              </div>
            </div>
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

        <div className="relative lg:-mt-12 lg:pt-0">
          {/* Decorative brand mark using the site favicon */}
          <div className="hidden md:block">
            <Image
              src="/favicon.svg"
              alt="Study in Nepal logo"
              width={112}
              height={112}
              className="pointer-events-none absolute -top-8 -right-12 h-28 w-28 rounded-xl shadow-xl"
            />
          </div>
          <div className="absolute -left-8 top-10 h-28 w-28 rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />
          <div className="absolute bottom-6 right-0 h-36 w-36 rounded-full bg-white/10 blur-3xl" />

          <div className="animate-fade-up-delay relative overflow-hidden rounded-[2rem] bg-transparent p-0 shadow-none">
            <div className="relative mx-auto aspect-[4/4.18] w-full overflow-hidden rounded-[1.35rem] bg-transparent sm:max-w-[27.75rem] lg:max-w-[30rem]">
              {heroImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={index === 0 ? 'Female student' : 'Male student'}
                  fill
                  sizes="(min-width: 1024px) 38rem, (min-width: 640px) 30rem, 100vw"
                  priority={index === 0}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    if (!img.dataset.fallback) {
                      img.src = '/images/hero-study-nepal.png'
                      img.dataset.fallback = '1'
                    }
                  }}
                  className={`object-contain transition-opacity duration-700 ease-out ${
                    index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(8,26,58,0.95))] p-6 pt-20">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.82)]">Focused pathway</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/76">
                  A cleaner route for international students who need clarity before they apply.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

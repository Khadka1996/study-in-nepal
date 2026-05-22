"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Navbar(): JSX.Element {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const dropdownTriggerRef = useRef<HTMLButtonElement | null>(null)

  const studyLinks = [
    { label: 'Universities', href: '/universities', description: 'Compare major institutions and academic profiles.' },
    { label: 'Colleges', href: '/colleges', description: 'Browse focused college pathways and options.' },
    { label: 'Courses', href: '/courses', description: 'Explore subject-specific study directions.' },
    { label: 'Testimonials', href: '/testimonials', description: 'See student experiences and outcomes.' },
  ]

  const supportLinks = [
    { label: 'About Us', href: '/about', description: 'Learn how the platform helps students decide.' },
    { label: 'Contact', href: '/contact', description: 'Get in touch for direct support.' },
    { label: 'Booking', href: '/booking', description: 'Request an institutional inquiry or consultation.' },
  ]

  const closeMenus = () => {
    setIsMenuOpen(false)
    setIsProgramsOpen(false)
  }

  const handleMobileNavigate = (href: string) => {
    // ensure menus close immediately and perform a hard navigation on mobile
    setIsMenuOpen(false)
    setIsProgramsOpen(false)
    if (typeof window !== 'undefined') {
      window.location.href = href
    }
  }

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 1280)
      closeMenus()
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    closeMenus()
  }, [pathname])

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !dropdownTriggerRef.current?.contains(e.target as Node)
      ) {
        setIsProgramsOpen(false)
      }
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsProgramsOpen(false)
    }

    if (isProgramsOpen) {
      document.addEventListener('mousedown', handleOutside)
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isProgramsOpen])

  return (
    <header className="sticky top-0 z-[9999] border-b border-[rgba(200,16,46,0.12)] bg-white">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="group flex items-center gap-3 font-semibold text-[var(--color-dark)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-primary),#143b7c)] text-sm font-bold text-white shadow-[0_12px_24px_rgba(8,26,58,0.18)]">
              SN
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-sm uppercase tracking-[0.28em] text-[var(--color-secondary)]">Study in Nepal</span>
              <span className="block text-xs text-slate-500">Navy, red, and white guidance</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 xl:flex">
            <Link
              href="/"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === '/' ? 'bg-[rgba(15,42,95,0.08)] text-[var(--color-primary)]' : 'text-slate-600 hover:bg-[rgba(15,42,95,0.06)] hover:text-[var(--color-primary)]'}`}
            >
              Home
            </Link>

            <Link
              href="/why-study-nepal"
              aria-current={pathname === '/why-study-nepal' ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === '/why-study-nepal' ? 'bg-[rgba(15,42,95,0.08)] text-[var(--color-primary)]' : 'text-slate-600 hover:bg-[rgba(15,42,95,0.06)] hover:text-[var(--color-primary)]'}`}
            >
              Why Study in Nepal
            </Link>

            <div className="relative">
              <button
                ref={dropdownTriggerRef}
                onClick={() => {
                  setIsProgramsOpen((v) => !v)
                }}
                onMouseEnter={() => !isMobile && setIsProgramsOpen(true)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${isProgramsOpen ? 'bg-[rgba(200,16,46,0.08)] text-[var(--color-secondary)]' : 'text-slate-600 hover:bg-[rgba(200,16,46,0.06)] hover:text-[var(--color-secondary)]'}`}
                aria-expanded={isProgramsOpen}
                aria-haspopup="menu"
              >
                <span className="inline-flex items-center gap-1.5">
                  Programs
                  <svg className={`h-4 w-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isProgramsOpen && (
                <div
                  ref={dropdownRef}
                  className="absolute left-1/2 top-full z-[9999] mt-3 w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-[rgba(200,16,46,0.16)] bg-white shadow-[0_24px_60px_rgba(8,26,58,0.16)]"
                  onMouseLeave={() => {
                    if (!isMobile) setIsProgramsOpen(false)
                  }}
                >
                  <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr_0.9fr]">
                    <div className="space-y-5 bg-[linear-gradient(180deg,rgba(15,42,95,0.97),rgba(20,59,124,0.98))] p-6 text-white lg:p-7">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.72)]">Programs</p>
                        <h3 className="mt-3 text-2xl font-semibold leading-tight">A clean way to move from interest to application.</h3>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-[rgba(255,255,255,0.78)]">
                          Keep the navigation simple, close it automatically, and surface the exact actions students need next.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link href="/why-study-nepal" onClick={closeMenus} className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(255,255,255,0.92)] focus-ring">
                          Why Study in Nepal
                        </Link>
                        <Link href="/booking" onClick={closeMenus} className="inline-flex rounded-full border border-white/20 bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">
                          Institutional Inquiry
                        </Link>
                      </div>
                    </div>

                    <div className="border-t border-[rgba(15,42,95,0.08)] p-6 lg:border-l lg:border-t-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">Study routes</p>
                      <div className="mt-4 space-y-1">
                        {studyLinks.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMenus}
                            className="group flex items-start justify-between gap-4 rounded-2xl px-3 py-3 transition hover:bg-[rgba(15,42,95,0.05)]"
                          >
                            <div>
                              <span className="block text-sm font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-primary)]">{item.label}</span>
                              <span className="mt-1 block text-xs leading-5 text-slate-600">{item.description}</span>
                            </div>
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-secondary)] transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[rgba(15,42,95,0.08)] p-6 lg:border-l lg:border-t-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">Support</p>
                      <div className="mt-4 space-y-1">
                        {supportLinks.map((item) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={closeMenus}
                            className="group flex items-start justify-between gap-4 rounded-2xl px-3 py-3 transition hover:bg-[rgba(200,16,46,0.05)]"
                          >
                            <div>
                              <span className="block text-sm font-semibold text-[var(--color-dark)] group-hover:text-[var(--color-secondary)]">{item.label}</span>
                              <span className="mt-1 block text-xs leading-5 text-slate-600">{item.description}</span>
                            </div>
                            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-primary)] transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/booking"
              aria-current={pathname === '/booking' ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === '/booking' ? 'bg-[rgba(200,16,46,0.08)] text-[var(--color-secondary)]' : 'text-slate-600 hover:bg-[rgba(200,16,46,0.06)] hover:text-[var(--color-secondary)]'}`}
            >
              Student Inquiry
            </Link>

            <Link
              href="/booking"
              aria-current={pathname === '/booking' ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === '/booking' ? 'bg-[rgba(200,16,46,0.08)] text-[var(--color-secondary)]' : 'text-slate-600 hover:bg-[rgba(200,16,46,0.06)] hover:text-[var(--color-secondary)]'}`}
            >
              Institutional Inquiry
            </Link>

            <Link
              href="/about"
              aria-current={pathname === '/about' ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === '/about' ? 'bg-[rgba(15,42,95,0.08)] text-[var(--color-primary)]' : 'text-slate-600 hover:bg-[rgba(15,42,95,0.06)] hover:text-[var(--color-primary)]'}`}
            >
              About Us
            </Link>
          </div>

        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="hidden rounded-full bg-[var(--color-secondary)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(200,16,46,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--color-primary)] focus-ring md:inline-flex"
          >
            Register Now
          </Link>

          <button
            type="button"
            onClick={() => {
              setIsMenuOpen((v) => {
                if (v) setIsProgramsOpen(false)
                return !v
              })
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(15,42,95,0.12)] bg-white text-[var(--color-dark)] transition hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] focus-ring xl:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-[rgba(200,16,46,0.14)] bg-white xl:hidden">
          <div className="mx-auto max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto overscroll-contain px-4 py-4 touch-pan-y sm:px-6 lg:px-8">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault()
                handleMobileNavigate('/')
              }}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[rgba(15,42,95,0.06)]"
            >
              Home
            </a>

            <a
              href="/why-study-nepal"
              onClick={(e) => {
                e.preventDefault()
                handleMobileNavigate('/why-study-nepal')
              }}
              className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[rgba(15,42,95,0.06)]"
            >
              Why Study in Nepal
            </a>

            <button
              onClick={() => setIsProgramsOpen((v) => !v)}
              className="mt-2 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 bg-[rgba(15,42,95,0.06)]"
              aria-expanded={isProgramsOpen}
            >
              Programs
              <svg className={`h-4 w-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isProgramsOpen && (
              <div className="mt-3 space-y-2 rounded-[1.5rem] border border-[rgba(15,42,95,0.08)] bg-[rgba(15,42,95,0.02)] p-3">
                {studyLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMobileNavigate(item.href)
                    }}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white"
                  >
                    <span className="block">{item.label}</span>
                    <span className="mt-1 block text-xs font-normal text-slate-600">{item.description}</span>
                  </a>
                ))}
              </div>
            )}

            <a
              href="/booking"
              onClick={(e) => {
                e.preventDefault()
                handleMobileNavigate('/booking')
              }}
              className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[rgba(200,16,46,0.06)]"
            >
              Student Inquiry
            </a>

            <a
              href="/booking"
              onClick={(e) => {
                e.preventDefault()
                handleMobileNavigate('/booking')
              }}
              className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[rgba(200,16,46,0.06)]"
            >
              Institutional Inquiry
            </a>

            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault()
                handleMobileNavigate('/about')
              }}
              className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              About Us
            </a>

            <a
              href="/booking"
              onClick={(e) => {
                e.preventDefault()
                handleMobileNavigate('/booking')
              }}
              className="mt-4 block rounded-2xl bg-[var(--color-secondary)] px-4 py-3 text-center font-medium text-white"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

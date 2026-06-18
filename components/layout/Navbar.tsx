"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function Navbar(): JSX.Element {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isProgramsOpen, setIsProgramsOpen] = useState<boolean>(false)
  const [isWhyNepalOpen, setIsWhyNepalOpen] = useState<boolean>(false)
  const [isIecGroupOpen, setIsIecGroupOpen] = useState<boolean>(false)
  const [isInquiryOpen, setIsInquiryOpen] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const dropdownTriggerRef = useRef<HTMLButtonElement | null>(null)
  const whyDropdownRef = useRef<HTMLDivElement | null>(null)
  const whyDropdownTriggerRef = useRef<HTMLButtonElement | null>(null)
  const iecDropdownRef = useRef<HTMLDivElement | null>(null)
  const iecDropdownTriggerRef = useRef<HTMLButtonElement | null>(null)
  const inquiryDropdownRef = useRef<HTMLDivElement | null>(null)
  const inquiryDropdownTriggerRef = useRef<HTMLButtonElement | null>(null)
  const programsCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const whyCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const iecCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const inquiryCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const studyLinks = [
    { label: 'Universities', href: '/universities', description: 'Compare major institutions and academic profiles.' },
    { label: 'Colleges', href: '/colleges', description: 'Browse focused college pathways and options.' },
    { label: 'School', href: '/school', description: 'Explore school pathways and preparation for +2.' },
    { label: 'Courses', href: '/courses', description: 'Explore subject-specific study directions.' },
  ]

  const supportLinks = [
    { label: 'About Us', href: '/about', description: 'Learn how the platform helps students decide.' },
    { label: 'Contact', href: '/contact', description: 'Get in touch for direct support.' },
    { label: 'Booking', href: '/booking', description: 'Request an institutional inquiry or consultation.' },
  ]

  const closeMenus = () => {
    setIsMenuOpen(false)
    setIsProgramsOpen(false)
    setIsWhyNepalOpen(false)
    setIsIecGroupOpen(false)
    setIsInquiryOpen(false)
  }

  const clearProgramsCloseTimer = () => {
    if (programsCloseTimerRef.current) {
      clearTimeout(programsCloseTimerRef.current)
      programsCloseTimerRef.current = null
    }
  }

  const clearWhyCloseTimer = () => {
    if (whyCloseTimerRef.current) {
      clearTimeout(whyCloseTimerRef.current)
      whyCloseTimerRef.current = null
    }
  }

  const clearIecCloseTimer = () => {
    if (iecCloseTimerRef.current) {
      clearTimeout(iecCloseTimerRef.current)
      iecCloseTimerRef.current = null
    }
  }

  const clearInquiryCloseTimer = () => {
    if (inquiryCloseTimerRef.current) {
      clearTimeout(inquiryCloseTimerRef.current)
      inquiryCloseTimerRef.current = null
    }
  }

  const scheduleProgramsClose = () => {
    clearProgramsCloseTimer()
    if (!isMobile) {
      programsCloseTimerRef.current = setTimeout(() => {
        setIsProgramsOpen(false)
      }, 180)
    }
  }

  const scheduleWhyClose = () => {
    clearWhyCloseTimer()
    if (!isMobile) {
      whyCloseTimerRef.current = setTimeout(() => {
        setIsWhyNepalOpen(false)
      }, 180)
    }
  }

  const scheduleIecClose = () => {
    clearIecCloseTimer()
    if (!isMobile) {
      iecCloseTimerRef.current = setTimeout(() => {
        setIsIecGroupOpen(false)
      }, 180)
    }
  }

  const scheduleInquiryClose = () => {
    clearInquiryCloseTimer()
    if (!isMobile) {
      inquiryCloseTimerRef.current = setTimeout(() => {
        setIsInquiryOpen(false)
      }, 180)
    }
  }

  const handleMobileNavigate = (href: string) => {
    // ensure menus close immediately and perform a hard navigation on mobile
    setIsMenuOpen(false)
    setIsProgramsOpen(false)
    if (typeof window !== 'undefined') {
      window.location.href = href
    }
  }

  const handleExternalNavigate = (href: string) => {
    if (typeof window !== 'undefined') {
      window.open(href, '_blank', 'noreferrer noopener')
    }
  }

  const handleMobilePointerUp = (e: any) => {
    // If a mousedown was prevented by overlays (dev overlay), catch pointerup and navigate
    try {
      const target = (e.target as HTMLElement).closest && (e.target as HTMLElement).closest('a')
      if (target && target instanceof HTMLAnchorElement) {
        const href = target.getAttribute('href')
        if (href && href.startsWith('/')) {
          // close menus then navigate
          setIsMenuOpen(false)
          setIsProgramsOpen(false)
          if (typeof window !== 'undefined') window.location.href = href
        }
      }
    } catch (err) {
      // ignore
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
    return () => {
      clearProgramsCloseTimer()
      clearWhyCloseTimer()
      clearIecCloseTimer()
      clearInquiryCloseTimer()
    }
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

      if (
        whyDropdownRef.current &&
        !whyDropdownRef.current.contains(e.target as Node) &&
        !whyDropdownTriggerRef.current?.contains(e.target as Node)
      ) {
        setIsWhyNepalOpen(false)
      }

      if (
        iecDropdownRef.current &&
        !iecDropdownRef.current.contains(e.target as Node) &&
        !iecDropdownTriggerRef.current?.contains(e.target as Node)
      ) {
        setIsIecGroupOpen(false)
      }

      if (
        inquiryDropdownRef.current &&
        !inquiryDropdownRef.current.contains(e.target as Node) &&
        !inquiryDropdownTriggerRef.current?.contains(e.target as Node)
      ) {
        setIsInquiryOpen(false)
      }
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsProgramsOpen(false)
        setIsWhyNepalOpen(false)
        setIsIecGroupOpen(false)
        setIsInquiryOpen(false)
      }
    }

    if (isProgramsOpen || isWhyNepalOpen || isIecGroupOpen || isInquiryOpen) {
      document.addEventListener('mousedown', handleOutside)
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isProgramsOpen, isWhyNepalOpen, isIecGroupOpen, isInquiryOpen])

  return (
    <header className="sticky top-0 z-[9999] border-b border-[rgba(200,16,46,0.12)] bg-white">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-2 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="group flex items-center font-semibold text-[var(--color-dark)]">
            <div className="relative h-9 w-[190px] overflow-hidden">
              <Image src="/images/STUDY IN NEPAL.png" alt="Study in Nepal" fill sizes="190px" className="object-contain object-left" />
            </div>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/"
              aria-current={pathname === '/' ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${pathname === '/' ? 'bg-[rgba(15,42,95,0.08)] text-[var(--color-primary)]' : 'text-slate-600 hover:bg-[rgba(15,42,95,0.06)] hover:text-[var(--color-primary)]'}`}
            >
              Home
            </Link>

            <div className="relative">
              <button
                ref={whyDropdownTriggerRef}
                onClick={() => {
                  clearWhyCloseTimer()
                  setIsWhyNepalOpen((value) => !value)
                }}
                onMouseEnter={() => {
                  clearWhyCloseTimer()
                  if (!isMobile) setIsWhyNepalOpen(true)
                }}
                onMouseLeave={scheduleWhyClose}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isWhyNepalOpen || pathname === '/why-study-nepal' || pathname === '/10-reasons-to-study-in-nepal' || pathname === '/10-things-to-do-in-nepal'
                    ? 'bg-[rgba(15,42,95,0.08)] text-[var(--color-primary)]'
                    : 'text-slate-600 hover:bg-[rgba(15,42,95,0.06)] hover:text-[var(--color-primary)]'
                }`}
                aria-expanded={isWhyNepalOpen}
                aria-haspopup="menu"
              >
                <span className="inline-flex items-center gap-1.5">
                  Why Study in Nepal
                  <svg className={`h-4 w-4 transition-transform ${isWhyNepalOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isWhyNepalOpen && (
                <div
                  ref={whyDropdownRef}
                  className="absolute left-1/2 top-full z-[9999] mt-3 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[1.5rem] border border-[rgba(15,42,95,0.12)] bg-white shadow-[0_24px_60px_rgba(8,26,58,0.16)]"
                  onMouseEnter={clearWhyCloseTimer}
                  onMouseLeave={scheduleWhyClose}
                >
                  <div className="p-3">
                    <Link href="/why-study-nepal" onClick={closeMenus} className="block rounded-2xl px-4 py-3 transition hover:bg-[rgba(15,42,95,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">Why Nepal?</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-600">Main overview of studying in Nepal.</span>
                    </Link>
                    <Link href="/10-reasons-to-study-in-nepal" onClick={closeMenus} className="mt-1 block rounded-2xl px-4 py-3 transition hover:bg-[rgba(15,42,95,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">10 Reasons to Study in Nepal</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-600">A simple list of the strongest benefits.</span>
                    </Link>
                    <Link href="/10-things-to-do-in-nepal" onClick={closeMenus} className="mt-1 block rounded-2xl px-4 py-3 transition hover:bg-[rgba(15,42,95,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">10 Things to Do in Nepal</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-600">Student-friendly ideas beyond the classroom.</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                ref={dropdownTriggerRef}
                onClick={() => {
                  clearProgramsCloseTimer()
                  setIsProgramsOpen((v) => !v)
                }}
                onMouseEnter={() => {
                  clearProgramsCloseTimer()
                  if (!isMobile) setIsProgramsOpen(true)
                }}
                onMouseLeave={scheduleProgramsClose}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isProgramsOpen || pathname.includes('/universities') || pathname.includes('/colleges') || pathname.includes('/school') || pathname.includes('/courses')
                    ? 'bg-[rgba(200,16,46,0.08)] text-[var(--color-secondary)]'
                    : 'text-slate-600 hover:bg-[rgba(200,16,46,0.06)] hover:text-[var(--color-secondary)]'
                }`}
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
                  onMouseEnter={clearProgramsCloseTimer}
                  onMouseLeave={scheduleProgramsClose}
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
                        <Link href="/booking/institutional" onClick={closeMenus} className="inline-flex rounded-full border border-white/20 bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">
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

            <div className="relative">
              <button
                ref={iecDropdownTriggerRef}
                onClick={() => {
                  clearIecCloseTimer()
                  setIsIecGroupOpen((value) => !value)
                }}
                onMouseEnter={() => {
                  clearIecCloseTimer()
                  if (!isMobile) setIsIecGroupOpen(true)
                }}
                onMouseLeave={scheduleIecClose}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isIecGroupOpen
                    ? 'bg-[rgba(15,42,95,0.08)] text-[var(--color-primary)]'
                    : 'text-slate-600 hover:bg-[rgba(15,42,95,0.06)] hover:text-[var(--color-primary)]'
                }`}
                aria-expanded={isIecGroupOpen}
                aria-haspopup="menu"
              >
                <span className="inline-flex items-center gap-1.5">
                  IEC Group
                  <svg className={`h-4 w-4 transition-transform ${isIecGroupOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isIecGroupOpen && (
                <div
                  ref={iecDropdownRef}
                  className="absolute left-1/2 top-full z-[9999] mt-3 w-[min(26rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[1.5rem] border border-[rgba(15,42,95,0.12)] bg-white shadow-[0_24px_60px_rgba(8,26,58,0.16)]"
                  onMouseEnter={clearIecCloseTimer}
                  onMouseLeave={scheduleIecClose}
                >
                  <div className="p-3">
                    <a href="https://euroschool.edu.np/" target="_blank" rel="noreferrer noopener" onClick={closeMenus} className="flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-[rgba(15,42,95,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">Euro School</span>
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="https://eurokidsnepal.com/" target="_blank" rel="noreferrer noopener" onClick={closeMenus} className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-[rgba(15,42,95,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">Euro Kids</span>
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="https://metaphorconsultancy.com/" target="_blank" rel="noreferrer noopener" onClick={closeMenus} className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-[rgba(15,42,95,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">Metaphor Consultancy</span>
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="https://iecschoolofanalytics.com/" target="_blank" rel="noreferrer noopener" onClick={closeMenus} className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-[rgba(15,42,95,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">IEC School for Analytics</span>
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="https://iecsaf.com/" target="_blank" rel="noreferrer noopener" onClick={closeMenus} className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-[rgba(15,42,95,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">IEC School of Art and Fashion</span>
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                ref={inquiryDropdownTriggerRef}
                onClick={() => {
                  clearInquiryCloseTimer()
                  setIsInquiryOpen((value) => !value)
                }}
                onMouseEnter={() => {
                  clearInquiryCloseTimer()
                  if (!isMobile) setIsInquiryOpen(true)
                }}
                onMouseLeave={scheduleInquiryClose}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  pathname.startsWith('/booking') || isInquiryOpen
                    ? 'bg-[rgba(200,16,46,0.08)] text-[var(--color-secondary)]'
                    : 'text-slate-600 hover:bg-[rgba(200,16,46,0.06)] hover:text-[var(--color-secondary)]'
                }`}
                aria-expanded={isInquiryOpen}
                aria-haspopup="menu"
              >
                <span className="inline-flex items-center gap-1.5">
                  Inquiry
                  <svg className={`h-4 w-4 transition-transform ${isInquiryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {isInquiryOpen && (
                <div
                  ref={inquiryDropdownRef}
                  className="absolute left-1/2 top-full z-[9999] mt-3 w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[1.5rem] border border-[rgba(200,16,46,0.12)] bg-white shadow-[0_24px_60px_rgba(8,26,58,0.16)]"
                  onMouseEnter={clearInquiryCloseTimer}
                  onMouseLeave={scheduleInquiryClose}
                >
                  <div className="p-3">
                    <Link href="/booking/student" onClick={closeMenus} className="flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-[rgba(200,16,46,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">Student Inquiry</span>
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link href="/booking/institutional" onClick={closeMenus} className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-[rgba(200,16,46,0.05)]">
                      <span className="block text-sm font-semibold text-[var(--color-dark)]">Institutional Inquiry</span>
                      <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
            Book Now
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
          <div onPointerUp={handleMobilePointerUp} className="mx-auto max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto overscroll-contain px-2 py-4 touch-pan-y sm:px-6 lg:px-8">
            <a href="/" className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[rgba(15,42,95,0.06)]">
              Home
            </a>

            <button
              onClick={() => setIsWhyNepalOpen((value) => !value)}
              className="mt-2 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 bg-[rgba(15,42,95,0.06)]"
              aria-expanded={isWhyNepalOpen}
            >
              Why Study in Nepal
              <svg className={`h-4 w-4 transition-transform ${isWhyNepalOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isWhyNepalOpen && (
              <div className="mt-3 space-y-2 rounded-[1.5rem] border border-[rgba(15,42,95,0.08)] bg-[rgba(15,42,95,0.02)] p-3">
                <a href="/why-study-nepal" className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span className="block">Why Nepal?</span>
                  <span className="mt-1 block text-xs font-normal text-slate-600">Main overview page.</span>
                </a>
                <a href="/10-reasons-to-study-in-nepal" className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span className="block">10 Reasons to Study in Nepal</span>
                  <span className="mt-1 block text-xs font-normal text-slate-600">Practical reasons and advantages.</span>
                </a>
                <a href="/10-things-to-do-in-nepal" className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span className="block">10 Things to Do in Nepal</span>
                  <span className="mt-1 block text-xs font-normal text-slate-600">Places and experiences to explore.</span>
                </a>
              </div>
            )}

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
                  <a key={item.label} href={item.href} className="block rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                    <span className="block">{item.label}</span>
                    <span className="mt-1 block text-xs font-normal text-slate-600">{item.description}</span>
                  </a>
                ))}
              </div>
            )}

            <button
              onClick={() => setIsIecGroupOpen((value) => !value)}
              className="mt-2 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 bg-[rgba(15,42,95,0.06)]"
              aria-expanded={isIecGroupOpen}
            >
              IEC Group
              <svg className={`h-4 w-4 transition-transform ${isIecGroupOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isIecGroupOpen && (
              <div className="mt-3 space-y-2 rounded-[1.5rem] border border-[rgba(15,42,95,0.08)] bg-[rgba(15,42,95,0.02)] p-3">
                <a href="https://euroschool.edu.np/" target="_blank" rel="noreferrer noopener" className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span className="block">Euro School</span>
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="https://eurokidsnepal.com/" target="_blank" rel="noreferrer noopener" className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span className="block">Euro Kids</span>
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="https://metaphorconsultancy.com/" target="_blank" rel="noreferrer noopener" className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span className="block">Metaphor Consultancy</span>
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="https://iecschoolofanalytics.com/" target="_blank" rel="noreferrer noopener" className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span className="block">IEC School for Analytics</span>
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="https://iecsaf.com/" target="_blank" rel="noreferrer noopener" className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span className="block">IEC School of Art and Fashion</span>
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )}


            <button
              onClick={() => setIsInquiryOpen((value) => !value)}
              className="mt-2 flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-700 bg-[rgba(200,16,46,0.06)]"
              aria-expanded={isInquiryOpen}
            >
              Inquiry
              <svg className={`h-4 w-4 transition-transform ${isInquiryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isInquiryOpen && (
              <div className="mt-3 space-y-2 rounded-[1.5rem] border border-[rgba(200,16,46,0.08)] bg-[rgba(200,16,46,0.02)] p-3">
                <a href="/booking/student" onClick={closeMenus} className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span>Student Inquiry</span>
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="/booking/institutional" onClick={closeMenus} className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[var(--color-dark)] transition hover:bg-white">
                  <span>Institutional Inquiry</span>
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            )}

            <a href="/about" className="mt-2 block rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100">About Us</a>

            <a href="/booking" className="mt-4 block rounded-2xl bg-[var(--color-secondary)] px-4 py-3 text-center font-medium text-white">Book Now</a>
          </div>
        </div>
      )}
    </header>
  )
}

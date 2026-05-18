'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsVisible(window.scrollY > 400)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) {
    return <></>
  }

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-[49] inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-light)] bg-white text-[var(--color-dark)] shadow-soft transition hover:-translate-y-0.5 focus-ring"
    >
      ↑
    </button>
  )
}

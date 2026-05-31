import Image from 'next/image'
import Link from 'next/link'

import type { SocialLink } from '@/types'

const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
]

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Why Study in Nepal', href: '/why-study-nepal' },
  { label: 'Institutional Inquiry', href: '/booking' },
  { label: 'Contact Us', href: '/contact' },
]

const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
]

function getSocialPath(label: SocialLink['label']): string {
  switch (label) {
    case 'Facebook':
      return 'M13.5 8.25H16V5h-2.5C10.98 5 9 6.98 9 10.5V13H6v3.25h3V24h3.5v-7.75h2.75L16 13h-3.5v-2.25c0-1 .5-1.5 1.5-1.5Z'
    case 'Instagram':
      return 'M7.5 4.5A3 3 0 0 0 4.5 7.5v9A3 3 0 0 0 7.5 19.5h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9Zm9 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-4.5 2.25A4.75 4.75 0 1 1 7.25 13 4.76 4.76 0 0 1 12 8.25Zm0 1.75A3 3 0 1 0 15 13a3 3 0 0 0-3-3Z'
    case 'LinkedIn':
      return 'M6 8h3.25v12H6V8Zm1.5-5.25a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM11.75 8h3.1v1.65h.05c.43-.82 1.5-1.7 3.1-1.7 3.3 0 3.9 2.17 3.9 5v7.05h-3.25v-6.25c0-1.49-.03-3.4-2.07-3.4-2.06 0-2.38 1.6-2.38 3.28V20H11.75V8Z'
    case 'YouTube':
      return 'M21.5 8.2a2.5 2.5 0 0 0-1.76-1.77C18.2 6 12 6 12 6s-6.2 0-7.74.43A2.5 2.5 0 0 0 2.5 8.2 26.2 26.2 0 0 0 2 13a26.2 26.2 0 0 0 .5 4.8 2.5 2.5 0 0 0 1.76 1.77C5.8 20 12 20 12 20s6.2 0 7.74-.43A2.5 2.5 0 0 0 21.5 17.8c.34-1.53.5-3.11.5-4.8 0-1.69-.16-3.27-.5-4.8ZM10 16.2v-6.4l5.5 3.2-5.5 3.2Z'
    case 'TikTok':
      return 'M14.5 4.5c.3 2.4 1.7 3.85 4 4v3.2c-1.57.02-3.02-.37-4-1.05V16.8a4.7 4.7 0 1 1-4.7-4.7c.28 0 .55.03.8.08v3.45c-.22-.12-.47-.2-.8-.2a1.4 1.4 0 1 0 1.4 1.4V4.5h3.3Z'
    default:
      return ''
  }
}

export default function Footer(): JSX.Element {
  return (
    <footer className="relative overflow-hidden rounded-t-[2rem] bg-[#0067b4] text-white">
      <Image
        src="/images/footer-bg1.jpg"
        alt=""
        fill
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center transform-gpu"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,103,180,0.18)_0%,rgba(0,103,180,0.5)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-1 bg-white/80" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold tracking-tight sm:text-4xl">9860540054</p>
          <div className="mt-3 flex flex-col items-center justify-center gap-2 text-sm font-medium text-[rgba(255,255,255,0.9)] sm:flex-row sm:gap-4 sm:text-base">
            <a href="tel:9860540054" className="transition hover:text-white">Call</a>
            <span className="hidden text-white/30 sm:inline">•</span>
            <a href="https://wa.me/9860540054" target="_blank" rel="noreferrer" className="transition hover:text-white">WhatsApp</a>
            <span className="hidden text-white/30 sm:inline">•</span>
            <a href="mailto:directorbusiness@icecollege.edu.np" className="transition hover:text-white">directorbusiness@icecollege.edu.np</a>
          </div>
          <p className="mt-3 text-base font-medium text-[rgba(255,255,255,0.9)] sm:text-lg">Miteripul, Mandikatar, Kathmandu, Nepal</p>
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/10 px-4 py-5 shadow-[0_20px_50px_rgba(8,26,58,0.24)] sm:px-5">
          <div className="flex flex-col items-center justify-between gap-5 lg:flex-row lg:items-start">
            <Link href="/" className="inline-flex items-center rounded-full bg-white px-4 py-2 text-base font-semibold text-[var(--color-primary)] shadow-sm sm:text-lg lg:self-start">
              Study in <span className="ml-1 text-[var(--color-secondary)]">Nepal</span>
            </Link>

            <nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white/90">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(8,26,58,0.55)] text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-secondary)] focus-ring"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d={getSocialPath(social.label)} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-[10px] leading-6 text-white/72 sm:text-xs">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>© {new Date().getFullYear()} Study in Nepal. All rights reserved.</span>
            <span className="text-white/30">|</span>
            <span className="text-white/60">
              Designed and developed by{' '}
              <a href="https://www.intersect.com.np" target="_blank" rel="noreferrer" className="font-semibold text-[var(--color-secondary)] transition hover:text-[#ff7d92]">
                intersectinfodevelopers
              </a>
            </span>
            <span className="text-white/30">|</span>
            <nav aria-label="Legal footer navigation" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[10px] font-medium text-white/68 sm:text-xs">
              {legalLinks.map((link, index) => (
                <span key={link.href} className="inline-flex items-center gap-x-2">
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 ? <span className="text-white/30">|</span> : null}
                </span>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

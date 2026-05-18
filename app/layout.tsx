import type { Metadata, Viewport } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'

import AIChatbot from '@/components/chatbot/AIChatbot'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ScrollToTopButton from '@/components/shared/ScrollToTopButton'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: ['400', '500', '600', '700'], variable: '--font-poppins' })

const baseUrl = new URL('https://studyinnepal.com')
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: 'Study in Nepal',
    template: '%s | Study in Nepal',
  },
  description: 'Study in Nepal is a production-grade education portal for international students exploring higher education opportunities in Nepal.',
  applicationName: 'Study in Nepal',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Study in Nepal',
    description: 'Explore universities, colleges, courses, and admissions guidance for international students in Nepal.',
    url: baseUrl,
    siteName: 'Study in Nepal',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Study in Nepal portal preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in Nepal',
    description: 'Guidance for international students planning to study in Nepal.',
    images: ['/og/default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f2a5f',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white text-[var(--color-dark)] antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <AIChatbot />
        <WhatsAppButton />
        <ScrollToTopButton />
        {/* Cookie consent banner removed per user request */}
        {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
        <Script id="study-in-nepal-structured-data" type="application/ld+json">
          {JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Study in Nepal',
              url: 'https://studyinnepal.com',
              logo: 'https://studyinnepal.com/logo.png',
              sameAs: [
                'https://www.facebook.com/',
                'https://www.instagram.com/',
                'https://www.linkedin.com/',
                'https://www.youtube.com/',
                'https://www.tiktok.com/',
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Study in Nepal',
              url: 'https://studyinnepal.com',
              description: 'Education portal for international students interested in studying in Nepal.',
            },
          ])}
        </Script>
      </body>
    </html>
  )
}

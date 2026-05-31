import type { Metadata } from 'next'

import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Understand how Study in Nepal uses cookies and similar technologies.',
  alternates: {
    canonical: 'https://studyinnepal.com/cookie-policy',
  },
}

export const dynamic = 'force-static'

export default function CookiePolicyPage(): JSX.Element {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      intro="This page explains how Study in Nepal uses cookies and similar technologies to keep the site reliable and useful."
      lastUpdated="May 31, 2026"
      sections={[
        {
          title: 'What cookies do',
          paragraphs: [
            'Cookies are small files stored in your browser that help websites remember preferences, measure usage, and improve performance.',
            'We use them only where they support the functioning and analytics of the site.',
          ],
        },
        {
          title: 'How we use them',
          paragraphs: [
            'Cookies may help remember your preferences, support analytics, and improve loading or interaction behaviour.',
            'They do not give us direct access to your device or personal files.',
          ],
        },
        {
          title: 'Managing cookies',
          paragraphs: [
            'You can control or clear cookies through your browser settings.',
            'If you disable some cookies, parts of the site may not work as smoothly.',
          ],
        },
        {
          title: 'Third-party tools',
          paragraphs: [
            'Some embedded or analytics services may set their own cookies according to their own policies.',
          ],
        },
      ]}
    />
  )
}

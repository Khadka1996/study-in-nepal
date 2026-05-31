import type { Metadata } from 'next'

import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Read the disclaimer covering the information and services provided by Study in Nepal.',
  alternates: {
    canonical: 'https://studyinnepal.com/disclaimer',
  },
}

export const dynamic = 'force-static'

export default function DisclaimerPage(): JSX.Element {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      intro="This disclaimer explains the limits of the information on Study in Nepal and the role of our service guidance."
      lastUpdated="May 31, 2026"
      sections={[
        {
          title: 'Information accuracy',
          paragraphs: [
            'We aim to keep the website accurate and current, but university details, course availability, tuition, scholarships, and policies may change.',
            'Always confirm official details with the institution before applying or paying any fee.',
          ],
        },
        {
          title: 'No legal or immigration advice',
          paragraphs: [
            'The content on this website is educational and informational only.',
            'It should not be treated as legal, immigration, financial, or professional advice.',
          ],
        },
        {
          title: 'External links',
          paragraphs: [
            'We may link to third-party websites for reference or convenience.',
            'We are not responsible for the content, accuracy, or availability of those external websites.',
          ],
        },
        {
          title: 'Use at your own discretion',
          paragraphs: [
            'By using this website, you accept that final admission decisions and outcomes depend on the relevant institution and governing authorities.',
          ],
        },
      ]}
    />
  )
}

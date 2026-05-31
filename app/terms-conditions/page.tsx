import type { Metadata } from 'next'

import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms that govern use of the Study in Nepal website and services.',
  alternates: {
    canonical: 'https://studyinnepal.com/terms-conditions',
  },
}

export const dynamic = 'force-static'

export default function TermsConditionsPage(): JSX.Element {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These terms explain how you may use Study in Nepal, what we provide, and the responsibilities that apply when you use our website or request guidance."
      lastUpdated="May 31, 2026"
      sections={[
        {
          title: 'Using the website',
          paragraphs: [
            'You may browse Study in Nepal to explore universities, colleges, courses, career pathways, and admissions guidance.',
            'You agree not to misuse the website, interfere with normal operation, or submit false or harmful information through our forms or contact channels.',
          ],
        },
        {
          title: 'Information and guidance',
          paragraphs: [
            'The content on this website is provided for general guidance and education planning only.',
            'We try to keep listings and guidance accurate, but admissions rules, fees, eligibility, and deadlines can change without notice from institutions or authorities.',
          ],
        },
        {
          title: 'User responsibility',
          paragraphs: [
            'You are responsible for verifying critical application details directly with the institution before making a final decision.',
            'Any reliance you place on our content is at your own discretion and risk.',
          ],
        },
        {
          title: 'Contact and support',
          paragraphs: [
            'If you need help understanding these terms, use the contact page or booking form before continuing to use the site.',
          ],
        },
      ]}
    />
  )
}

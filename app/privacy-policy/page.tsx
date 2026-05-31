import type { Metadata } from 'next'

import LegalPage from '@/components/legal/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Study in Nepal collects, uses, and protects your personal information.',
  alternates: {
    canonical: 'https://studyinnepal.com/privacy-policy',
  },
}

export const dynamic = 'force-static'

export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains how we handle the information you share with Study in Nepal through the website, forms, WhatsApp, and email."
      lastUpdated="May 31, 2026"
      sections={[
        {
          title: 'Information we may collect',
          paragraphs: [
            'We may collect details you submit through contact forms, booking forms, email, WhatsApp, or other direct communication.',
            'This may include your name, email address, phone number, study interests, and any other details needed to respond to your request.',
          ],
        },
        {
          title: 'How we use information',
          paragraphs: [
            'We use your information to respond to enquiries, provide guidance, schedule consultations, and improve our support.',
            'We may also use aggregated information to understand how visitors use the site and to improve the experience.',
          ],
        },
        {
          title: 'Sharing and security',
          paragraphs: [
            'We do not sell your personal information.',
            'We may share relevant details only when needed to support your admission enquiry, when required by law, or when you ask us to connect you with a university or college.',
            'We take reasonable steps to protect information, but no online system is completely risk-free.',
          ],
        },
        {
          title: 'Your choices',
          paragraphs: [
            'You may contact us to ask about the information we hold about you or to request an update where appropriate.',
          ],
        },
      ]}
    />
  )
}

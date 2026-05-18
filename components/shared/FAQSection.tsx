import type { FaqItem } from '@/lib/data/faqs'

export interface FAQSectionProps {
  title: string
  description: string
  faqs: FaqItem[]
  canonicalUrl: string
}

export default function FAQSection({ title, description, faqs, canonicalUrl }: FAQSectionProps): JSX.Element {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
    url: canonicalUrl,
  }

  return (
    <section className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft lg:p-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">{title}</h2>
        <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
      </div>

      <div className="mt-8 grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <summary className="cursor-pointer list-none text-base font-semibold text-[var(--color-dark)] focus-ring">
              <span className="flex items-center justify-between gap-4">
                <span>{faq.question}</span>
                <span className="text-[var(--color-accent)] transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-4 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}

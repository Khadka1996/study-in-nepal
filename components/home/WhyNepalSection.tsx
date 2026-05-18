import Image from 'next/image'
import Link from 'next/link'

import { whyNepalItems } from '@/lib/data/home'

export default function WhyNepalSection(): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a1f47_0%,#102d63_55%,#143b7c_100%)] p-6 text-white shadow-[0_28px_70px_rgba(8,26,58,0.18)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.72)]">Why Study in Nepal</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">A cleaner path for students who want clarity, not clutter.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
              Nepal can offer affordability, accessible campuses, and serious academic options. The layout below keeps that story focused and easy to scan.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/why-study-nepal" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(255,255,255,0.92)] focus-ring">
              Read study info
            </Link>
            <Link href="/booking" className="inline-flex rounded-full border border-white/20 bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">
              Institutional Inquiry
            </Link>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/10 p-3 backdrop-blur">
            <Image
              src="/images/why-nepal-campus.svg"
              alt="Campus and student life in Nepal"
              width={720}
              height={480}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="h-56 w-full rounded-[1.1rem] object-cover"
            />
          </div>
        </div>

        <div className="grid gap-4 lg:self-center">
          {whyNepalItems.map((item) => (
            <article key={item.title} className="grid gap-4 rounded-[1.5rem] border border-white/12 bg-white/7 p-5 sm:grid-cols-[120px_1fr] sm:items-center">
              <Image
                src={item.imageSrc}
                alt={`${item.title} in Nepal`}
                width={280}
                height={180}
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                className="h-24 w-full rounded-2xl object-cover"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(255,255,255,0.72)]">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/84">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

import { whyNepalItems } from '@/lib/data/home'

export default function WhyNepalSection(): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-7xl px-2 py-10 sm:px-6 lg:px-8">
      <div className="grid w-full gap-6 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0a1f47_0%,#102d63_55%,#143b7c_100%)] p-3 text-white shadow-[0_28px_70px_rgba(8,26,58,0.18)] sm:gap-8 sm:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
        <div className="space-y-5 sm:space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.72)]">Why Study in Nepal</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">A cleaner path for students who want clarity, not clutter.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
              Nepal can offer affordability, accessible campuses, and serious academic options. The layout below keeps that story focused and easy to scan.
            </p>
          </div>

          <div className="w-full overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/10 p-1.5 backdrop-blur sm:p-3">
            <Image
              src="/images/student-life-in-nepal.jpg"
              alt="Campus and student life in Nepal"
              width={860}
              height={480}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="block h-auto w-full rounded-[1.1rem] object-cover object-center"
            />
          </div>
        </div>

        <div className="grid w-full gap-3 lg:self-center">
          {whyNepalItems.map((item, index) => (
            <article key={item.title} className="flex w-full items-start gap-2 rounded-[1.5rem] border border-white/12 bg-white/7 p-2 sm:items-center sm:p-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center text-white sm:h-20 sm:w-20">
                {index === 0 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-11 sm:w-11">
                    <path d="M12 2l7 4v6c0 5-3.5 9.6-7 10-3.5-.4-7-5-7-10V6l7-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                )}
                {index === 1 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-11 sm:w-11">
                    <path d="M4 19h16" />
                    <path d="M6 19V9l6-4 6 4v10" />
                    <path d="M9 19v-5h6v5" />
                  </svg>
                )}
                {index === 2 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-11 sm:w-11">
                    <path d="M4 18l5-5 4 4 7-8" />
                    <path d="M19 9V5h-4" />
                  </svg>
                )}
                {index === 3 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 sm:h-11 sm:w-11">
                    <path d="M12 22s8-4.5 8-11.5A8 8 0 0 0 4 10.5C4 17.5 12 22 12 22z" />
                    <path d="M9.5 10.5l1.7 1.7 3.8-3.8" />
                  </svg>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/72 sm:text-xs sm:tracking-[0.26em]">{item.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-white/88">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

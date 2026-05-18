import Image from 'next/image'
import Link from 'next/link'

function IconSocialMobility(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 18v-2.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3V18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  )
}

function IconInstitutionalStrength(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 10.5 12 6l8 4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6.5 10.5V18m11-7.5V18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.75 18h14.5M9 10.5V18m6-7.5V18" />
    </svg>
  )
}

function IconCulturalDiplomacy(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5A8.5 8.5 0 0 0 12 3.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 12h16.8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3.5c2.6 2.4 4 5.1 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.1-4-8.5s1.4-6.1 4-8.5Z" />
    </svg>
  )
}

function IconEconomicGrowth(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 18h16" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6.5 15.5 10 12l3 3 4.5-5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16.5 9H18v1.5" />
    </svg>
  )
}

const stats = [
  { value: '18+', label: 'Recognized universities' },
  { value: '350+', label: 'Global goals' },
  { value: '7,000+', label: 'International students' },
  { value: '5', label: 'Core objectives' },
]

const pillars = [
  {
    number: '01',
    title: 'Social Objectives',
    description: 'Supporting student confidence, community trust, and the right academic direction.',
    imageSrc: '/images/student-1.svg',
    icon: IconSocialMobility,
  },
  {
    number: '02',
    title: 'Economic Objectives',
    description: 'Keeping study planning practical with realistic tuition and living context.',
    imageSrc: '/images/student-2.svg',
    icon: IconEconomicGrowth,
  },
  {
    number: '03',
    title: 'Institutional Objectives',
    description: 'Connecting students to universities, colleges, and verified support channels.',
    imageSrc: '/images/university-kathmandu.svg',
    icon: IconInstitutionalStrength,
  },
  {
    number: '04',
    title: 'Academic Excellence',
    description: 'Presenting serious programs and a clearer admissions journey.',
    imageSrc: '/images/university-pokhara.svg',
    icon: IconCulturalDiplomacy,
  },
]

const focusPoints = [
  { title: 'Social Mobility', note: 'Guided growth', icon: IconSocialMobility },
  { title: 'Institutional Strength', note: 'Trusted pathways', icon: IconInstitutionalStrength },
  { title: 'Cultural Diplomacy', note: 'Soft power', icon: IconCulturalDiplomacy },
  { title: 'Economic Growth', note: 'Sustainable development', icon: IconEconomicGrowth },
]

export default function FoundationSection(): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="animate-fade-up overflow-hidden rounded-[2rem] border border-[rgba(15,42,95,0.12)] bg-[linear-gradient(180deg,#081a3a_0%,#0b214d_46%,#132f68_100%)] text-white shadow-[0_24px_60px_rgba(8,26,58,0.18)]">
        <div className="border-b border-white/10 px-6 py-8 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[rgba(255,255,255,0.68)]">Global reach</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Nepal&apos;s Academic Infrastructure</h2>
            <p className="mt-4 text-sm leading-7 text-white/78">
              A structured foundation section that feels editorial, balanced, and more premium than a stack of isolated cards.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative border-b border-white/10 p-6 lg:border-b-0 lg:border-r lg:p-8">
            <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-[var(--color-secondary)]/18 blur-3xl" />
            <div className="absolute bottom-8 right-8 h-28 w-28 rounded-full bg-white/10 blur-3xl" />

            <div className="animate-fade-up-delay relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/7 p-4 backdrop-blur">
              <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="relative overflow-hidden rounded-[1.35rem]">
                  <Image
                    src="/images/why-nepal-campus.svg"
                    alt="Students and campus in Nepal"
                    width={760}
                    height={520}
                    className="h-[17rem] w-full object-cover sm:h-[20rem]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(8,26,58,0.92))] p-4 pt-16">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.72)]">Student inquiry</p>
                    <p className="mt-2 text-sm leading-6 text-white/82">
                      Request a clean, direct consultation path for applications and university comparisons.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/10 p-3">
                    <Image src="/images/hero-study-nepal.svg" alt="Study in Nepal visual" width={420} height={220} className="h-[8.6rem] w-full rounded-[1rem] object-cover sm:h-[9.6rem]" />
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-white/10 p-4 transition-transform duration-300 hover:-translate-y-0.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.72)]">Why Study in Nepal</p>
                    <p className="mt-2 text-sm leading-6 text-white/78">
                      Stronger academic structure, realistic planning, and a clearer path from shortlisting to inquiry.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href="/booking" className="inline-flex rounded-full bg-[var(--color-secondary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">
                        Student Inquiry
                      </Link>
                      <Link href="/why-study-nepal" className="inline-flex rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(255,255,255,0.92)] focus-ring">
                        Explore why Nepal
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((item) => (
                <article key={item.label} className="rounded-[1.35rem] border border-white/12 bg-white/8 px-4 py-5 text-center backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/12">
                  <div className="text-3xl font-semibold tracking-tight text-white">{item.value}</div>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-white/68">{item.label}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/7">
              {pillars.map((pillar, index) => (
                <article
                  key={pillar.number}
                  className={`group grid gap-4 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] sm:grid-cols-[92px_1fr] sm:items-center ${index !== pillars.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="flex items-center gap-4 sm:block">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.1)] text-base font-semibold text-white transition-transform duration-300 group-hover:scale-105">
                      {pillar.number}
                    </div>
                    <div className="mt-0 sm:mt-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.11)] text-white shadow-sm sm:h-14 sm:w-14">
                        <pillar.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/76">{pillar.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-white/10 sm:grid-cols-4">
          {focusPoints.map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-2 border-r border-white/10 px-4 py-5 text-center last:border-r-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-sm transition-transform duration-300 hover:scale-105">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-white/68">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
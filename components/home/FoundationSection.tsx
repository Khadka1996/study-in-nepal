import Image from 'next/image'
import type { SVGProps } from 'react'

function IconSocialMobility(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 18v-2.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3V18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM15 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  )
}

function IconInstitutionalStrength(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 10.5 12 6l8 4.5" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6.5 10.5V18m11-7.5V18" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.75 18h14.5M9 10.5V18m6-7.5V18" />
    </svg>
  )
}

function IconCulturalDiplomacy(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5A8.5 8.5 0 0 0 12 3.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.6 12h16.8" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3.5c2.6 2.4 4 5.1 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.1-4-8.5s1.4-6.1 4-8.5Z" />
    </svg>
  )
}

function IconEconomicGrowth(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
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

export default function FoundationSection(): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="animate-fade-up relative overflow-hidden rounded-[2rem] border border-[rgba(15,42,95,0.12)] bg-[linear-gradient(180deg,#081a3a_0%,#0b214d_46%,#132f68_100%)] text-white shadow-[0_24px_60px_rgba(8,26,58,0.18)]">
        <Image
          src="/images/bg-students.png"
          alt=""
          fill
          priority={false}
          aria-hidden="true"
          className="absolute inset-0 object-contain object-center opacity-[0.44] brightness-110 saturate-125 scale-[0.72] transform-gpu"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,26,58,0.66)_0%,rgba(11,33,77,0.5)_55%,rgba(19,47,104,0.64)_100%)]" />

        <div className="relative px-6 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[rgba(255,255,255,0.68)]">Global reach</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Nepal&apos;s Academic Infrastructure</h2>
            <p className="mt-4 text-sm leading-7 text-white/78">
              A simple, premium foundation section that uses student imagery, clean spacing, and clear academic highlights.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/12 p-6">
              <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-6 right-6 h-28 w-28 rounded-full bg-[var(--color-secondary)]/15 blur-3xl" />

              <div className="relative grid gap-4 sm:grid-cols-[0.95fr_1.05fr] sm:items-center">
                <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/10">
                  <Image
                    src="/images/student-life-in-nepal.jpg"
                    alt="Students in Nepal"
                    width={720}
                    height={960}
                    className="h-full min-h-[18rem] w-full object-cover object-center"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.7)]">Student view</p>
                    <h3 className="mt-2 text-2xl font-semibold">Simple, supportive, and focused on real outcomes.</h3>
                    <p className="mt-3 text-sm leading-6 text-white/78">
                      A cleaner path for students who want direct guidance, practical planning, and a better sense of campus life.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {stats.slice(0, 4).map((item) => (
                      <article key={item.label} className="rounded-[1.25rem] border border-white/10 bg-white/8 px-4 py-4 text-center">
                        <div className="text-3xl font-semibold text-white">{item.value}</div>
                        <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">{item.label}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/12">
              {pillars.map((pillar, index) => (
                <article
                  key={pillar.number}
                  className={`grid gap-4 px-5 py-5 transition-colors duration-300 ${index !== pillars.length - 1 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-base font-semibold text-white">
                      {pillar.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <pillar.icon className="h-7 w-7 text-white" />
                        <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/76">{pillar.description}</p>
                    </div>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
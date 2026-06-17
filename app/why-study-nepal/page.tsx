import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

import FAQSection from '@/components/shared/FAQSection'
import { studyInfoFaqs } from '@/lib/data/faqs'

const highlights = [
  {
    title: 'Affordable quality',
    description: 'Keep education costs and living expenses manageable while still aiming for a serious academic outcome.',
  },
  {
    title: 'Wide course choice',
    description: 'Explore pathways in business, IT, health, engineering, management, humanities, and more.',
  },
  {
    title: 'Student-first cities',
    description: 'Study in Kathmandu, Pokhara, Lalitpur, and other growing education hubs with real support.',
  },
]

const destinations = [
  {
    name: 'Kathmandu',
    description: 'The main academic hub with the widest choice of universities, colleges, support services, and student activities.',
    education: 'MBBS, MBA, engineering, IT, management, and health sciences',
    accommodation: 'Hostels, apartments, shared rooms, and student rentals',
    livingCost: 'Moderate to budget-friendly by area and lifestyle',
    nearbyPlaces: 'Pashupatinath, Boudhanath, Durbar Square, Patan, Bhaktapur',
    colleges: ['Tribhuvan University', 'Institute of Medicine', 'Tri-Chandra College', 'Thapathali Campus', 'St. Xavier\'s College', 'Kathmandu Medical College'],
  },
  {
    name: 'Pokhara',
    description: 'A calm lakeside city known for business, hospitality, and a balanced student lifestyle with scenic surroundings.',
    education: 'Business, hospitality, management, tourism, and other practical study programs',
    accommodation: 'Lakeside stays, shared rentals, hostels, and quieter student neighborhoods',
    livingCost: 'Usually easier on the budget than Kathmandu',
    nearbyPlaces: 'Phewa Lake, World Peace Pagoda, Sarangkot, and hiking routes',
    colleges: ['Local management colleges', 'Tourism training institutes', 'Affiliated campus options', 'Private higher education centers'],
  },
  {
    name: 'Lalitpur',
    description: 'A creative and academic city with design, technical, and research-friendly learning environments.',
    education: 'Design, engineering, research, humanities, and technical programs',
    accommodation: 'Student hostels, shared flats, and residential areas with city access',
    livingCost: 'Moderate, with options for different student budgets',
    nearbyPlaces: 'Patan Durbar Square, museums, cafés, and heritage neighborhoods',
    colleges: ['Patan Multiple Campus', 'Pulchowk Campus', 'Patan Academy of Health Sciences', 'Kathmandu University School of Management', 'Kantipur Engineering College'],
  },
  {
    name: 'Bhaktapur',
    description: 'A heritage city with a strong cultural atmosphere and easy access to Kathmandu-based institutions.',
    education: 'Arts, culture, humanities, and nearby access to major city colleges',
    accommodation: 'Quiet rooms, family stays, and affordable local housing',
    livingCost: 'Generally manageable for students looking for a calmer environment',
    nearbyPlaces: 'Bhaktapur Durbar Square, temples, old settlements, and local markets',
    colleges: ['Bhaktapur Multiple Campus', 'Khwopa College', 'Khwopa Engineering College', 'Nepal Engineering College'],
  },
  {
    name: 'Biratnagar',
    description: 'A major eastern city with expanding colleges, practical pathways, and a growing education network.',
    education: 'Management, science, IT, and career-oriented higher education options',
    accommodation: 'Hostels, rooms near campus, and practical rental choices',
    livingCost: 'Often lower than the capital, with student-friendly options',
    nearbyPlaces: 'Regional markets, local parks, and eastern travel routes',
    colleges: ['Mahendra Morang Adarsh Multiple Campus', 'Nobel Medical College', 'Purbanchal University School of Engineering', 'Purbanchal University College of Environment and Forestry', 'Eastern College of Engineering'],
  },
  {
    name: 'Birgunj',
    description: 'An important trade and transit city where students can find accessible and career-oriented study options.',
    education: 'Commerce, management, trade-focused, and applied study programs',
    accommodation: 'Practical hostels, shared rooms, and low-friction housing choices',
    livingCost: 'Usually affordable for students balancing study and daily expenses',
    nearbyPlaces: 'Border trade zones, city markets, and regional transport links',
    colleges: ['Thakur Ram Multiple Campus', 'National Medical College', 'Kedia Dental College', 'Madhesh University'],
  },
  {
    name: 'Bharatpur',
    description: 'A fast-growing city with health sciences, applied programs, and a lower-cost student environment.',
    education: 'Health sciences, applied programs, management, and professional studies',
    accommodation: 'Rooms near campuses, hostels, and family-run rentals',
    livingCost: 'Often more affordable than bigger metro areas',
    nearbyPlaces: 'Chitwan National Park, river areas, and city leisure spots',
    colleges: ['Agriculture and Forestry University', 'College of Medical Sciences, Bharatpur', 'Chitwan Medical College', 'B.P. Koirala Memorial Cancer Hospital training network'],
  },
  {
    name: 'Dharan',
    description: 'A student-friendly city in the east with a strong campus atmosphere and a reputation for education.',
    education: 'Medicine, nursing, management, and other respected study pathways',
    accommodation: 'Student hostels, shared rooms, and compact living options',
    livingCost: 'Budget-conscious for many students compared with bigger cities',
    nearbyPlaces: 'Bhedetar, hillside views, local markets, and campus zones',
    colleges: ['B.P. Koirala Institute of Health Sciences', 'Mahendra Multiple Campus', 'Central Campus of Technology', 'Dharan Model College'],
  },
  {
    name: 'Butwal',
    description: 'A well-connected education hub with affordable living and convenient access to nearby regions.',
    education: 'Management, science, IT, and practical academic routes',
    accommodation: 'Shared rentals, hostels, and central student housing',
    livingCost: 'Affordable and convenient for students who want easy access',
    nearbyPlaces: 'Lumbini routes, city viewpoints, and regional travel connections',
    colleges: ['Butwal Bahumukhi Campus', 'Butwal Technical Institute', 'Lumbini Engineering College', 'Kanti Higher Secondary School'],
  },
  {
    name: 'Nepalgunj',
    description: 'A strategic western city with a practical student setting and important regional access.',
    education: 'Commerce, management, health, and regionally important academic programs',
    accommodation: 'Affordable rooms, hostels, and student-friendly local housing',
    livingCost: 'Usually practical for students who want lower everyday expenses',
    nearbyPlaces: 'Regional markets, border access points, and western travel routes',
    colleges: ['Mahendra Multiple Campus, Nepalgunj', 'Nepalgunj Medical College', 'Lumbini Technological University', 'Banke Bageshwori Campus'],
  },
]

const journeySteps = [
  'Shortlist your course and preferred city.',
  'Prepare your documents and application profile.',
  'Submit your inquiry and start admission support.',
  'Plan your budget, visa process, and arrival.',
]

export const metadata: Metadata = {
  title: 'Why Study in Nepal | Study in Nepal',
  description: 'Explore 10 strong reasons to study in Nepal, including affordability, quality institutions, student support, and career pathways.',
  openGraph: {
    title: 'Why Study in Nepal | Study in Nepal',
    description: 'Explore 10 strong reasons to study in Nepal, including affordability, quality institutions, student support, and career pathways.',
    images: ['https://studyinnepal.com/images/hero-study-nepal.png'],
  },
  alternates: {
    canonical: 'https://studyinnepal.com/why-study-nepal',
  },
}

export const dynamic = 'force-static'

export default function WhyStudyNepalPage(): JSX.Element {
  return (
    <main className="mx-auto w-full max-w-7xl px-1.5 py-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-[2.25rem] border border-[rgba(15,42,95,0.12)] bg-[linear-gradient(135deg,#07162f_0%,#0f2a5f_52%,#173f85_100%)] px-5 py-6 text-white shadow-[0_28px_90px_rgba(8,26,58,0.24)] sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,16,46,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/images/bg-mapofworld.png')] bg-[center_12%] bg-no-repeat bg-[length:min(68vw,54rem)_auto] opacity-24 lg:opacity-30"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur">
              Why Study in Nepal
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl">
              Quality education, affordable living, and real student experience.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Use this page as a practical guide to why Nepal is becoming a serious choice for international students who want academic value and a more personal study experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/10-reasons-to-study-in-nepal" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(255,255,255,0.92)] focus-ring">
                Explore 10 Reasons
              </Link>
              <Link href="/booking" className="inline-flex rounded-full border border-white/20 bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">
                Student Inquiry
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: '10', label: 'Reasons to explore' },
                { value: '4+', label: 'Student cities' },
                { value: '1', label: 'Simple next step' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.4rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur">
                  <div className="text-3xl font-semibold text-white">{item.value}</div>
                  <p className="mt-1 text-sm text-white/72">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 hidden h-28 w-28 rounded-full bg-white/10 blur-3xl lg:block" />
            <div className="overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/8 p-2 backdrop-blur-sm">
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="overflow-hidden rounded-[1.2rem] bg-white/10">
                  <Image src="/images/student-life-in-nepal.jpg" alt="Students enjoying campus life in Nepal" width={900} height={780} className="h-full w-full object-cover" />
                </div>
                <div className="grid gap-2">
                  <article className="rounded-[1.2rem] bg-white px-4 py-4 text-[var(--color-dark)] shadow-[0_14px_30px_rgba(8,26,58,0.12)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">Affordable value</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Budget-friendly study and living options with real academic upside.</p>
                  </article>
                  <article className="rounded-[1.2rem] bg-white px-4 py-4 text-[var(--color-dark)] shadow-[0_14px_30px_rgba(8,26,58,0.12)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">Guided pathways</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Clear routes from inquiry to admission, with support at each step.</p>
                  </article>
                  <article className="rounded-[1.2rem] bg-[linear-gradient(135deg,#0f2a5f_0%,#143b7c_100%)] px-4 py-4 text-white shadow-[0_14px_30px_rgba(8,26,58,0.12)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Cultural depth</p>
                    <p className="mt-2 text-sm leading-6 text-white/82">Study in a place where learning and lived experience feel connected.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="rounded-[1.5rem] border border-[rgba(15,42,95,0.1)] bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-[var(--color-dark)]">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-4 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">Nepal's Academic Infrastructure</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600 max-w-3xl">A structured foundation section that feels editorial, balanced, and more premium than a stack of isolated cards. A cleaner path for students who want clarity, not clutter.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 items-start">
          <article className="rounded-[1rem] overflow-hidden border border-[rgba(15,42,95,0.06)]">
            <Image src="/images/Renovation-and-Expansion-of-Tri-Chandra-Campus.jpg" alt="Tri-Chandra Multiple Campus" width={900} height={540} className="w-full object-cover" />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-[var(--color-dark)]">Tri-Chandra Multiple Campus</h3>
              <p className="mt-2 text-sm text-slate-600">Historic campus offering humanities, social sciences and a deep academic tradition.</p>
            </div>
          </article>

          <article className="rounded-[1rem] overflow-hidden border border-[rgba(15,42,95,0.06)]">
            <Image src="/images/pulchowk-engineering.jpeg" alt="Pulchowk Campus" width={900} height={540} className="w-full object-cover" />
            <div className="p-3">
              <h3 className="text-lg font-semibold text-[var(--color-dark)]">Pulchowk Campus</h3>
              <p className="mt-2 text-sm text-slate-600">One of Nepal's premier engineering campuses — practical, well-equipped, and industry-facing.</p>
            </div>
          </article>
        </div>

        <div className="mt-6">
          <p className="text-sm text-slate-600 max-w-3xl">Nepal can offer affordability, accessible campuses, and serious academic options. The layout above keeps that story focused and easy to scan. Read study info to explore specific campuses like Ratna Rajya, Padma Kanya, and law faculties across the city.</p>
          <div className="mt-4">
            <Link href="/study-info" className="inline-flex rounded-full bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">Explore Campus Profiles</Link>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-4 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">Campus and Student Life in Nepal</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">Real student experiences and welcoming campus communities make the study journey feel more personal and grounded.</p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 items-start">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 1a3 3 0 00-3 3v1H6a2 2 0 00-2 2v3h16V7a2 2 0 00-2-2h-3V4a3 3 0 00-3-3zM4 14v3a3 3 0 003 3h10a3 3 0 003-3v-3H4z" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-[var(--color-dark)]">Affordable and strategic in Nepal</h3>
                <p className="mt-1 text-sm text-slate-600">Nepal offers a practical balance of tuition, living cost, and academic access for international students.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2l7 4v6c0 5-3.58 9.74-7 11-3.42-1.26-7-6-7-11V6l7-4z" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-[var(--color-dark)]">Real-world campus culture in Nepal</h3>
                <p className="mt-1 text-sm text-slate-600">Students often find smaller, more personal campuses where support feels direct and human.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M4 4h16v2H4V4zm2 6h12v9H6v-9zm3 2v5h2v-5H9z" />
                </svg>
              </span>
              <div>
                <h3 className="text-base font-semibold text-[var(--color-dark)]">Career-minded pathways in Nepal</h3>
                <p className="mt-1 text-sm text-slate-600">Programs in business, hospitality, IT, and health can connect to employability and long-term plans.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[1rem] overflow-hidden border border-[rgba(15,42,95,0.06)]">
            <Image src="/images/student-life-in-nepal.jpg" alt="Students on campus in Nepal" width={900} height={600} className="w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-4 shadow-soft sm:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Popular destinations</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">10 major cities to study in Nepal</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">Compare cities by study options, housing, living cost, and student life.</p>
        </div>

        {[
          {
            label: 'Education',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M12 3 2 8l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M5 10.5V15c0 1.7 3.1 4 7 4s7-2.3 7-4v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ),
          },
          {
            label: 'Accommodation',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
            ),
          },
          {
            label: 'Living cost',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M16.5 7.5c0-1.9-2-3.5-4.5-3.5S7.5 5.6 7.5 7.5 9.3 10 12 10s4.5 1.1 4.5 3.5S14.5 17 12 17s-4.5-1.6-4.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
          },
          {
            label: 'Nearby places',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            ),
          },
          {
            label: 'Colleges',
            icon: (
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M4 8.5 12 5l8 3.5-8 3.5-8-3.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M6 10v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ),
          },
        ].map((item) => (
          <div key={item.label} className="sr-only">
            {item.label}
          </div>
        ))}

        <div className="mt-6 space-y-5">
          <article className="overflow-hidden rounded-[1.75rem] border border-[rgba(15,42,95,0.1)] bg-[linear-gradient(135deg,#0f2a5f_0%,#143b7c_100%)] text-white shadow-[0_18px_40px_rgba(8,26,58,0.12)]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-5 sm:p-7 lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--color-primary)]">1</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Top destination</p>
                    <h3 className="mt-1 text-2xl font-semibold sm:text-3xl">Kathmandu</h3>
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
                  Nepal's strongest study city, with MBBS, MBA, engineering, IT, health sciences, and many colleges.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: 'Education', value: 'MBBS, MBA, engineering, IT, management, health sciences', icon: 'education' },
                    { label: 'Accommodation', value: 'Hostels, apartments, shared rooms, and student rentals', icon: 'home' },
                    { label: 'Living cost', value: 'Moderate to budget-friendly by area and lifestyle', icon: 'cost' },
                    { label: 'Nearby places', value: 'Pashupatinath, Boudhanath, Durbar Square, Patan, Bhaktapur', icon: 'place' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.2rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur">
                      <div className="flex items-center gap-2 text-white/75">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/12">
                          {item.icon === 'education' && (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 3 2 8l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                              <path d="M5 10.5V15c0 1.7 3.1 4 7 4s7-2.3 7-4v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                          )}
                          {item.icon === 'home' && (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>
                          )}
                          {item.icon === 'cost' && (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                              <path d="M16.5 7.5c0-1.9-2-3.5-4.5-3.5S7.5 5.6 7.5 7.5 9.3 10 12 10s4.5 1.1 4.5 3.5S14.5 17 12 17s-4.5-1.6-4.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                          {item.icon === 'place' && (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" stroke="currentColor" strokeWidth="1.8" />
                              <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                          )}
                        </span>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em]">{item.label}</p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/88">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {['MBBS', 'MBA', 'Engineering', 'IT', 'Health', 'More colleges'].map((tag) => (
                    <span key={tag} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/82">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[rgba(255,255,255,0.06)] p-4 sm:p-5 lg:p-6">
                <div className="rounded-[1.4rem] border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">Colleges and universities</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Tribhuvan University area', 'Kathmandu University links', 'St. Xavier\'s College', 'IEC College', 'NCC / NCIT / Ace / Kings area'].map((item) => (
                      <div key={item} className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[var(--color-dark)] shadow-[0_8px_18px_rgba(8,26,58,0.08)]">
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/82">
                    For students, Kathmandu works best when you want the strongest mix of education choices, practical accommodation, and easy access to everything from study support to day-to-day living.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[1.65rem] border border-[rgba(15,42,95,0.1)] bg-[linear-gradient(180deg,#ffffff_0%,rgba(15,42,95,0.02)_100%)] shadow-[0_12px_30px_rgba(8,26,58,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="p-5 sm:p-7 lg:p-8">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-secondary)] text-sm font-semibold text-white">2</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Next destination</p>
                    <h3 className="mt-1 text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">Pokhara</h3>
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Pokhara is a calm lakeside city with strong hospitality, management, and student-life appeal.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    { label: 'Education', value: 'Business, hospitality, management, tourism, and more' },
                    { label: 'Accommodation', value: 'Hostels, lakeside apartments, shared rentals, quiet neighborhoods' },
                    { label: 'Living cost', value: 'Usually easier on the budget than the capital' },
                    { label: 'Nearby places', value: 'Phewa Lake, World Peace Pagoda, Sarangkot, hiking spots' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.15rem] border border-[rgba(15,42,95,0.1)] bg-[rgba(15,42,95,0.03)] px-4 py-4 shadow-[0_8px_18px_rgba(8,26,58,0.03)]">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                          {item.label === 'Education' ? (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 3 2 8l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                              <path d="M5 10.5V15c0 1.7 3.1 4 7 4s7-2.3 7-4v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                          ) : item.label === 'Accommodation' ? (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>
                          ) : item.label === 'Living cost' ? (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                              <path d="M16.5 7.5c0-1.9-2-3.5-4.5-3.5S7.5 5.6 7.5 7.5 9.3 10 12 10s4.5 1.1 4.5 3.5S14.5 17 12 17s-4.5-1.6-4.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" stroke="currentColor" strokeWidth="1.8" />
                              <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                          )}
                        </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{item.label}</p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[rgba(15,42,95,0.03)] p-4 sm:p-5 lg:p-6">
                <div className="overflow-hidden rounded-[1.35rem]">
                  <Image src="/images/pokhara image .jpg" alt="Pokhara city and lake views" width={1100} height={760} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4 lg:grid-cols-2">
            {destinations.slice(2).map((city, index) => (
              <article key={city.name} className="overflow-hidden rounded-[1.5rem] border border-[rgba(15,42,95,0.1)] bg-[linear-gradient(180deg,#ffffff_0%,rgba(15,42,95,0.02)_100%)] shadow-[0_12px_30px_rgba(8,26,58,0.06)]">
                <div className="bg-[rgba(15,42,95,0.03)] px-4 py-4 sm:px-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white shadow-[0_10px_18px_rgba(8,26,58,0.18)]">
                      {index + 3}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-[var(--color-dark)]">{city.name}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
                        Education • Accommodation • Living cost • Colleges
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">{city.description}</p>
                </div>

                <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                  {[
                    { label: 'Education', value: city.education },
                    { label: 'Accommodation', value: city.accommodation },
                    { label: 'Living cost', value: city.livingCost },
                    { label: 'Nearby places', value: city.nearbyPlaces },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[1.15rem] border border-[rgba(15,42,95,0.1)] bg-white px-4 py-4 shadow-[0_8px_18px_rgba(8,26,58,0.04)]">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                          {item.label === 'Education' ? (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 3 2 8l10 5 10-5-10-5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                              <path d="M5 10.5V15c0 1.7 3.1 4 7 4s7-2.3 7-4v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                          ) : item.label === 'Accommodation' ? (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M4 11.5 12 5l8 6.5V19a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-7.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>
                          ) : item.label === 'Living cost' ? (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 3v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                              <path d="M16.5 7.5c0-1.9-2-3.5-4.5-3.5S7.5 5.6 7.5 7.5 9.3 10 12 10s4.5 1.1 4.5 3.5S14.5 17 12 17s-4.5-1.6-4.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          ) : (
                            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                              <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" stroke="currentColor" strokeWidth="1.8" />
                              <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                          )}
                        </span>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{item.label}</p>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[rgba(15,42,95,0.08)] px-4 py-4 sm:px-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">Colleges and universities</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {city.colleges.map((item) => (
                      <span key={item} className="rounded-full bg-[rgba(15,42,95,0.05)] px-3 py-2 text-xs font-semibold text-[var(--color-dark)]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[rgba(15,42,95,0.1)] bg-white p-4 shadow-soft sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">Ready to Start Your Journey?</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
          Begin your application process today and take the first step toward studying in Nepal.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {journeySteps.map((step) => (
            <div key={step} className="rounded-[1rem] border border-[rgba(15,42,95,0.1)] bg-[rgba(15,42,95,0.02)] px-3 py-3 text-sm font-medium text-[var(--color-dark)]">
              {step}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/booking" className="inline-flex rounded-full bg-[var(--color-secondary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ab0d26] focus-ring">
            Begin Application
          </Link>
          <Link href="/contact" className="inline-flex rounded-full border border-[rgba(15,42,95,0.18)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(15,42,95,0.04)] focus-ring">
            Contact Advisor
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <FAQSection
          title="Frequently asked questions for international students"
          description="These are the most common questions students ask before selecting Nepal as their study destination."
          faqs={studyInfoFaqs}
          canonicalUrl="https://studyinnepal.com/why-study-nepal"
        />
      </div>
    </main>
  )
}

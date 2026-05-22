export interface HomeStat {
  label: string
  value: string
}

export interface WhyNepalItem {
  title: string
  description: string
  imageSrc: string
}

export interface HomeUniversityCard {
  name: string
  location: string
  description: string
  imageSrc: string
}

export interface HomeTestimonial {
  name: string
  countryFlag: string
  university: string
  quote: string
  imageSrc: string
}

export const homeStats: HomeStat[] = [
  { label: 'Universities reviewed', value: '30+' },
  { label: 'Student pathways', value: '12' },
  { label: 'Countries supported', value: '20+' },
  { label: 'Response time', value: '< 24h' },
]

export const whyNepalItems: WhyNepalItem[] = [
  {
    title: 'Affordable and strategic',
    description: 'Nepal offers a practical balance of tuition, living cost, and academic access for international students.',
    imageSrc: '/images/why-nepal-affordable.svg',
  },
  {
    title: 'Real-world campus culture',
    description: 'Students often find smaller, more personal campuses where support feels direct and human.',
    imageSrc: '/images/why-nepal-campus.svg',
  },
  {
    title: 'Career-minded pathways',
    description: 'Programs in business, hospitality, IT, and health can connect to employability and long-term plans.',
    imageSrc: '/images/why-nepal-career.svg',
  },
]

export const homeUniversities: HomeUniversityCard[] = [
  {
    name: 'Kathmandu University',
    location: 'Dhulikhel',
    description: 'Recognized for strong academic planning, research culture, and a premium campus experience.',
    imageSrc: '/images/ku-logo.jpg',
  },
  {
    name: 'Tribhuvan University',
    location: 'Kathmandu',
    description: 'Broad program coverage with a long academic footprint and wide student familiarity.',
    imageSrc: '/images/tu-logo.jpg',
  },
  {
    name: 'Pokhara University',
    location: 'Pokhara',
    description: 'A practical choice for students looking for modern programs and an accessible city setting.',
    imageSrc: '/images/pokhara-logo.png',
  },
]

export const homeTestimonials: HomeTestimonial[] = [
  {
    name: 'Amina Rahman',
    countryFlag: '🇧🇩',
    university: 'Kathmandu University',
    quote: 'The guidance was clear, calm, and more useful than the generic advice I had seen elsewhere.',
    imageSrc: '/images/student-1.svg',
  },
  {
    name: 'Rohan Patel',
    countryFlag: '🇮🇳',
    university: 'Tribhuvan University',
    quote: 'The portal helped me compare options quickly and understand what mattered for my application.',
    imageSrc: '/images/student-2.svg',
  },
  {
    name: 'Sara Mendez',
    countryFlag: '🇳🇬',
    university: 'Pokhara University',
    quote: 'I liked the practical approach. It felt designed for decision-making, not just browsing.',
    imageSrc: '/images/student-3.svg',
  },
]
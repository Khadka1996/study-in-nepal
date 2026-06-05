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
  imageSrc?: string
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
  {
    title: 'Supportive student guidance',
    description: 'Students can get direct help with admissions, documentation, and choosing the right university fit.',
    imageSrc: '/images/why-nepal-guidance.svg',
  },
]

export const homeUniversities: HomeUniversityCard[] = [
  {
    name: 'Kathmandu University',
    location: 'Dhulikhel',
    description: 'A research-led university with a polished campus experience and strong international appeal.',
    imageSrc: '/images/ku-logo.jpg',
  },
  {
    name: 'Tribhuvan University',
    location: 'Kathmandu',
    description: 'Nepal’s largest public university, offering a deep academic network across every major discipline.',
    imageSrc: '/images/tu-logo.jpg',
  },
  {
    name: 'Pokhara University',
    location: 'Pokhara',
    description: 'A modern choice for career-focused study in a city that is popular with international students.',
    imageSrc: '/images/pokhara-logo.png',
  },
  {
    name: 'Purbanchal University',
    location: 'Biratnagar',
    description: 'A strong eastern Nepal option with broad professional pathways and regional reach.',
    imageSrc: '/images/purbanchal-logo.png',
  },
  {
    name: 'Nepal Open University',
    location: 'Lalitpur',
    description: 'Flexible open and distance learning for students who need accessible study pathways.',
    imageSrc: '/images/open-university.png',
  },
  {
    name: 'Far Western University',
    location: 'Dhangadhi',
    description: 'A growing public university supporting study opportunities in Nepal’s far-western region.',
    imageSrc: '/images/farwestern.jpg',
  },
]

export const homeTestimonials: HomeTestimonial[] = [
  {
    name: 'Amina Rahman',
    countryFlag: '🇧🇩',
    university: 'Kathmandu University',
    quote: 'The guidance was clear, calm, and more useful than the generic advice I had seen elsewhere.',
    imageSrc: '/images/student-female.png',
  },
  {
    name: 'Rohan Patel',
    countryFlag: '🇮🇳',
    university: 'Tribhuvan University',
    quote: 'The portal helped me compare options quickly and understand what mattered for my application.',
    imageSrc: '/images/student-male.png',
  },
  {
    name: 'Sara Mendez',
    countryFlag: '🇳🇬',
    university: 'Pokhara University',
    quote: 'I liked the practical approach. It felt designed for decision-making, not just browsing.',
    imageSrc: '/images/student-female.png',
  },
]
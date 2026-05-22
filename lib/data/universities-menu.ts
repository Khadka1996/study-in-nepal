export interface UniversityMenuItem {
  id: string
  name: string
  description: string
  location: string
  image: string
  logo?: string
  programs: string[]
  href: string
}

export const universitiesMenuData: UniversityMenuItem[] = [
  {
    id: 'tribhuvan',
    name: 'Tribhuvan University',
    description: 'The oldest and largest public university in Nepal with a wide academic network.',
    location: 'Kathmandu',
    image: '/images/tu-logo.jpg',
    logo: '/images/tu-logo.jpg',
    programs: ['MBBS', 'BBA', 'Engineering', 'Law', 'Science', 'Public Health'],
    href: '/universities/tribhuvan'
  },
  {
    id: 'kathmandu',
    name: 'Kathmandu University',
    description: 'An autonomous university known for strong research and modern academic programs.',
    location: 'Dhulikhel',
    image: '/images/ku-logo.jpg',
    logo: '/images/ku-logo.jpg',
    programs: ['Engineering', 'MBA', 'Medicine', 'Architecture', 'Science', 'Computer Science'],
    href: '/universities/kathmandu'
  },
  {
    id: 'pokhara',
    name: 'Pokhara University',
    description: 'A modern public university with practical programs and a growing academic profile.',
    location: 'Pokhara',
    image: '/images/pokhara-logo.png',
    logo: '/images/pokhara-logo.png',
    programs: ['Engineering', 'Nursing', 'Management', 'BCA', 'Hotel Management', 'Computer Science'],
    href: '/universities/pokhara'
  },
  {
    id: 'purbanchal',
    name: 'Purbanchal University',
    description: 'A major public university serving eastern Nepal with technical and professional study paths.',
    location: 'Biratnagar',
    image: '/images/purbanchal-logo.png',
    logo: '/images/purbanchal-logo.png',
    programs: ['Engineering', 'Medicine', 'BBA', 'Science', 'BCA', 'Public Health'],
    href: '/universities/purbanchal'
  },
  {
    id: 'lumbini',
    name: 'Lumbini Buddhist University',
    description: 'A specialized university rooted in Buddhist heritage and higher learning.',
    location: 'Rupandehi',
    image: '/images/lumbini%20buddhist.png',
    logo: '/images/lumbini%20buddhist.png',
    programs: ['Buddhist Studies', 'Management', 'Arts', 'Tourism', 'Education', 'Social Science'],
    href: '/universities/lumbini'
  },
  {
    id: 'midwestern',
    name: 'Mid-West University',
    description: 'A public university with programs across western and mid-western Nepal.',
    location: 'Surkhet',
    image: '/images/midwestern.jpeg',
    logo: '/images/midwestern.jpeg',
    programs: ['Engineering', 'Education', 'BBA', 'Agriculture', 'Science', 'Management'],
    href: '/universities/midwestern'
  },
  {
    id: 'nepal-sanskrit',
    name: 'Nepal Sanskrit University',
    description: 'Nepal’s dedicated university for Sanskrit, philosophy, and traditional scholarship.',
    location: 'Dang',
    image: '/images/hero-study-nepal.svg',
    programs: ['Sanskrit', 'Philosophy', 'Religion', 'Literature', 'Education', 'Cultural Studies'],
    href: '/universities/nepal-sanskrit'
  },
  {
    id: 'nepal-open',
    name: 'Nepal Open University',
    description: 'A distance-learning university expanding access through flexible study pathways.',
    location: 'Kathmandu',
    image: '/images/open%20university.png',
    logo: '/images/open%20university.png',
    programs: ['IT', 'Management', 'Education', 'Public Policy', 'Social Science', 'Law'],
    href: '/universities/nepal-open'
  },
  {
    id: 'agriculture-forestry',
    name: 'Agriculture and Forestry University',
    description: 'Focused on agriculture, forestry, and veterinary science education.',
    location: 'Rampur',
    image: '/images/hero-study-nepal.svg',
    programs: ['Agriculture', 'Forestry', 'Veterinary', 'Food Science', 'Horticulture', 'Environment Science'],
    href: '/universities/agriculture-forestry'
  },
  {
    id: 'far-western',
    name: 'Far Western University',
    description: 'A public university serving the far-western region with multidisciplinary study options.',
    location: 'Dhangadhi',
    image: '/images/farwestern.jpg',
    logo: '/images/farwestern.jpg',
    programs: ['Engineering', 'Medicine', 'BCA', 'Education', 'Business', 'Management'],
    href: '/universities/far-western'
  },
  {
    id: 'nepal-med',
    name: 'Nepal Medical College',
    description: 'A respected medical college with clinical and healthcare-focused education.',
    location: 'Kathmandu',
    image: '/images/madan%20bhandari.png',
    logo: '/images/madan%20bhandari.png',
    programs: ['MBBS', 'BNS', 'Public Health', 'Pharmacy', 'Allied Health', 'Laboratory Science'],
    href: '/universities/nepal-med'
  },
]

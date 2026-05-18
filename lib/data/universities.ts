export interface UniversityItem {
  name: string
  location: string
  description: string
  imageSrc: string
}

export const featuredUniversities: UniversityItem[] = [
  {
    name: 'Kathmandu University',
    location: 'Dhulikhel',
    description: 'Recognized for strong academic planning, research culture, and a premium campus experience.',
    imageSrc: '/images/university-kathmandu.svg',
  },
  {
    name: 'Tribhuvan University',
    location: 'Kathmandu',
    description: 'Broad program coverage with a long academic footprint and wide student familiarity.',
    imageSrc: '/images/university-tribhuvan.svg',
  },
  {
    name: 'Pokhara University',
    location: 'Pokhara',
    description: 'A practical choice for students looking for modern programs and an accessible city setting.',
    imageSrc: '/images/university-pokhara.svg',
  },
]
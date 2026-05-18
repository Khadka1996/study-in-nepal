export interface TestimonialItem {
  name: string
  countryFlag: string
  university: string
  quote: string
  imageSrc: string
}

export const testimonials: TestimonialItem[] = [
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
  {
    name: 'David Kimani',
    countryFlag: '🇰🇪',
    university: 'Purbanchal University',
    quote: 'I found the Nepal-focused planning advice especially helpful before reaching out to institutions.',
    imageSrc: '/images/student-4.svg',
  },
]
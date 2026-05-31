export interface UniversityMenuItem {
  id: string
  name: string
  description: string
  location: string
  image: string
  buildingImage?: string
  logo?: string
  programs: string[]
  href: string
}

export const universitiesMenuData: UniversityMenuItem[] = [
  {
    id: 'tribhuvan',
    name: 'Tribhuvan University',
    description: 'Nepal’s largest and oldest public university, known for its expansive academic network and wide subject coverage.',
    location: 'Kathmandu',
    image: '/images/tu-logo.jpg',
    buildingImage: '/images/Renovation-and-Expansion-of-Tri-Chandra-Campus.jpg',
    logo: '/images/tu-logo.jpg',
    programs: ['MBBS', 'BBA', 'Engineering', 'Law', 'Science', 'Public Health'],
    href: '/universities/tribhuvan'
  },
  {
    id: 'kathmandu',
    name: 'Kathmandu University',
    description: 'An autonomous university with a strong research profile, modern teaching model, and international reputation.',
    location: 'Dhulikhel',
    image: '/images/ku-logo.jpg',
    buildingImage: '/images/kathmandu-university-building.avif',
    logo: '/images/ku-logo.jpg',
    programs: ['Engineering', 'MBA', 'Medicine', 'Architecture', 'Science', 'Computer Science'],
    href: '/universities/kathmandu'
  },
  {
    id: 'pokhara',
    name: 'Pokhara University',
    description: 'A modern public university with practical programs, strong professional pathways, and a student-friendly city setting.',
    location: 'Pokhara',
    image: '/images/pokhara-logo.png',
    buildingImage: '/images/pokhara-university-building.gif',
    logo: '/images/pokhara-logo.png',
    programs: ['Engineering', 'Nursing', 'Management', 'BCA', 'Hotel Management', 'Computer Science'],
    href: '/universities/pokhara'
  },
  {
    id: 'purbanchal',
    name: 'Purbanchal University',
    description: 'A major eastern Nepal university with broad technical, professional, and healthcare pathways.',
    location: 'Biratnagar',
    image: '/images/purbanchal-logo.png',
    buildingImage: '/images/purbanchal-university-building.jpg',
    logo: '/images/purbanchal-logo.png',
    programs: ['Engineering', 'Medicine', 'BBA', 'Science', 'BCA', 'Public Health'],
    href: '/universities/purbanchal'
  },
  {
    id: 'lumbini',
    name: 'Lumbini Buddhist University',
    description: 'A specialized university rooted in Buddhist heritage, cultural study, and values-based higher learning.',
    location: 'Rupandehi',
    image: '/images/lumbini-buddhist.png',
    buildingImage: '/images/lumbini.jpg',
    logo: '/images/lumbini-buddhist.png',
    programs: ['Buddhist Studies', 'Management', 'Arts', 'Tourism', 'Education', 'Social Science'],
    href: '/universities/lumbini'
  },
  {
    id: 'midwestern',
    name: 'Mid-West University',
    description: 'A public university supporting higher education across western and mid-western Nepal with growing academic breadth.',
    location: 'Surkhet',
    image: '/images/midwestern.jpeg',
    buildingImage: '/images/mid-west-university-mwu-building.jpg',
    logo: '/images/midwestern.jpeg',
    programs: ['Engineering', 'Education', 'BBA', 'Agriculture', 'Science', 'Management'],
    href: '/universities/midwestern'
  },
  {
    id: 'nepal-sanskrit',
    name: 'Nepal Sanskrit University',
    description: 'Nepal’s dedicated university for Sanskrit, philosophy, and traditional scholarship.',
    location: 'Dang',
    image: '/images/Nepal-Sanskrit-University.jpeg',
    buildingImage: '/images/Nepal-Sanskrit-University.jpeg',
    logo: '/images/Nepal-Sanskrit-University.jpeg',
    programs: ['Sanskrit', 'Philosophy', 'Religion', 'Literature', 'Education', 'Cultural Studies'],
    href: '/universities/nepal-sanskrit'
  },
  {
    id: 'nepal-open',
    name: 'Nepal Open University',
    description: 'A distance-learning university expanding access through flexible and open study pathways.',
    location: 'Kathmandu',
    image: '/images/open-university.png',
    buildingImage: '/images/open-university.png',
    logo: '/images/open-university.png',
    programs: ['IT', 'Management', 'Education', 'Public Policy', 'Social Science', 'Law'],
    href: '/universities/nepal-open'
  },
  {
    id: 'agriculture-forestry',
    name: 'Agriculture and Forestry University',
    description: 'A specialist university focused on agriculture, forestry, veterinary science, and environmental study.',
    location: 'Rampur',
    image: '/images/Faculty-of-Agriculture,-Agriculture-and-Forestry-University.jpg',
    buildingImage: '/images/faculty-of-agriculture-agriculture-and-forestry-university-afu-building.jpg',
    logo: '/images/Faculty-of-Agriculture,-Agriculture-and-Forestry-University.jpg',
    programs: ['Agriculture', 'Forestry', 'Veterinary', 'Food Science', 'Horticulture', 'Environment Science'],
    href: '/universities/agriculture-forestry'
  },
  {
    id: 'far-western',
    name: 'Far Western University',
    description: 'A public university serving far-western Nepal with multidisciplinary study options and regional reach.',
    location: 'Dhangadhi',
    image: '/images/farwestern.jpg',
    buildingImage: '/images/far-western-university-gate.jpg',
    logo: '/images/farwestern.jpg',
    programs: ['Engineering', 'Medicine', 'BCA', 'Education', 'Business', 'Management'],
    href: '/universities/far-western'
  },
  {
    id: 'nepal-med',
    name: 'Nepal Medical College',
    description: 'A respected medical college with clinical training and healthcare-focused education.',
    location: 'Kathmandu',
    image: '/images/madan-bhandari.png',
    buildingImage: '/images/madan-bhandari.png',
    logo: '/images/madan-bhandari.png',
    programs: ['MBBS', 'BNS', 'Public Health', 'Pharmacy', 'Allied Health', 'Laboratory Science'],
    href: '/universities/nepal-med'
  },
  {
    id: 'bpkihs',
    name: 'B.P. Koirala Institute of Health Sciences',
    description: 'A leading health sciences institute in eastern Nepal with strong clinical, nursing, and research pathways.',
    location: 'Dharan',
    image: '/images/b.p.-koirala-institute-of-health-sciences-(bpkihs)-logo.jpg',
    buildingImage: '/images/b.p.-koirala-institute-of-health-sciences-(bpkihs)-logo.jpg',
    logo: '/images/b.p.-koirala-institute-of-health-sciences-(bpkihs)-logo.jpg',
    programs: ['MBBS', 'BDS', 'BSc Nursing', 'MD/MS', 'Public Health', 'Allied Health'],
    href: '/universities/bpkihs'
  },
]

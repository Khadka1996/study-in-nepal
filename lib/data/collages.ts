export interface CollageItem {
  id: string
  name: string
  city: string
  description: string
  university: string
  popularCourses: string[]
  bachelorCourses: string[]
  masterCourses: string[]
  image: string
  logo: string
  buildingImage: string
  location: string
}

export const collagesData: CollageItem[] = [
  {
    id: 'st-xaviers',
    name: "St. Xavier's College",
    city: 'Kathmandu',
    location: 'Kathmandu',
    description: 'A highly regarded college with strong management, science, and humanities offerings. Known for excellent faculty and a supportive learning environment.',
    university: 'Tribhuvan University',
    popularCourses: ['+2 Science', '+2 Management', '+2 Humanities', 'Physics', 'Chemistry', 'Biology'],
    bachelorCourses: ['BBA', 'BBS', 'BSc Computer Science', 'BSc Biology'],
    masterCourses: ['MBS', 'MSc Physics', 'MA English'],
    image: '/images/st.xavier college building.jpeg',
    logo: '/images/st.xavier-college-logo.webp',
    buildingImage: '/images/st.xavier college building.jpeg',
  },
  {
    id: 'thames-international',
    name: 'Thames International College',
    city: 'Kathmandu',
    location: 'Kathmandu',
    description: 'Known for business and social science programs with a modern learning environment. Offers practical, industry-focused education.',
    university: 'Tribhuvan University',
    popularCourses: ['+2 Management', 'Accounting', 'Business Studies', 'Economics', 'Statistics', 'English'],
    bachelorCourses: ['BBA', 'BBM', 'BA Social Work'],
    masterCourses: ['MBA', 'MBS', 'MA English'],
    image: '/images/thames-international-college-building.png',
    logo: '/images/themes college logo.jpg',
    buildingImage: '/images/thames-international-college-building.png',
  },
  {
    id: 'ncit',
    name: 'Nepal College of Information Technology',
    city: 'Lalitpur',
    location: 'Lalitpur',
    description: 'A specialist college with a strong reputation in computer science and engineering education. Best for tech-focused students.',
    university: 'Pokhara University',
    popularCourses: ['+2 Science', 'Computer Science', 'Physics', 'Chemistry', 'Mathematics', 'English'],
    bachelorCourses: ['BSc CSIT', 'BSc Computer Science', 'BSc Information Technology'],
    masterCourses: ['MSc Computer Science', 'MSc Information Technology'],
    image: '/images/nepal-college-of-information-technology-ncit-building.jpg',
    logo: '/images/nepal_college_of_informationpng_logo.png',
    buildingImage: '/images/nepal-college-of-information-technology-ncit-building.jpg',
  },
  {
    id: 'ace-institute',
    name: 'Ace Institute of Management',
    city: 'Kathmandu',
    location: 'Kathmandu',
    description: 'A management-focused college with a practical learning style and industry links. Strong emphasis on business education.',
    university: 'Pokhara University',
    popularCourses: ['+2 Management', 'Accounting', 'Business Studies', 'Tourism Studies', 'Hotel Management', 'Hospitality'],
    bachelorCourses: ['BBA', 'BBS', 'BBM'],
    masterCourses: ['MBA', 'MSc Management'],
    image: '/images/ace-institute-of-management-building.jpg',
    logo: '/images/ace college logo.png',
    buildingImage: '/images/ace-institute-of-management-building.jpg',
  },
  {
    id: 'orchid-international',
    name: 'Orchid International College',
    city: 'Kathmandu',
    location: 'Kathmandu',
    description: 'A broad academic college with strong business and IT-related pathways. Offers diverse program options.',
    university: 'Tribhuvan University',
    popularCourses: ['+2 Management', '+2 Science', 'Business Studies', 'Computer Science', 'Accounting', 'Economics'],
    bachelorCourses: ['BBA', 'BBM', 'BSc CSIT'],
    masterCourses: ['MBA', 'MBS'],
    image: '/images/orchid-building.jpg',
    logo: '/images/Orchid_International_College_Logo.webp',
    buildingImage: '/images/orchid-building.jpg',
  },
  {
    id: 'kings-college',
    name: "King's College",
    city: 'Kathmandu',
    location: 'Kathmandu',
    description: 'A student-centered college with business, entrepreneurship, and liberal arts offerings. Focus on developing independent learners.',
    university: 'Local university',
    popularCourses: ['+2 Management', '+2 Humanities', 'Business Studies', 'Political Science', 'History', 'Entrepreneurship'],
    bachelorCourses: ['BBA', 'BBS', 'BA Political Science'],
    masterCourses: ['MBA', 'MA English'],
    image: '/images/Kings-College-Nepal-building.webp',
    logo: '/images/kings college -logo.png',
    buildingImage: '/images/Kings-College-Nepal-building.webp',
  },
  {
    id: 'apex-college',
    name: 'Apex College',
    city: 'Kathmandu',
    location: 'Kathmandu',
    description: 'Known for management education and practical business-oriented learning. Strong industry partnerships.',
    university: 'Pokhara University',
    popularCourses: ['+2 Management', 'Accounting', 'Business Studies', 'Economics', 'Tourism Studies', 'Finance'],
    bachelorCourses: ['BBA', 'BBS', 'BHM'],
    masterCourses: ['MBA', 'MBS'],
    image: '/images/apex-college students.jpg',
    logo: '/images/apex college logo.png',
    buildingImage: '/images/apex-college students.jpg',
  },
  {
    id: 'global-college-management',
    name: 'Global College of Management',
    city: 'Kathmandu',
    location: 'Kathmandu',
    description: 'A progressive management college focused on practical business education and industry partnerships. Modern facilities and experienced faculty.',
    university: 'Pokhara University',
    popularCourses: ['+2 Management', 'Accounting', 'Business Studies', 'Hotel Management', 'Tourism', 'Hospitality'],
    bachelorCourses: ['BBA', 'BBS', 'BHM'],
    masterCourses: ['MBA', 'MBS'],
    image: '/images/Global_College_of_Management_building.jpg',
    logo: '/images/Global-College-of-Management-logo.png',
    buildingImage: '/images/Global_College_of_Management_building.jpg',
  },
]

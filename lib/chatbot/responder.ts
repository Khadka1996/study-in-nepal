import { detectIntent, normalize, scoreFAQ } from '@/lib/chatbot/matcher'
import type { ChatbotData, Career, College, Course, FAQItem, School, University } from '@/types/chatbot'
import universityColleges from '@/lib/data/university-colleges'

const pageLinks = {
  universities: '[Universities](/universities)',
  colleges: '[Colleges](/colleges)',
  courses: '[Courses](/courses)',
  booking: '[Booking page](/booking)',
  contact: '[Contact page](/contact)',
}

function listItems<T>(items: T[], formatter: (item: T, index: number) => string, limit = 5): string {
  return items.slice(0, limit).map((item, index) => `${index + 1}. ${formatter(item, index)}`).join('\n')
}

function formatUniversity(university: University): string {
  const courseCount = university.popularCourses?.length ? ` Popular courses: ${university.popularCourses.join(', ')}.` : ''
  return `${university.name} (${university.city}) - ${university.description}.${courseCount}`
}

function formatCollege(college: College): string {
  const university = college.university ? ` Affiliated with ${college.university}.` : ''
  return `${college.name} (${college.city}) - ${college.description}.${university}`
}

function formatSchoolList(school: School): string {
  return `${school.name} (${school.city})`
}

function formatSchoolBrief(school: School): string {
  const programs = school.programs?.length ? `Teaches ${school.programs.join(', ')}.` : 'Contact us for detailed school information.'
  return `${school.name} (${school.city}) - ${school.description} ${programs} Contact us for detailed info.`
}

function formatCourse(course: Course): string {
  const careers = course.careerPaths?.length ? ` Careers: ${course.careerPaths.join(', ')}.` : ''
  return `${course.name} [${course.level}] - ${course.description}.${careers}`
}

function formatCareer(career: Career): string {
  const related = career.relatedCourses?.length ? ` Related courses: ${career.relatedCourses.join(', ')}.` : ''
  const skills = career.skills?.length ? ` Skills: ${career.skills.join(', ')}.` : ''
  return `${career.title} - ${career.summary}.${related}${skills}`
}

function formatFaq(faq: FAQItem): string {
  return `${faq.question}\n${faq.answer}`
}

function findUniversityByQuery(universities: University[], query: string): University | null {
  const directMatch = universities.find((university) => query.includes(normalize(university.name)))
  if (directMatch) {
    return directMatch
  }

  const aliases: Record<string, string[]> = {
    'tribhuvan university': ['tu', 'tribhuvan', 't.u.'],
    'kathmandu university': ['ku', 'kathmandu'],
    'pokhara university': ['pu', 'pokhara'],
    'purbanchal university': ['purbanchal', 'purbu'],
    'nepal open university': ['nou', 'open university'],
    'mid-west university': ['mwu', 'mid western', 'mid-west'],
    'far-western university': ['fwu', 'far western', 'far-western'],
    'lumbini buddhist university': ['lbu', 'lumbini'],
    'agriculture and forestry university': ['afu', 'agriculture university', 'faculty of agriculture'],
    'nepal medical college': ['nmc', 'nepal medical'],
    'b.p. koirala institute of health sciences': ['bpkihs', 'bp koirala', 'b p koirala'],
  }

  return universities.find((university) => {
    const values = aliases[university.name.toLowerCase()] ?? []
    return values.some((alias) => query === normalize(alias) || query.includes(normalize(alias)))
  }) ?? null
}

function findCourseByQuery(courses: Course[], query: string): Course | null {
  return courses.find((course) => query.includes(normalize(course.name))) ?? null
}

function findCollegeByQuery(colleges: College[], query: string): College | null {
  const directMatch = colleges.find((college) => query.includes(normalize(college.name)))
  if (directMatch) {
    return directMatch
  }

  const aliases: Record<string, string[]> = {
    'ratna rajya laxmi campus': ['ratna rajya', 'ratnarajya', 'ratna rajyalaxmi'],
    'ratna rajyalaxmi campus': ['ratna rajya', 'ratnarajya', 'ratna rajyalaxmi'],
    'padma kanya multiple campus': ['padma kanya', 'pk campus', 'padmakanya'],
  }

  return colleges.find((college) => {
    const values = aliases[college.name.toLowerCase()] ?? []
    return values.some((alias) => query === normalize(alias) || query.includes(normalize(alias)))
  }) ?? null
}

function getAffiliatedCollegeNames(university: University, limit = 4): string[] {
  const keyMap: Record<string, string> = {
    'tribhuvan university': 'tribhuvan',
    'kathmandu university': 'kathmandu',
    'pokhara university': 'pokhara',
    'purbanchal university': 'purbanchal',
    'nepal open university': 'nepal-open',
    'mid-west university': 'midwestern',
    'far-western university': 'far-western',
    'lumbini buddhist university': 'lumbini',
    'agriculture and forestry university': 'agriculture-forestry',
    'nepal sanskrit university': 'nepal-sanskrit',
    'nepal medical college': 'nepal-med',
    'b.p. koirala institute of health sciences': 'bpkihs',
  }

  const key = keyMap[university.name.toLowerCase().trim()]
  const entries = key ? universityColleges[key] ?? [] : []
  return entries.slice(0, limit).map((item) => item.name)
}

function formatWebsiteDetails(data: ChatbotData): string {
  const contactLines = data.general.contactInfo.map((item) => `- ${item}`).join('\n')
  return [
    'Study in Nepal helps students compare schools, +2 colleges, universities, courses, career options, and scholarship guidance in Nepal.',
    '',
    'What you can ask me:',
    `- Browse ${pageLinks.universities}, ${pageLinks.colleges}, or ${pageLinks.courses}`,
    `- Open the ${pageLinks.booking} or ${pageLinks.contact}`,
    '- Tell me about a university by name',
    '- Ask about fees, visa, scholarships, or facilities',
    '',
    'Contact details:',
    contactLines,
  ].join('\n')
}

export async function getReply(message: string, data: ChatbotData): Promise<string> {
  const intent = detectIntent(message, data)

  switch (intent.type) {
    case 'greeting':
      return [
        'Namaste. I can help you compare universities, colleges, courses, career paths, and Nepal study FAQs.',
        `Try ${pageLinks.universities}, ${pageLinks.colleges}, or ask which course fits business, IT, or medicine.`,
      ].join(' ')

    case 'list_universities':
      return [
        'Here are some notable Nepal universities:',
        listItems(data.universities, formatUniversity),
        `Browse more on the ${pageLinks.universities} or ask me to narrow by city or course area.`,
      ].join('\n')

    case 'university_detail': {
      const query = intent.query
      const match = findUniversityByQuery(data.universities, query) ?? data.universities[0]
      const colleges = getAffiliatedCollegeNames(match)
      const collegeLine = colleges.length
        ? `Affiliated colleges: ${colleges.join(', ')}.`
        : 'Ask me if you want a few affiliated colleges or partner campuses.'
      return [
        `${match.name}:`,
        `${match.description} ${collegeLine}`,
        `Open the ${pageLinks.universities} for more options or the ${pageLinks.booking} if you want direct help choosing a program.`,
      ].join('\n')
    }

    case 'list_colleges':
      return [
        'Here are some Nepal colleges worth exploring:',
        listItems(data.colleges, formatCollege),
        `Browse more on the ${pageLinks.colleges}, or ask me to compare colleges against universities by city or course area.`,
      ].join('\n')

    case 'list_schools': {
      const schools = data.schools ?? []
      if (schools.length === 0) {
        return 'I do not have school listings available right now. Please try again later or ask about colleges and universities.'
      }
      return [
        'Here are some top Nepal schools and senior secondary options:',
        listItems(schools, formatSchoolList),
        'Ask me about any school name for a little more detail.',
      ].join('\n')
    }

    case 'school_detail': {
      const schools = data.schools ?? []
      if (schools.length === 0) {
        return 'I do not have school details available right now. Please try again later or ask about other study options.'
      }
      const school = schools.find((item) => intent.query.includes(normalize(item.name))) ?? schools[0]
      return [
        `${school.name}:`,
        formatSchoolBrief(school),
        'Contact us for detailed admission information or ask about another school.',
      ].join('\n')
    }

    case 'list_courses':
      return [
        'Popular study fields in Nepal include:',
        listItems(data.courses, formatCourse),
        `See more on the ${pageLinks.courses}, or ask for a specific course if you want admission or career guidance.`,
      ].join('\n')

    case 'course_detail': {
      const query = intent.query
      const match = findCourseByQuery(data.courses, query) ?? data.courses[0]
      return [
        `${match.name}:`,
        formatCourse(match),
        'I can connect this course to likely careers or matching institutions.',
      ].join('\n')
    }

    case 'career_info':
      return [
        'Career-oriented study in Nepal often points to practical fields such as business, IT, hospitality, education, and health programs.',
        listItems(data.careers, formatCareer),
        'If you tell me your background, I can suggest a stronger fit.',
      ].join('\n')

    case 'service_info':
      return [
        'We help with university selection, course planning, admissions support, consultation booking, and follow-up.',
        `You can ask me to show ${pageLinks.universities}, ${pageLinks.colleges}, ${pageLinks.courses}, facilities, scholarships, visa notes, or contact details.`,
        `If you want, I can also recommend a study path or take you to the ${pageLinks.booking}.`,
      ].join(' ')

    case 'contact_info':
      return [
        'Phone: +977 9860540054',
        'WhatsApp: +977 9860540054',
        'Email: inquire@studyinnepal.info',
        'Location: Miteripul, Mandikatar, Kathmandu, Nepal',
        `Use WhatsApp or the ${pageLinks.contact} for direct help.`,
      ].join('\n')

    case 'college_detail': {
      const college = findCollegeByQuery(data.colleges, intent.query) ?? data.colleges[0]
      return [
        `${college.name}:`,
        formatCollege(college),
        'I can compare this college with nearby universities or list its related courses.',
      ].join('\n')
    }

    case 'faq_match': {
      const bestFaq = data.faqs
        .map((faq) => ({ faq, score: scoreFAQ(intent.query, faq) }))
        .sort((left, right) => right.score - left.score)[0]

      if (bestFaq?.faq) {
        return formatFaq(bestFaq.faq)
      }

      break
    }

    case 'general_info':
      return [
        data.general.studyInNepalOverview,
        '',
        'Visa notes:',
        ...data.general.visaInfo.map((item) => `- ${item}`),
        '',
        'Cost notes:',
        ...data.general.costInfo.map((item) => `- ${item}`),
        '',
        'Accommodation notes:',
        ...data.general.accommodationInfo.map((item) => `- ${item}`),
        '',
        'Scholarship notes:',
        ...data.general.scholarshipInfo.map((item) => `- ${item}`),
        '',
        'Contact notes:',
        ...data.general.contactInfo.map((item) => `- ${item}`),
        '',
        `You can also browse ${pageLinks.universities} and ${pageLinks.colleges} or open the ${pageLinks.booking}.`,
      ].join('\n')

    case 'unknown':
    default:
      return 'I could not confidently match that question yet. Do you need assistance? I can direct you to WhatsApp.'
  }

  return 'I found related guidance, but I need a little more detail to answer well. Please ask again with a university, course, or topic name.'
}

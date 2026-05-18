import { detectIntent, getIntentLabel, normalize, scoreFAQ } from '@/lib/chatbot/matcher'
import type { ChatbotData, Career, College, Course, FAQItem, University } from '@/types/chatbot'

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
  return universities.find((university) => query.includes(normalize(university.name))) ?? null
}

function findCourseByQuery(courses: Course[], query: string): Course | null {
  return courses.find((course) => query.includes(normalize(course.name))) ?? null
}

export async function getReply(message: string, data: ChatbotData): Promise<string> {
  const intent = detectIntent(message, data)

  switch (intent.type) {
    case 'greeting':
      return [
        'Namaste. I can help you compare universities, colleges, courses, career paths, and Nepal study FAQs.',
        'Try asking: "list universities in Kathmandu" or "which course fits business careers?"',
      ].join(' ')

    case 'list_universities':
      return [
        'Here are some notable Nepal universities:',
        listItems(data.universities, formatUniversity),
        'If you want, I can also narrow these by city or course area.',
      ].join('\n')

    case 'university_detail': {
      const query = intent.query
      const match = findUniversityByQuery(data.universities, query) ?? data.universities[0]
      return [
        `${match.name}:`,
        formatUniversity(match),
        'You can ask for admission fit, city-based options, or related courses next.',
      ].join('\n')
    }

    case 'list_colleges':
      return [
        'Here are some Nepal colleges worth exploring:',
        listItems(data.colleges, formatCollege),
        'I can also compare colleges against universities if that helps.',
      ].join('\n')

    case 'list_courses':
      return [
        'Popular study fields in Nepal include:',
        listItems(data.courses, formatCourse),
        'Ask for a specific course if you want admission or career guidance.',
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
      ].join('\n')

    case 'unknown':
    default:
      return [
        'I could not confidently match that question yet.',
        'Try asking about universities, colleges, courses, careers, visa, cost, or a specific FAQ topic.',
        `Detected intent: ${getIntentLabel(intent.type)}.`,
      ].join(' ')
  }

  return 'I found related guidance, but I need a little more detail to answer well. Please ask again with a university, course, or topic name.'
}

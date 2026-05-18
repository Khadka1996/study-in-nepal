import type { ChatbotData, FAQItem, Intent, IntentType } from '@/types/chatbot'

export const GREETINGS = ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good evening']
export const UNI_TRIGGERS = ['university', 'universities', 'campus', 'institution']
export const COURSE_TRIGGERS = ['course', 'courses', 'program', 'programs', 'study field', 'major']
export const COLLEGE_TRIGGERS = ['college', 'colleges', 'institute', 'institutes']
export const CAREER_TRIGGERS = ['career', 'job', 'jobs', 'work', 'employment', 'internship', 'internships']
export const VISA_TRIGGERS = ['visa', 'student visa', 'permit', 'immigration']
export const COST_TRIGGERS = ['cost', 'fee', 'fees', 'tuition', 'budget', 'living cost', 'scholarship']

export function normalize(input: string): string {
  return input.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, ' ')
}

function includesAny(query: string, triggers: string[]): boolean {
  return triggers.some((trigger) => query.includes(trigger))
}

function bestEntityMatch(query: string, names: string[]): string | null {
  const normalizedNames = names.map((name) => normalize(name))
  const exact = normalizedNames.find((name) => query.includes(name))

  if (exact) {
    return exact
  }

  const partial = normalizedNames.find((name) => name.split(' ').some((part) => part.length > 3 && query.includes(part)))
  return partial ?? null
}

export function scoreFAQ(query: string, faq: FAQItem): number {
  const normalizedQuestion = normalize(faq.question)
  const normalizedAnswer = normalize(faq.answer)
  const normalizedTags = (faq.tags ?? []).map(normalize)
  const questionWords = normalizedQuestion.split(/\s+/)

  let score = 0

  questionWords.forEach((word) => {
    if (word.length > 2 && query.includes(word)) {
      score += 2
    }
  })

  normalizedTags.forEach((tag) => {
    if (query.includes(tag)) {
      score += 3
    }
  })

  if (normalizedAnswer.split(/\s+/).some((word) => word.length > 4 && query.includes(word))) {
    score += 1
  }

  return score
}

export function detectIntent(message: string, data: ChatbotData): Intent {
  const query = normalize(message)

  if (!query) {
    return { type: 'unknown', confidence: 0, query }
  }

  if (includesAny(query, GREETINGS)) {
    return { type: 'greeting', confidence: 0.96, query }
  }

  if (includesAny(query, CAREER_TRIGGERS)) {
    return { type: 'career_info', confidence: 0.9, query }
  }

  if (includesAny(query, COURSE_TRIGGERS)) {
    const courseName = bestEntityMatch(query, data.courses.map((course) => course.name))
    return {
      type: courseName ? 'course_detail' : 'list_courses',
      confidence: courseName ? 0.88 : 0.82,
      query,
    }
  }

  if (includesAny(query, COLLEGE_TRIGGERS)) {
    return { type: 'list_colleges', confidence: 0.9, query }
  }

  if (includesAny(query, UNI_TRIGGERS)) {
    const universityName = bestEntityMatch(query, data.universities.map((university) => university.name))
    return {
      type: universityName ? 'university_detail' : 'list_universities',
      confidence: universityName ? 0.88 : 0.92,
      query,
    }
  }

  if (includesAny(query, VISA_TRIGGERS) || includesAny(query, COST_TRIGGERS)) {
    return { type: 'general_info', confidence: 0.82, query }
  }

  const bestFaq = data.faqs
    .map((faq) => ({ faq, score: scoreFAQ(query, faq) }))
    .sort((left, right) => right.score - left.score)[0]

  if (bestFaq && bestFaq.score >= 4) {
    return { type: 'faq_match', confidence: Math.min(0.98, 0.6 + bestFaq.score / 10), query }
  }

  if (query.includes('about nep') || query.includes('nepal study') || query.includes('study in nepal')) {
    return { type: 'general_info', confidence: 0.86, query }
  }

  return { type: 'unknown', confidence: 0.2, query }
}

export function getIntentLabel(intentType: IntentType): string {
  switch (intentType) {
    case 'list_universities':
      return 'universities'
    case 'university_detail':
      return 'university details'
    case 'list_colleges':
      return 'colleges'
    case 'list_courses':
      return 'courses'
    case 'course_detail':
      return 'course details'
    case 'career_info':
      return 'career guidance'
    case 'faq_match':
      return 'FAQ match'
    case 'general_info':
      return 'general guidance'
    case 'greeting':
      return 'greeting'
    default:
      return 'unknown'
  }
}

import type { ChatbotData, FAQItem, Intent, IntentType } from '@/types/chatbot'

export const GREETINGS = ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good evening']
export const UNI_TRIGGERS = ['university', 'universities', 'campus', 'institution']
export const COURSE_TRIGGERS = ['course', 'courses', 'program', 'programs', 'study field', 'major']
export const SCHOOL_TRIGGERS = ['school', 'schools', 'academy', 'secondary', '+2', 'higher secondary']
export const COLLEGE_TRIGGERS = ['college', 'colleges', 'institute', 'institutes']
export const CAREER_TRIGGERS = ['career', 'job', 'jobs', 'work', 'employment', 'internship', 'internships']
export const VISA_TRIGGERS = ['visa', 'student visa', 'permit', 'immigration']
export const COST_TRIGGERS = ['cost', 'fee', 'fees', 'tuition', 'budget', 'living cost', 'scholarship']
export const SERVICE_TRIGGERS = ['service', 'services', 'offer', 'offered', 'do you offer', 'what can you help with']
export const CONTACT_TRIGGERS = ['phone', 'address', 'contact', 'email', 'whatsapp', 'call us']

const UNIVERSITY_ALIASES: Record<string, string[]> = {
  'tribhuvan university': ['tu', 'tribhuvan', 't.u.'],
  'kathmandu university': ['ku', 'kathmandu'],
  'pokhara university': ['pu', 'pokhara', 'pokhara university'],
  'purbanchal university': ['purbanchal', 'purbu'],
  'nepal open university': ['nou', 'open university'],
  'mid-west university': ['mwu', 'mid western', 'mid-west'],
  'far-western university': ['fwu', 'far western', 'far-western'],
  'lumbini buddhist university': ['lbu', 'lumbini'],
  'agriculture and forestry university': ['afu', 'agriculture university', 'faculty of agriculture'],
  'nepal medical college': ['nmc', 'nepal medical'],
  'b.p. koirala institute of health sciences': ['bpkihs', 'bp koirala', 'b p koirala'],
}

const COLLEGE_ALIASES: Record<string, string[]> = {
  'ratna rajya laxmi campus': ['ratna rajya', 'ratnarajya', 'ratna rajyalaxmi'],
  'ratna rajyalaxmi campus': ['ratna rajya', 'ratnarajya', 'ratna rajyalaxmi'],
  'padma kanya multiple campus': ['padma kanya', 'pk campus', 'padmakanya'],
}

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

function matchesAlias(query: string, name: string): boolean {
  const aliases = UNIVERSITY_ALIASES[name.toLowerCase()] || []
  return aliases.some((alias) => query === normalize(alias) || query.includes(normalize(alias)))
}

function matchesCollegeAlias(query: string, name: string): boolean {
  const aliases = COLLEGE_ALIASES[name.toLowerCase()] || []
  return aliases.some((alias) => query === normalize(alias) || query.includes(normalize(alias)))
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

  if (includesAny(query, SERVICE_TRIGGERS)) {
    return { type: 'service_info', confidence: 0.94, query }
  }

  if (includesAny(query, CONTACT_TRIGGERS)) {
    return { type: 'contact_info', confidence: 0.94, query }
  }

  if (includesAny(query, COURSE_TRIGGERS)) {
    const courseName = bestEntityMatch(query, data.courses.map((course) => course.name))
    return {
      type: courseName ? 'course_detail' : 'list_courses',
      confidence: courseName ? 0.88 : 0.82,
      query,
    }
  }

  if (includesAny(query, SCHOOL_TRIGGERS)) {
    const schoolNames = (data.schools ?? []).map((school) => school.name)
    const schoolName = bestEntityMatch(query, schoolNames)
    return {
      type: schoolName ? 'school_detail' : 'list_schools',
      confidence: schoolName ? 0.88 : 0.82,
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

  const matchedUniversity = data.universities.find((university) => matchesAlias(query, university.name))
  if (matchedUniversity) {
    return { type: 'university_detail', confidence: 0.9, query }
  }

  const matchedCollege = data.colleges.find((college) => matchesCollegeAlias(query, college.name) || query.includes(normalize(college.name)))
  if (matchedCollege) {
    return { type: 'college_detail', confidence: 0.9, query }
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

  if (query === 'faq' || query.includes('faq ') || query.includes('frequently asked')) {
    return { type: 'faq_match', confidence: 0.8, query }
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
    case 'list_schools':
      return 'schools'
    case 'school_detail':
      return 'school details'
    case 'list_colleges':
      return 'colleges'
    case 'college_detail':
      return 'college details'
    case 'list_courses':
      return 'courses'
    case 'course_detail':
      return 'course details'
    case 'career_info':
      return 'career guidance'
    case 'service_info':
      return 'service guidance'
    case 'contact_info':
      return 'contact details'
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

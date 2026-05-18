export type ChatRole = 'assistant' | 'user'

export interface ChatMessage {
  id: string
  role: ChatRole
  content: string
}

export interface ChatSuggestion {
  label: string
  prompt: string
}

export interface University {
  name: string
  city: string
  province?: string
  description: string
  website?: string
  popularCourses?: string[]
}

export interface College {
  name: string
  city: string
  description: string
  university?: string
  popularCourses?: string[]
}

export interface Course {
  name: string
  level: 'Certificate' | 'Diploma' | 'Bachelor' | 'Master' | 'PhD' | 'Short Course'
  category: string
  description: string
  careerPaths?: string[]
}

export interface FAQItem {
  question: string
  answer: string
  tags?: string[]
}

export interface Career {
  title: string
  summary: string
  relatedCourses?: string[]
  skills?: string[]
}

export interface GeneralInfo {
  studyInNepalOverview: string
  visaInfo: string[]
  costInfo: string[]
  accommodationInfo: string[]
  scholarshipInfo: string[]
  contactInfo: string[]
}

export type IntentType =
  | 'list_universities'
  | 'university_detail'
  | 'list_colleges'
  | 'list_courses'
  | 'course_detail'
  | 'career_info'
  | 'faq_match'
  | 'general_info'
  | 'greeting'
  | 'unknown'

export interface Intent {
  type: IntentType
  confidence: number
  query: string
}

export interface ChatbotData {
  universities: University[]
  colleges: College[]
  courses: Course[]
  faqs: FAQItem[]
  careers: Career[]
  general: GeneralInfo
}
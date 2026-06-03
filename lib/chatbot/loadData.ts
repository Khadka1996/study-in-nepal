import type { ChatbotData, College, Course, FAQItem, Career, GeneralInfo, School, University } from '@/types/chatbot'

type DataCache = ChatbotData | null

let dataCache: DataCache = null
let pendingLoad: Promise<ChatbotData> | null = null

async function fetchJsonFile<T>(path: string): Promise<T> {
  const response = await fetch(path)

  if (!response.ok) {
    throw new Error(`Failed to load ${path}`)
  }

  return (await response.json()) as T
}

export async function loadChatbotData(): Promise<ChatbotData> {
  if (dataCache) {
    return dataCache
  }

  if (pendingLoad) {
    return pendingLoad
  }

  pendingLoad = Promise.all([
    fetchJsonFile<University[]>('/data/universities.json'),
    fetchJsonFile<School[]>('/data/schools.json'),
    fetchJsonFile<College[]>('/data/colleges.json'),
    fetchJsonFile<Course[]>('/data/courses.json'),
    fetchJsonFile<FAQItem[]>('/data/faq.json'),
    fetchJsonFile<Career[]>('/data/careers.json'),
    fetchJsonFile<GeneralInfo>('/data/general.json'),
  ])
    .then(([universities, schools, colleges, courses, faqs, careers, general]) => {
      dataCache = {
        universities,
        schools,
        colleges,
        courses,
        faqs,
        careers,
        general,
      }

      return dataCache
    })
    .finally(() => {
      pendingLoad = null
    })

  return pendingLoad as Promise<ChatbotData>
}

export function clearCache(): void {
  dataCache = null
  pendingLoad = null
}

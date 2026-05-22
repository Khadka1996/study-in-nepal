const WHATSAPP_PHONE_NUMBER = '9779823153502'

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildUniversityWhatsAppMessage(universityName: string): string {
  return `Hi, I need details about ${universityName} from Study in Nepal.`
}

export function buildCollegeWhatsAppMessage(collegeName: string, universityName: string): string {
  return `Hi, I want inquiry about ${collegeName} affiliated with ${universityName} from Study in Nepal.`
}
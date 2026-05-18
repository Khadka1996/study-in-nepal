export interface AnalyticsEventPayload {
  action: string
  category: string
  label?: string
  value?: number
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(payload: AnalyticsEventPayload): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', payload.action, {
    event_category: payload.category,
    event_label: payload.label,
    value: payload.value,
  })
}

export function trackWhatsAppClick(): void {
  trackEvent({ action: 'whatsapp_click', category: 'engagement' })
}

export function trackChatbotOpen(): void {
  trackEvent({ action: 'chatbot_open', category: 'engagement' })
}

export function trackContactFormSubmitted(): void {
  trackEvent({ action: 'contact_form_submitted', category: 'lead' })
}

export function trackAppointmentBooked(): void {
  trackEvent({ action: 'appointment_booked', category: 'lead' })
}

import emailjs from '@emailjs/browser'

export interface EmailPayload {
  templateParams: Record<string, unknown>
}

export interface EmailDeliveryResult {
  mode: 'emailjs' | 'gmail-compose'
  recipient: string
}

function getEmailJsConfig(): { publicKey: string; serviceId: string; templateId: string } | null {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    return null
  }

  return {
    publicKey,
    serviceId,
    templateId,
  }
}

function getTemplateValue(templateParams: Record<string, unknown>, keys: string[]): string {
  for (const key of keys) {
    const value = templateParams[key]
    if (typeof value === 'string' && value.trim().length > 0) {
      return value.trim()
    }
  }

  return ''
}

function openGmailCompose(recipient: string, subject: string, body: string): void {
  const url = new URL('https://mail.google.com/mail/')
  url.searchParams.set('view', 'cm')
  url.searchParams.set('fs', '1')
  url.searchParams.set('to', recipient)
  if (subject) {
    url.searchParams.set('su', subject)
  }
  if (body) {
    url.searchParams.set('body', body)
  }

  if (typeof window !== 'undefined') {
    window.open(url.toString(), '_blank', 'noopener,noreferrer')
  }
}

export async function sendEmail(payload: EmailPayload): Promise<EmailDeliveryResult> {
  const config = getEmailJsConfig()
  const templateParams = payload.templateParams
  const recipient = getTemplateValue(templateParams, ['to_email', 'recipient_email', 'to']) || 'directorbusiness@icecollege.edu.np'
  const subject = getTemplateValue(templateParams, ['subject'])
  const body = getTemplateValue(templateParams, ['message'])

  if (!config) {
    openGmailCompose(recipient, subject, body)
    return { mode: 'gmail-compose', recipient }
  }

  await emailjs.send(config.serviceId, config.templateId, payload.templateParams, {
    publicKey: config.publicKey,
  })

  return { mode: 'emailjs', recipient }
}

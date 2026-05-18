import emailjs from '@emailjs/browser'

export interface EmailPayload {
  templateParams: Record<string, unknown>
}

function getEmailJsConfig(): { publicKey: string; serviceId: string; templateId: string } {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('Missing EmailJS configuration.')
  }

  return {
    publicKey,
    serviceId,
    templateId,
  }
}

export async function sendEmail(payload: EmailPayload): Promise<void> {
  const config = getEmailJsConfig()

  await emailjs.send(config.serviceId, config.templateId, payload.templateParams, {
    publicKey: config.publicKey,
  })
}

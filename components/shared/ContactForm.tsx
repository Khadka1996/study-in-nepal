'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { trackContactFormSubmitted } from '@/lib/analytics'
import { sendEmail } from '@/lib/email'
import { logger } from '@/lib/logger'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(7, 'Please enter a valid phone number.'),
  subject: z.enum(['Admissions', 'Universities', 'Courses', 'Booking', 'Other']),
  message: z.string().min(15, 'Please include a few more details.'),
  honeypot: z.string().max(0).optional(),
})

export type ContactFormValues = z.infer<typeof contactSchema>

interface ToastState {
  message: string
  type: 'error' | 'success'
}

const subjectOptions: Array<ContactFormValues['subject']> = ['Admissions', 'Universities', 'Courses', 'Booking', 'Other']

export default function ContactForm(): JSX.Element {
  const [toast, setToast] = useState<ToastState | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const lastValuesRef = useRef<ContactFormValues | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: 'Admissions',
      message: '',
      honeypot: '',
    },
  })

  const submitContact = async (values: ContactFormValues): Promise<void> => {
    if (values.honeypot && values.honeypot.length > 0) {
      return
    }

    lastValuesRef.current = values
    setIsSubmitting(true)
    setToast(null)

    try {
      await sendEmail({
        templateParams: {
          full_name: values.fullName,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          form_type: 'contact',
        },
      })

      reset()
      trackContactFormSubmitted()
      setToast({ message: "Message sent! We'll reply within 24 hours.", type: 'success' })
    } catch (error: unknown) {
      logger.error('Contact form submission failed', error)
      setToast({ message: 'Something went wrong. Please retry your message.', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const retrySubmit = (): void => {
    if (lastValuesRef.current) {
      void submitContact(lastValuesRef.current)
    }
  }

  return (
    <div className="space-y-5">
      {toast ? (
        <div className={`rounded-3xl border p-4 text-sm ${toast.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'border-rose-200 bg-rose-50 text-rose-900'}`}>
          <div className="flex items-start justify-between gap-4">
            <p>{toast.message}</p>
            {toast.type === 'error' ? (
              <button type="button" onClick={retrySubmit} className="shrink-0 font-semibold text-[var(--color-accent)] focus-ring">
                Retry
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      <form className="grid gap-5" onSubmit={handleSubmit(submitContact)}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-full-name" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Full Name
            </label>
            <input id="contact-full-name" {...register('fullName')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
            {errors.fullName ? <p className="mt-2 text-xs text-rose-600">{errors.fullName.message}</p> : null}
          </div>

          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Email
            </label>
            <input id="contact-email" type="email" {...register('email')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
            {errors.email ? <p className="mt-2 text-xs text-rose-600">{errors.email.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Phone
            </label>
            <input id="contact-phone" {...register('phone')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
            {errors.phone ? <p className="mt-2 text-xs text-rose-600">{errors.phone.message}</p> : null}
          </div>

          <div>
            <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Subject
            </label>
            <select id="contact-subject" {...register('subject')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring">
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.subject ? <p className="mt-2 text-xs text-rose-600">{errors.subject.message}</p> : null}
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
            Message
          </label>
          <textarea id="contact-message" rows={6} {...register('message')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
          {errors.message ? <p className="mt-2 text-xs text-rose-600">{errors.message.message}</p> : null}
        </div>

        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('honeypot')} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] disabled:cursor-not-allowed disabled:opacity-70 focus-ring"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Sending...
            </span>
          ) : (
            'Send message'
          )}
        </button>
      </form>
    </div>
  )
}
